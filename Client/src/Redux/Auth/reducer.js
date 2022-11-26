import { ERROR, LOADING, SUCCESS } from "./action";
const initState ={
    loading: false,
    error: false,
    user:null,

}
export const authReducer = (state=initState, {type, payload})=>{
    
    switch(type){
        case LOADING: {
            return {
                loading: true,
                error: false,
                user:null,
                
            }
        }
        case SUCCESS: {
            localStorage.setItem("isAuth", initState.isAuth);
            return {
                loading: false,
                error: false,
                user: payload,
            }
        }
        case ERROR: {
            return {
                loading: false,
                error: true,
                user: null,
            }
        }

        default:
            return state;
    }
}
