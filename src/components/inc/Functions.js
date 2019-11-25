import { API_URL } from "./Config";
import axios from 'axios';

export const bloodGroup = () => {
   return axios.get(`${API_URL}/get_all_blood_group`)
   .then(function(response) {
     return response.data
   })
    .catch(function (ex) {
     console.log('parsing failed', ex)
   })
};
 
export const get_allUserInfo = () => {
   return axios.get(`${API_URL}/get_all_user_info`)
    .then(function (response) {
     return response.data
   })
    .catch(function (ex) {
        return ex;
   })
};
 
export const get_District = () => {
   return axios.get(`${API_URL}/get_all_data/district`)
    .then(function (response) {
     return response.data
   })
    .catch(function (ex) {
        return ex;
   })
};
 
export const settings = () => {
   return axios.get(`${API_URL}/get_single_data`)
    .then(function (response) {
     return response.data
   })
    .catch(function (ex) {
        return ex;
   })
 };