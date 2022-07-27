import axios from "axios";

export default axios.create({
  baseURL: 'google.com',
  headers: {
    "Content-Type": "application/json",
  }
})