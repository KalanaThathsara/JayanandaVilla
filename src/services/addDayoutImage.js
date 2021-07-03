import axios from "axios";
import { toast } from "react-toastify";
import { api } from "./api";

const apiEndPoint = `${api}/admin/add-dayout/image`;

export default function addDayoutImage(file, nameOfImage, no) {
  const formData = new FormData();
  formData.append("file", file);
  console.log(file);

  return axios
    .post(`${apiEndPoint}${no}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        NameOfImage: nameOfImage,
      },
    })
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
