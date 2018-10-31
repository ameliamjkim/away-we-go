import React from 'react'
import { Link } from 'react-router'

 const UserShowTile = (props) => {
   let followers
   let followersTitle
   let followeds
   let followedsTitle

   if(props.followers.length != 0){
     followersTitle = "Followers:"
     followers = props.followers.length
   }

   if(props.followeds.length != 0){
     followedsTitle = "Following:"
     followeds = props.followeds.length
   }
   
  return(
    <div className="tile cell small-10 small-offset-1 large-6 large-offset-3">
      <div className="callout">
        <div>
          <p className="text-right"> {followersTitle} {followers} </p>
          <p className="text-right"> {followedsTitle} {followeds} </p>
          <h1> {props.firstName} {props.lastName}</h1>
          <p> email: {props.email} </p>
        </div>
      </div>
    </div>
  )
}

export default UserShowTile
