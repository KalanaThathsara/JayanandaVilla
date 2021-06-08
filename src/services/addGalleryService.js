import axios from 'axios'
import { toast } from "react-toastify";
import {api} from './api'

const apiEndPoint = `${api}/admin/addgallery`;

export default function addGallery(galleryData) {

    return axios.post(apiEndPoint, galleryData)
    .then(function (response) {
        console.log(response.data);
        toast.success(`${response.data}`);
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