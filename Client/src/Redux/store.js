import {legacy_createStore as createStore} from "redux"
import { cartInitialState } from "./Cart/reducer";


import rootReducer from "./rootReducer";

export const store = createStore(rootReducer);