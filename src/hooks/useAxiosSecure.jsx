import axios from "axios";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "https://task-management-server-ruddy-kappa.vercel.app",
  });

  return axiosSecure;
};

export default useAxiosSecure;
