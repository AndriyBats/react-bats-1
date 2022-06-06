import React from 'react';
import pr from './ProfileInfo.module.css';

const ProfileInfo = () => {

    return (
        <div>
            <div className={pr.content}>
                <img src='https://rafail.com.ua/wp-content/uploads/2017/03/Baltic_Sea_Circle-35.jpg' alt=''/>
            </div>
            <div className={pr.description}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;
