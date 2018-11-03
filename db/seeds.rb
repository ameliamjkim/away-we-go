# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_1 = User.create(first_name: "Amelia", last_name: "Kim", email: "ameliamjkim@gmail.com", password: "helloworld")
user_2 = User.create(first_name: "Benji", last_name: "Pun", email: "dbenjip@gmail.com", password: "helloworld")
user_3 = User.create(first_name: "Richel", last_name: "Palisoc", email: "richel@gmail.com", password: "helloworld")
user_4 = User.create(first_name: "Richel", last_name: "Palisoc", email: "richel@gmail.com", password: "helloworld")

trip_1 = Trip.create(name: "Korea", user: User.first, start_date: "01 Feb 2019", end_date: "13 Feb 2019")
trip_2 = Trip.create(name: "Greece", user: User.first, start_date: "11 Nov 2018", end_date: "20 Nov 2018")
trip_3 = Trip.create(name: "Hong Kong", user: User.first, start_date: "11 Nov 2018", end_date: "20 Nov 2018")
trip_4 = Trip.create(name: "California", user: User.first, start_date: "10 Oct 2018", end_date: "17 Oct 2018")
