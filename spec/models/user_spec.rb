require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { User.create(first_name: "Amelia", last_name: "Kim", email: "ameliamjkim@gmail.com", password: "helloeveryone") }
  it { should have_valid(:first_name).when("John") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:last_name).when("Doe") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should have_valid(:email).when("johndoe@gmail.com") }
  it { should_not have_valid(:email).when(nil, "") }

  it { should have_valid(:password).when("helloeveryone") }
  it { should_not have_valid(:password).when(nil, "") }
end
