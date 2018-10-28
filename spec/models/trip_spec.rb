require 'rails_helper'

describe Trip do
  it { should have_valid(:name).when("Greece") }
  it { should_not have_valid(:name).when(nil, "") }
end
