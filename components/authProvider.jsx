import { useEffect, useState } from "react";
import { API_URL } from "../src/helpers";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    try {
      let token = Cookies.get("token");
      if (token) {
        let result = await axios.get(`${API_URL}/auth/keeplogin`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        dispatch({ type: "LOGIN", payload: result.data });
      }
    } catch (error) {
      console.log("error");
    } finally {
      setloading(false);
    }
  }, []);

  if (loading) {
    return <div>loadinggg....</div>;
  }

  return children;
};

export default AuthProvider;
