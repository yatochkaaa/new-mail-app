import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type WarehousesState, type Warehouse } from '../../types/warehouses'
import { getWarehousesAction } from '../action-creators/warehouses'

const initialState: WarehousesState = {
  warehouses: [],
  limit: 30,
  isLoading: false,
  error: null
}

export const warehousesSlice = createSlice({
  name: 'warehouses',
  initialState,
  reducers: {},
  extraReducers: {
    [getWarehousesAction.fulfilled.type]: (state, action: PayloadAction<Warehouse[]>) => {
      state.isLoading = false
      state.error = null
      state.warehouses = action.payload
    },
    [getWarehousesAction.pending.type]: (state) => {
      state.isLoading = true
    },
    [getWarehousesAction.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default warehousesSlice.reducer
