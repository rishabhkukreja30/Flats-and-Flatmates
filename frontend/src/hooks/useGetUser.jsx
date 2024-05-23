import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const useGetUser = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/current-user`,
        { withCredentials: true }
      );
      if (data && data.success) {
        dispatch(addUser(data.data));
        // navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
};

export default useGetUser;
