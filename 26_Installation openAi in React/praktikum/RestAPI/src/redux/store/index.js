import { configureStore } from "@reduxjs/toolkit"
import productReducer from '../slices/formSlice'

export default configureStore({
    reducer: {
        products: productReducer
    }
})