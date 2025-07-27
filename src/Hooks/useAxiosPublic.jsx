import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://final-project-server-neon-eight.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;