const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN" :
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: action.payload,
      };
      case "REGISTER" :
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          user: action.payload,
        };
    case "RESET":
      return state;
    case "LOGOUT":
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
