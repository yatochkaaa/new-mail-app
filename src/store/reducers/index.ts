import { combineReducers } from 'redux'
import warehousesReducer from './warehousesSlice'
import trackingReducer from './trackingSlice'

export const rootReducer = combineReducers({
  trackingReducer,
  warehousesReducer
})

export type RootState = ReturnType<typeof rootReducer>
