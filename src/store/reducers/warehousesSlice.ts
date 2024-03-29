import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Warehouse } from '../../types/warehouses/warehouses'
import { clearWarehousesAction, getMoreWarehousesAction, getWarehousesAction } from '../action-creators/warehouses'

export interface WarehousesState {
  warehouses: Warehouse[]
  limit: number
  page: number
  isLoading: boolean
  error: string | null
}

const initialState: WarehousesState = {
  warehouses: [],
  limit: 30,
  page: 1,
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
      state.page = 2
      state.warehouses = action.payload
    },
    [getWarehousesAction.pending.type]: (state) => {
      state.isLoading = true
    },
    [getWarehousesAction.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [getMoreWarehousesAction.fulfilled.type]: (state, action: PayloadAction<Warehouse[]>) => {
      state.isLoading = false
      state.error = null
      state.page += 1
      state.warehouses = action.payload
    },
    [getMoreWarehousesAction.pending.type]: (state) => {
      state.isLoading = true
    },
    [getMoreWarehousesAction.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [clearWarehousesAction.fulfilled.type]: (state, action: PayloadAction<[]>) => {
      state.isLoading = false
      state.error = null
      state.page = 1
      state.warehouses = action.payload
    },
    [clearWarehousesAction.pending.type]: (state) => {
      state.isLoading = true
    }
  }
})

export default warehousesSlice.reducer
