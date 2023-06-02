const Initital_State = {
  user: null,
  loading : false
};
export default (state = Initital_State, action) => {
  switch (action.type) {
    case 'Login_progress':
      return {
        ...state,
        loading: true,
      };
    case 'Login_Sucess':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case 'Login_Error':
      return {
        ...state,
        loading: false,
      };
    case 'SIGNUP_PROGRESS':
      return {
        ...state,
        loading: true,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        loading: false,
      };
    case 'OTP_VERIFY_PROGRESS':
      return {
        ...state,
        loading: true,
      };
    case 'OTP_VERIFY_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'OTP_VERIFY_ERROR':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
