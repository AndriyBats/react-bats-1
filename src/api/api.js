import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "f4f2e957-52cc-4722-bb52-6cd7c53e4e87"
    }
})

export const usersAPI = {
    // auth () {return instance.get(`auth/me`).then(response => response.data)},
    follow (userId) {return instance.post(`follow/${userId}`).then(response => response.data)},
    unfollow (userId) {return instance.delete(`follow/${userId}`).then(response => response.data)},
    getProfile (userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId);
    },
    getUsers (currentPage, pageSize) {
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (userId) {return instance.get(`profile/${userId}`).then(response => response.data)},
    getStatus (userId) {return instance.get(`profile/status/${userId}`).then(response => response.data)},
    updateStatus (status) {return instance.put(`profile/status`, {status: status}).then(response => response.data)}
}

export const authAPI = {
    auth () {return instance.get(`auth/me`).then(response => response.data)},
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    logout (email, password, rememberMe = false) {
        return instance.delete(`auth/login`).then(response => response.data);
    },
}
