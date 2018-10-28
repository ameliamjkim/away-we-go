# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_1 = User.create(first_name: "Amelia", last_name: "Kim", email: "ameliamjkim@gmail.com", password: "helloworld")
user_2 = User.create(first_name: "Benji", last_name: "Pun", email: "dbenjip@gmail.com", password: "helloworld")

trip_1 = Trip.create(name: "Korea", user: User.first, start_date: "01 Feb 2019", end_date: "13 Feb 2019")
trip_2 = Trip.create(name: "Greece", user: User.first, start_date: "11 Nov 2018", end_date: "20 Nov 2018")
trip_3 = Trip.create(name: "Hong Kong", user: User.first, start_date: "11 Nov 2018", end_date: "20 Nov 2018")

usertrip_1 = Usertrip.create(trip_id: 1, user_id: 2)
usertrip_2 = Usertrip.create(trip_id: 2, user_id: 2)
usertrip_3 = Usertrip.create(trip_id: 3, user_id: 2)
usertrip_4 = Usertrip.create(trip_id: 1, user_id: 1)
usertrip_5 = Usertrip.create(trip_id: 2, user_id: 1)
usertrip_6 = Usertrip.create(trip_id: 3, user_id: 1)
