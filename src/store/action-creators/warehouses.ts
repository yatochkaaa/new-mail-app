import { createAsyncThunk } from '@reduxjs/toolkit'
import { getWarehousesRequest } from '../../api/novaposhta/warehouses'
import { type Warehouse } from '../../types/warehouses/warehouses'

interface PayloadMoreWarehouses {
  settlement: string
  page: number
  prevWarehouses: Warehouse[]
}

export const getWarehousesAction = createAsyncThunk(
  'warehouses/getWarehouses',
  async (payload: string, thunkAPI) => {
    try {
      const page = '1'
      const { data } = await getWarehousesRequest(payload, page)

      return data
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load warehouses')
    }
  }
)

export const getMoreWarehousesAction = createAsyncThunk(
  'warehouses/getMoreWarehouses',
  async (payload: PayloadMoreWarehouses, thunkAPI) => {
    try {
      const { data } = await getWarehousesRequest(payload.settlement, payload.page.toString())

      return [...payload.prevWarehouses, ...data]
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load warehouses')
    }
  }
)
