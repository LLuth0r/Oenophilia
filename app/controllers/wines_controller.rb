class WinesController < ApplicationController
    before_action :set_wine, only: :show
    before_action :authorize_request, only: [:create, :update, :destroy]
    

    def index
        @wines = Wine.all

        render json: @wines, include: :vineyard
    end


    def show
        render json: @wine, include: :vineyard
    end


    def create
        @wine = Wine.new(wine_params)
        @wine.build_vineyard
        @wine.user = @current_user
        puts @wine.save!
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
        params.require(:wine).permit(:name, :vintage, :varietal, :price_min, 
            :price_max, :size, :category, vineyard_attributes: [:vineyard_name])
    end
end