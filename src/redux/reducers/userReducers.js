const INITIAL_STATE = {
  id: 0,
  isLogin: false,
  isRegister: false,
  username: "",
  error_msg: "",
  email: "",
  fullname: "",
  bio: "",
  profile_picture: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, isRegister: true };
    case "LOGIN":
      return {
        ...state,
        isRegister: true,
        isLogin: true,
        error_msg: "",
        ...action.payload,
      };
    case "ERROR":
      return { error_msg: action.payload };
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
