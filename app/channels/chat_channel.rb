class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:chat_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    chat = Chat.find_by(trip_id: data["trip_id"])
    chat.messages << Message.create(body: data["message"], user: User.find(data["user"]))

    chat_key = chat.id
    user = User.find(data["user"])

    chat_json = {
      "chat_key": chat_key,
      "message": data["message"],
      "user": user
    }
    ActionCable.server.broadcast("chat_#{params[:chat_id]}", chat_json)
  end
end
