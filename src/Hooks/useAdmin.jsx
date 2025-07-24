import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecure = useAxios();
  const {user}=useAuth()

  const { data:isAdmin } = useQuery({
    queryKey: [user?.email,'isAdmin'],
    queryFn: async () => {
      const result = await axiosSecure.get(`users/admin/${user?.email}`);
       return result.data?.admin
    },

  });

  console.log(isAdmin)

  return {isAdmin}
};

export default useAdmin;
