import axios from "axios";
import { BASE_URL } from "../constants";
const Axiosapi=axios.create({
    baseURL:BASE_URL
  })
export default Axiosapi;