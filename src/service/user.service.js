import axios from "axios";
import authHeader from "./auth-header";
import {get, post} from './request'
import { ADMIN_GET_ALL_USERS, ADMIN_CREATE_ADDRESS, ADMIN_CREATE_CUSTOMER } from './apiUrls'

class UserService {
  getAllUsers() {
    console.log(authHeader())
    return get({
      url: ADMIN_GET_ALL_USERS(), 
      headers: authHeader() 
    })
  }

  saveAddress(address) {
    return post({
      url: ADMIN_CREATE_ADDRESS(),
      data: address,
      headers: authHeader()
    });
  }

  saveUserInfo(user) {
    return post({
      url: ADMIN_CREATE_CUSTOMER(),
      data: user,
      headers: authHeader()
    });
  }

  // getModeratorBoard() {
  //   return axios.get(API_URL + "mod", { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + "admin", { headers: authHeader() });
  // }
}

export default new UserService();