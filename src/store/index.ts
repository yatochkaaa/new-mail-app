import { configureStore } from '@reduxjs/toolkit'
import warehousesReducer from './reducers/warehousesSlice'

const store = configureStore({ reducer: warehousesReducer })

export default store
