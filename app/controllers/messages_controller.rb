class MessagesController < ApplicationController
  before_action :set_message, only: [:show ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /messages
  def index
    @messages = Message.all

    render json: @messages, include: :user
  end

  # GET /messages/1
  def show
    render json: @message, include: :user
  end

  # POST /messages
  def create
    @message = Message.new(message_params)
    @message.user = @current_user
    puts @message.save!
    if @message.save
      render json: @message, status: :created, location: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @message = @current_user.messages.find(params[:id])
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:sender, :subject, :body)
    end
end
