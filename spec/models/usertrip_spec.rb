require 'rails_helper'

describe Usertrip do
  let!(:trip) { Trip.create(name: "Greece") }
  let!(:user) { User.create(first_name: "Amelia", last_name: "Kim", email: "ameliamjkim@gmail.com", password: "helloeveryone") }

  it { should have_valid(:user).when(user) }
  it { should_not have_valid(:user).when(nil) }

  it { should have_valid(:trip).when(trip) }
  it { should_not have_valid(:trip).when(nil) }

end
