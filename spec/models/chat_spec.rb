require 'rails_helper'

describe Chat do
  let!(:user) { User.create(first_name: "Amelia", last_name: "Kim", email: "ameliamjkim@gmail.com", password: "helloeveryone") }
  let!(:trip) { Trip.create(name: "Greece", start_date: "11/01/2022", end_date: "11/12/2022", user: user ) }

  it { should have_valid(:trip).when(trip) }
  it { should_not have_valid(:trip).when(nil) }

  it { should have_valid(:title).when("Greece Chat") }
  it { should have_valid(:title).when(nil, "") }

  it { should have_valid(:description).when("Greece!") }
  it { should have_valid(:description).when(nil, "") }

end
