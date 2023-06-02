import { combineReducer } from "redux"
import authReducer from "./authReducer";
import usertypeReducer from "./usertype-Reducer";

const appReducer = combineReducer({
authReducer    ,
usertypeReducer,
})


const RootReducer =  (state , action) => {
  return 
    appReducer(state,action);
};

export default RootReducer

