class WinesController < ApplicationController
    before_action :set_wine, only: :show
    before_action :authorize_request, only: [:create, :update, :destroy]

    def index
        @wines = Wine.all

        render json: @wines
    end


    def show
        render json: @wine, include :vineyards
    end


    def create
        @wine = Wine.new(wine_params)
        @wine.user = @current_user

        if @wine.save
            render json: @wine, status: :created, location: @wine
        else
            render json: @wine.errors, status: :unprocessable_entity
        end
    end

    
    def update
        @wine = @current_user.wines.find(params[:id])

        if @wine.update(wine_params)
            render json: @wine
        else
            render json: @wine.errors, status: :unprocessable_entity
        end
    end


    def destroy
        @wine = @current_user.wines.find(params[:id])
        @wine.destroy
    end


    private

    def set_wine
        @wine = Wine.find(params[:id])
    end

    def wine_params
        params.require(:wine).permit(:name)
    end
end
