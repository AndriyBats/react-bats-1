import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 12},
        {id: 2, message: 'How is your name?', likesCount: 10},
        {id: 3, message: 'Hi!', likesCount: 8},
        {id: 4, message: 'How are you?', likesCount: 11},
        {id: 5, message: 'How is your name?', likesCount: 9}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 6, message: action.newPostBody, likesCount: 9}
                ]
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getUserProfile = (userId) => {
    return (dispatch) =>{
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const updateProfile = (prevProps, userId) => {
    return (dispatch) => {
        if (prevProps.router.params.userId !== userId) {
            let userId = 1;
            profileAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            });
        }
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data =>{
            dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data =>{
            if(data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;
