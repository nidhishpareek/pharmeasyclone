import { combineReducers } from "redux";
import cartReducer from "./Cart/reducer";
import { authReducer } from "./Auth/reducer";

const rootReducer =combineReducers({
    auth:authReducer,
    cart:cartReducer
})
export default rootReducer