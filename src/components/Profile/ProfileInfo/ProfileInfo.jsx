import React from 'react';
import pr from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from  "./ProfileStatus"

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={pr.content}>
                {/*<img src='https://rafail.com.ua/wp-content/uploads/2017/03/Baltic_Sea_Circle-35.jpg' alt=''/>*/}
            </div>
            <div className={pr.description}>
                <div>Ім'я: {props.profile.fullName}</div>
                <img src={props.profile.photos.large}/>
                <div>Про мене: {props.profile.aboutMe}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
