import axios from 'axios'
import { toast } from "react-toastify";
import {api} from './api'

const apiEndPoint = `${api}/user/auth`;

export default function customerLogin(loginData) {

    return axios.post(apiEndPoint, loginData)
    .then(function (response) {
        console.log(response.data.data);
        console.log("Headers", response.headers)
        toast.success(`${response.data.msg}`);
        return response.data.jwt
    })
    .catch(function (error) {
        if(error.response.data) {
            console.log(error.response.data);
            toast.error(error.response.data);
        }
        if(error.response) {
            console.log(error.response);
            toast.error(error.response);
        }
        else {
            console.log(error);
            toast.error(error);
        }

    });

}