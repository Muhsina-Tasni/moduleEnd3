// for the storage fecility used redux store

import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './slice'
const store=configureStore({
    
    reducer:{
        slice:sliceReducer,
        
    }
})
export default store