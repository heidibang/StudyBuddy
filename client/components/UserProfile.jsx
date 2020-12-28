import React, {useState} from 'react';


// export default function Userpage (props){
//   const [name,updateName] = useState('Vince');
//   const [school, updateSchool] = useState('Codesmith');
//   const [subject, updateClass] = useState(['FrontEnd ','React-hooks']);
//   const [events, updateEvents] = useState(['Wednesday Standups']);
//   return(
//     <div> 
//       <div>Welcome {name}</div>
//       <div> Current School: {school} </div>
//       <div> Current Class: {subject} </div>
//       <div> Upcoming Events: {events}  </div>
//       <div>
//         <input type="text" className ="rough" value ={name} onChange={updateName}/>
//         <button onClick={() => updateName(name = document.getElementsByClassName("rough").value)}>Change Name!</button>
//       </div>
//     </div>
//   );
// }

function UserProfile() {

  //grab fname, lname
  const [name,updateName] = useState('John Smith');
  const [location, updateLocation] = useState('Los Angeles, CA')
  const [contact, updateContact] = useState('jsmith@google.com')
  // const [bio, updateBio] = useState('')

  return(
    <div className="userProfile">
      <img className="profilePic" src="/john-smith.jpg"></img>
      <div className="displayName">{name}</div>
      <div className="location">{location}</div>
      <div className="contact">{contact}</div>
      <div className="userSchools">{schools}</div>
      <div className="userClasses">{classes}</div>
      <div className="userEvents">{events}</div>

      {/* set edit button here? */}


    </div>

  )

}

export default UserProfile;