import {
  type WarehousesAction,
  WarehousesActionTypes,
  type WarehousesState
} from '../../types/warehouses'

const initialState: WarehousesState = {
  warehouses: [],
  limit: 30,
  lastPage: 1,
  loading: false,
  error: null
}

const warehousesReducer = (state = initialState, action: WarehousesAction): WarehousesState => {
  switch (action.type) {
    case WarehousesActionTypes.GET_WAREHOUSES:
      return { ...state, loading: true }

    case WarehousesActionTypes.GET_WAREHOUSES_SUCCESS:
      return { ...state, loading: false, warehouses: action.payload }

    case WarehousesActionTypes.GET_WAREHOUSES_ERROR:
      return { ...state, loading: false, error: action.payload }

    case WarehousesActionTypes.SET_WAREHOUSES_PAGE:
      return { ...state, lastPage: action.payload }

    default:
      return state
  }
}

export default warehousesReducer
