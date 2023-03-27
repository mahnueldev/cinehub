import { configureStore } from "@reduxjs/toolkit";
import tmbdReducer from './features/tmbd/tmbdSlice';

export const store = configureStore({
    reducer: {
        tmbd: tmbdReducer,
       
      },
})