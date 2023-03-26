import { combineReducers } from "redux";
import handleCart from "./handleReducer";
const reducerRoot =combineReducers(
    {
        handleCart
    }
)
export default reducerRoot;