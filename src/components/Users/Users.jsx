import React from 'react';
import p from './Users.module.css';
import {NavLink} from "react-router-dom";
import photoUser from './../../assets/images/images.jpg'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={p.item}>
            <div className={p.center}>
                    <span>
                    {pages.map(page => {
                        return <span
                            key={page}
                            className={`${props.currentPage === page && p.selectedPage} ${p.pages}`}
                            onClick={(e) => {
                                props.onPageChanged(page)
                            }}
                        >
                             {` ${page} `}
                        </span>
                    })}
                    </span>
            </div>
            {props.users.map(user => <div className={p.row} key={user.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img
                                    src={user.photos.small != null ? user.photos.small : photoUser}
                                    alt=""/>
                            </NavLink>
                        </div>
                        <div className={p.button}>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {props.unfollow(user.id)}}>
                                    Unfollow
                                </button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {props.follow(user.id)}}>
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
            )}
        </div>
    )
}

export default Users;
