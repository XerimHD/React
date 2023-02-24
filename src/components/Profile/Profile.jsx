import React from "react";
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPosts';
import Ad from "./Ad/Ad";
import Dec from "./Ad/Dec/Dec";



const Profile = (props) => {
    
    return (
        <div >
            <Ad/>
            <Dec/>
            <MyPost post={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}/>

            
        </div>

    )
}

export default Profile;