class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :followers, :followeds, :current_user

  def current_user
    if scope
      scope
    else
      nil
    end
  end

end
