class MessagesController < ApplicationController
  before_action :authenticate_user!
  before_action :get_messages

  def index
  	@user = @message.user.username
  end

  def create
    message = current_user.messages.build(params[:message])
    if message.save
      ActionCable.server.broadcast 'room_channel',
                                   content:  message.content,
                                   username: message.user.username
    end
  end

  private

    def get_messages
      @messages = Message.all
      @message  = current_user.messages.build
    end

    def message_params
      params.require(:message).permit(:content)
    end
end