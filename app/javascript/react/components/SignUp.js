import React, {Component} from 'react'

class SignUp extends Component {
  constructor(props) {
    super(props)
      this.state = {
        user: null
      }
    }

  componentDidMount() {
   fetch('/api/v1/users',
   {
     credentials: 'same-origin',
   })
     .then(response => {
       if (response.ok) {
         return response
       } else {
         let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
         throw error
       }
     })
     .then(response => response.json())
     .then(data => {
       this.setState( {
         user: data[0].current_user_id
        } )
     })
     .catch(error => console.error(`Error in fetch: ${error.message}`))
  }
  render() {
    console.log(this.state.user)
    let intro
    let link
    if(this.state.user == "no_current_user") {
      intro = "Welcome to Away We Go, a website that help you track your future trips"
      link = <a href="/users/sign_up"> Adventure awaits! </a>
    } else {
      intro = "Welcome Back!"
      link = <a href="/trips"> See your Trips </a>
    }

    return(
      <div>
        <h3> {intro} </h3>
        <span className="callout text-center">
        {link}
        </span>
      </div>
    )
  }
}

export default SignUp
