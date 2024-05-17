import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ path, children }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const loginStatus = useSelector((state) => state.user.status);

  useEffect(() => {
    if (loginStatus === true) {
      navigate({ path });
    } else if (loginStatus === false) {
      navigate("/signin");
    }
    setLoader(false);
  }, [loginStatus, navigate]);

  return loader ? <h1>Loading ...</h1> : <>{children}</>;
};

export default AuthLayout;
