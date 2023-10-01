import {createSlice} from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'products', // untuk penamaan slice
    initialState: [], // data awal di store
    reducers: {
        addform(state, action){
            // fungsi menambahkan data article ke store
            console.log('state add article', state);
            console.log('action add article', action);
            const { payload } = action
            const form = {
                source: {
                    id: payload.id,
                    name: payload.name
                },
                productName : payload.productName,
                productCategory : payload.productCategory,
                productFreshness : payload.productFreshness,
                productPrice: payload.productPrice,
                productImage : payload.productImage
            }

            // push data ke state
            // state.push(article)

            // melakukan penyalinan data lama dengan data baru
            return [...state, form]
        },
        deleteform: ( state, action) => {
            // fungsi menghapus data article ke store
            const indexToDelete = action.payload;
            return state.filter((_, index) => index !== indexToDelete);
            
            
        }
    },
})

// export action untuk dispatch
export const { addform, deleteform } = formSlice.actions

// export reducer untuk configure store
export default formSlice.reducer