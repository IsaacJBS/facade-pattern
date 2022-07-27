import axios from "../api/axios";

export default async function getFetch (url) {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    return error
  }
}