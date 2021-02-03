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
        puts params
        @wine = Wine.new(name: params[:wine][:name],varietal: params[:wine][:varietal], vintage: params[:wine][:vintage], price_min: params[:wine][:price_min],
        price_max: params[:wine][:price_max], size: params[:wine][:size], category: params[:wine][:category])
        @vineyard = Vineyard.new(vineyard_name: params[:vineyard][:vineyard_name])
        puts @vineyard.inspect
        # @wine.build_vineyard
        if @vineyard.save 
            @wine.vineyard = @vineyard
            @wine.user = @current_user
            if @wine.save
                render json: @wine, status: :created, location: @wine
            else
                render json: @wine.errors, status: :unprocessable_entity
            end
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
            :price_max, :size, :category, :vineyard_name)
    end

    def vineyard_params
        params.require(:vineyard).permit(:vineyard_name)
    end
end