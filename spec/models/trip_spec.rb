require 'rails_helper'

describe Trip do
  let!(:user) { User.create(first_name: "Amelia", last_name: "Kim", email: "ameliamjkim@gmail.com", password: "helloeveryone") }

  it { should have_valid(:name).when("Greece") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:user).when(user) }
  it { should_not have_valid(:user).when(nil) }

  it { should have_valid(:start_date).when("11/01/2018") }
  it { should_not have_valid(:start_date).when(nil, "") }

  it { should have_valid(:end_date).when("11/12/2018") }
  it { should_not have_valid(:end_date).when(nil, "") }
end
