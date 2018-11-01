class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:chat_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    puts data
    binding.pry
    chat = Chat.find_or_create_by(trip_id: params[:trip_id])
    chat.messages << Message.create(body: data["message"], user: User.find(data["user"]["user_id"]))

    chat_key = chat.id

    chat_json = {
      "chat_key": chat_key,
      "message": data["message"],
      "user": data["user"]
    }

    ActionCable.server.broadcast("chat_#{params[:chat_id]}", chat_json)
  end

end
