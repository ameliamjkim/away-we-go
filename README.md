# Away We Go

Away We Go is a central website for friends who are traveling built in React on Rails. With Away We Go, a user can plan trips, add friends to their trips, check the weather in their location, and chat with friends.

This website was created as a capstone project for Launch Academy.

---

### Getting Started
To use Away We Go locally run:
```
$ bundle install
$ bundle exec rake:db create
$ bundle exec rake:db migrate
$ rails server
```
In a separate terminal tab run:
```
$ yarn install
$ yarn run start
```
Finally, head to your local server at localhost:3000


### Running Tests
Away We Go was created using in accordance with Agile methodology. Test Driven Development was implemented in RSpec for Rails as well as Enzyme testing with Jasmine and Karma for React.

To run tests for Away We Go, first run:
```
$ bundle exec rspec
```
Then run:
```
$ yarn run test
```

### Built With
* [Foundation](https://foundation.zurb.com/sites/docs/) - CSS Framework
* [ActionCable](https://guides.rubyonrails.org/action_cable_overview.html) - Websocket and chat integration
* [Weatherbit](https://www.weatherbit.io/) - Third party weather API
* [Countryflags](https://countryflags.io/) - Third party country flags API

### Check out Away We Go
* [Away We Go](https://away-we-go.herokuapp.com/)

### Acknowledgments
* Thanks to all my peers and educators at Launch Academy!
