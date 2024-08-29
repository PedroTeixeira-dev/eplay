import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDeafaultMiddleware) =>
    getDeafaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
