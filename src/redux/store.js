import { createStore } from "redux";
import categoryReducer from "./reducer/categoryReducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    categoryState:categoryReducer
})



const store = createStore(rootReducer)

export default store