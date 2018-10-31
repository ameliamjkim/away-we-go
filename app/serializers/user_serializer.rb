class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :followers, :followeds, :current_user_id

  def current_user_id
    if scope
      scope.id
    else
      nil
    end
  end
end
