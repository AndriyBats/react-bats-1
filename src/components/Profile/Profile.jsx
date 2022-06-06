import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                postData={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile;
