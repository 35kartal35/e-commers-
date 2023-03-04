import { SET_CATEGORIES } from "../reducer/categoryReducer"

export const setCategories=(payload)=>{
    return{
        type:SET_CATEGORIES,
        payload
    }
}