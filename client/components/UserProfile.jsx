import React, {useState, useContext, useEffect} from 'react';
import axios from "axios";
import { AppContext } from "./ContextProvider";



function Userpage() {
  //userID


  const { user } = useContext(AppContext)

  const [name, updateName] = useState(user.first_name + ' ' + user.last_name)
  const [location, updateLocation] = useState(user.user_location);
  const [contact, updateContact] = useState(user.user_email)

  return(
    <div className="userProfile">
      <img className="profilePic" src="/john-smith.jpg"></img>
      <div className="displayName">{name}</div>
      <div className="location">{location}</div>
      <div className="contact">{contact}</div>
      {/* <div className="userSchools">{schools}</div>
      <div className="userClasses">{classes}</div>
      <div className="userEvents">{events}</div> */}

      {/* <button onClick */}


    </div>

  )

}

export default Userpage;