import axios from "../api/axios";

export default async function getFetch (url) {
    const response = await axios.get(url)
    return response.data
}