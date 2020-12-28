import React, {useState, useContext, useEffect} from 'react';
import axios from "axios";
import { AppContext } from "./ContextProvider";



function Userpage() {
  //userID
  const { user } = useContext(AppContext)

  return(
    <div className="userProfile">
      <img className="profilePic" src="/john-smith.jpg"></img>
      <div className="displayName">{user.first_name + user.last_name}</div>
      <div className="location">{user.location}</div>
      <div className="contact">{user.email}</div>
      {/* <div className="userSchools">{schools}</div>
      <div className="userClasses">{classes}</div>
      <div className="userEvents">{events}</div> */}

      {/* set edit button here? */}


    </div>

  )

}

export default Userpage;