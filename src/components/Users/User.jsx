import React from 'react';
import p from './Users.module.css';
import { NavLink } from "react-router-dom";
import photoUser from './../../assets/images/images.jpg'

let User = ({ user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={p.row}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : photoUser}
                            alt="" />
                    </NavLink>
                </div>
                <div className={p.button}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {unfollow(user.id) }}>
                            Unfollow
                        </button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {follow(user.id) }}>
                            Follow
                        </button>}
                </div>
            </div>
            <div className={`${p.row} ${p.border}`}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.id}</div>
                </div>
                <div>
                    <div>{user.status}</div>
                    <div>{user.uniqueUrlName}</div>
                </div>
            </div>
        </div>
    )
}
      
export default User;