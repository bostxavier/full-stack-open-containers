import axios from 'axios'
const serverUrl = import.meta.env.VITE_BACKEND_URL
const baseUrl = `${serverUrl}/blogs`

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }