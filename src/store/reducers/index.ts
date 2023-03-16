import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import warehousesReducer from './warehousesSlice'
import trackingReducer from './trackingSlice'

const rootReducer = combineReducers({
  trackingReducer,
  warehousesReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
