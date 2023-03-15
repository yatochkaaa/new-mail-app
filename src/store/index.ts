import { configureStore } from '@reduxjs/toolkit'
import warehousesReducer from './reducers/warehousesReducer'

const store = configureStore({ reducer: warehousesReducer })

export default store
