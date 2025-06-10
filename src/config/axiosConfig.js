import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async (url, params = {}) => {
  const response = await axiosInstance.get(url, { params });
  return response.data;
};

export default axiosInstance;
