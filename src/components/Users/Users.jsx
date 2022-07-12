import React from 'react';
import p from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return (
        <div className={p.item}>
            <Paginator 
                pageSize={pageSize}
                currentPage={currentPage} 
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount} 
             />
            {props.users.map(user => <User
                user={user}
                key={user.id}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress}  
            />
            )}
        </div>
    )
}

export default Users;