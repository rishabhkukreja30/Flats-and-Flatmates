import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFlats } from "../store/flatsSlice";

const useGetFlats = () => {
  // fetch flats from backend and update the store
  const dispatch = useDispatch();

  const fetchFlats = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/flats`
    );
    if (data && data.success) {
      //   console.log(data.data);
      dispatch(getFlats(data.data));
    }
  };

  useEffect(() => {
    fetchFlats();
  }, []);
};

export default useGetFlats;
