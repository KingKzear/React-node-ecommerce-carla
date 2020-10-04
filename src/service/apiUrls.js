import {isLocalhost} from "./../const/constant";

const API_URL = isLocalhost ? process.env.REACT_APP_LOCAL_API_URL : process.env.REACT_APP_STAGING_API_URL
console.log(API_URL)
const appendParameters = (url, params) => {
    let result = new URLSearchParams();
    for (let key in params) {
        result.append(key, params[key]);
    }
    return `${url}?${result}`;
};

export const AUTH_URL = () => {
    return `${API_URL}/auth/`;
}

export const ADMIN_GET_ALL_USERS = () => {
    return `${API_URL}/user/all`;
}

export const ADMIN_CREATE_ADDRESS = () => {
    return `${API_URL}/address/save`;
}

export const ADMIN_CREATE_CUSTOMER = () => {
    return `${API_URL}/user/create-customer`;
}