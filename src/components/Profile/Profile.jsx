import React from "react";
import "../Profile/Profile.css";
import MyPosts from "../MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";


function Profile(props) {

  return(
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;