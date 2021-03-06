import {createSelector} from "reselect";

export const  getUsers = (state) => state.usersPage.users;
export const  getPageSize = (state) => state.usersPage.pageSize;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getFollowingInProgress = (state) => state.usersPage.followingInProgress;
export const  getUsersSuperSelector = createSelector(getUsers,  (users) =>  users.filter(u => true));