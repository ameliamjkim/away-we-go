class UserSerializer < ActiveModel::Serializer
  attributes :current_user_id

  def current_user_id
    if scope
      scope.id
    else
      nil
    end
  end

end
