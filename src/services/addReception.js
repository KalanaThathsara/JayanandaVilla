import axios from "axios";
import { toast } from "react-toastify";
import { api } from "./api";

const apiEndPoint = `${api}/admin/add-reception`;

export default function addReception(data) {
  return axios
    .post(apiEndPoint, data)
    .then(function (response) {
      console.log(response.data);
      toast.success(`${response.data}`);
    })
    .catch(function (error) {
      if (error.response.data) {
        console.log(error.response.data);
        toast.error(error.response.data);
      }
      if (error.response) {
        console.log(error.response);
        toast.error(error.response);
      } else {
        console.log(error);
        toast.error(error);
      }
    });
}
