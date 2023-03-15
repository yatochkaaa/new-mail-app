import { createAsyncThunk } from '@reduxjs/toolkit'
import { getWarehousesRequest } from '../../api/novaposhta/warehouses'
import { type Warehouse } from '../../types/warehouses'

interface Payload {
  settlement: string
  page: number
  prevWarehouses: Warehouse[]
}

export const getWarehousesAction = createAsyncThunk(
  'warehouses/getAll',
  async (payload: Payload, thunkAPI) => {
    try {
      const { data } = await getWarehousesRequest(payload.settlement, payload.page.toString())

      return [...payload.prevWarehouses, ...data]
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load warehouses')
    }
  }
)
