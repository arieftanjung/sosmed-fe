import axios from "axios";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../helpers";
import { toast } from "react-toastify";

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const loginAction = ({ username, password }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "LOADING" });
      let res = await axios.post(`${API_URL}/auth/login`, {
        username: username,
        password,
      });
      dispatch({ type: "LOGIN", payload: res.data });
      // dispatch(login(res.data[0]));
      Cookies.set("token", res.headers["x-token-access"]);
      toast.success("berhasil Login", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
    } catch (error) {
      toast.error(error.response.data.message || "network error", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
      // dispatch({
      //   type: "ERROR",
      //   payload: error.response.data.message || "network error",
      // });
    } finally {
      dispatch({ type: "DONE" });
    }
  };
};

const registerAction = ({ fullname, username, password, email }) => {
  // cek dulu username yang sama di database
  // kalo ada datanya berarti tidak bisa
  return async (dispatch) => {
    try {
      dispatch({ type: "LOADING" });
      let res1 = await axios.post(`${API_URL}/auth/register`, {
        fullname,
        username,
        password,
        email,
      });
      dispatch({ type: "REGISTER" });
      console.log(res1.data);
      // pasang token on localstorage
      // Cookies.set("token", res1.headers["x-token-access"]);
      toast.success("berhasil register", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
    } catch (error) {
      // dispatch({
      //   type: "ERROR",
      //   payload: error.response.data.message || "network error",
      // });
      toast.error(error.response.data.message || "network error", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
    } finally {
      dispatch({ type: "DONE" });
    }
  };
};
export default registerAction;

export const editProfile = ({ ...input }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "LOADING" });
      let token = Cookies.get("token");

      let res2 = await axios.post(
        `${API_URL}/profile/updateprofile`,
        { ...input },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({ type: "LOGIN", payload: res2.data });

      toast.success("berhasil update profile", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
    } catch (error) {
      toast.error(error.response.data.message || "network error", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
    } finally {
      dispatch({ type: "DONE" });
    }
  };
};
export const editProfilePhoto = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "LOADING" });
      let token = Cookies.get("token");

      let res2 = await axios.patch(
        `${API_URL}/image/updateimage`,
        {
          profilepicture,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({ type: "LOGIN", payload: res2.data });

      toast.success("berhasil update photo profile", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
    } catch (error) {
      toast.error(error.response.data.message || "network error", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
    } finally {
      dispatch({ type: "DONE" });
    }
  };
};
