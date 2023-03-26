import { configureStore } from "@reduxjs/toolkit";
import reducerRoot from "./reducer";

const store = configureStore({
    reducer : reducerRoot
})
export default store;