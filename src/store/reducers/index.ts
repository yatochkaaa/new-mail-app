import { combineReducers } from 'redux'
import warehousesReducer from './warehousesReducer'

const rootReducer = combineReducers({ warehouses: warehousesReducer })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
