class VineyardsController < ApplicationController
    before_action :set_vineyard, only: :show
    before_action :authorize_request, only: [:create, :update, :destroy]

    #GET /vineyards
    def index
        @vineyards = Vineyard.all

        render json: @vineyards
    end

    #GET /vineyards/1
    def show
        render json: @vineyard, include: :wines
    end

    #POST /vineyards
    def create
        @vineyards = Vineyard.new(vineyard_params)
        @vineyard.user = @current_user
    end

    #PATCH/PUT /vineyards/1
    def update
        @vineyard = @current_user.vineyards.find(params[:id])

        if @vineyard.update(vineyard_params)
            render json: @vineyard
        else
            render json: @vineyard.errors, status: :unprocessable_entity
        end
    end

    #DELETE /vineyards/1
    def destroy
        @vineyard = @current_user.vineyards.find(params[:id])
        @vineyard.destroy
    end


    private

    def set_vineyard
        @vineyard = Vineyard.find(params[:id])
    end

    def vineyard_params
        params.require(:vineyard).permit(:vineyard_name)
    end
end
