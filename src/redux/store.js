import { configureStore } from '@reduxjs/toolkit'
import quoterReducer from "./quoSt"

export const store = configureStore({
  reducer: {
    quoter: quoterReducer
  },
});

