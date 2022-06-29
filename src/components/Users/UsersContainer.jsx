import React from 'react';
import Users from './Users';
import {compose} from "redux";
import {connect} from 'react-redux';
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    unfollow,
    requestUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
} from '../../redux/users-reducer';

import {
    getUsers,
    getPageSize,
    getIsFetching,
    getCurrentPage,
    getTotalUsersCount,
    getFollowingInProgress, getUsersSuperSelector
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         isFetching: state.usersPage.isFetching,
//         currentPage: state.usersPage.currentPage,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        // users: getUsers(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            getUsers: requestUsers,
            setCurrentPage,
            toggleIsFollowingProgress
        }
    )
)(UsersContainer)
