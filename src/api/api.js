import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "f4f2e957-52cc-4722-bb52-6cd7c53e4e87"
    }
})

export const usersAPI = {
    follow (userId) {return instance.post(`follow/${userId}`)},
    getProfile (userId) {return profileAPI.getProfile(userId)},
    unfollow (userId) {return instance.delete(`follow/${userId}`)}, 
    getUsers (currentPage, pageSize) {return instance.get(`users/?page=${currentPage}&count=${pageSize}`)}
}

export const profileAPI = {
    getProfile (userId) {return instance.get(`profile/${userId}`)},
    getStatus (userId) {return instance.get(`profile/status/${userId}`)},
    updateStatus (status) {return instance.put(`profile/status`, {status: status})}
}

export const authAPI = {
    auth () {return instance.get(`auth/me`)},
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout (email, password, rememberMe = false) {
        return instance.delete(`auth/login`);
    },
}
