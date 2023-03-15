import { createAsyncThunk } from '@reduxjs/toolkit'
import { getWarehousesRequest } from '../../api/novaposhta/warehouses'

interface Payload {
  settlement: string
  page: number
}

export const getWarehousesAction = createAsyncThunk(
  'warehouses/getAll',
  async (payload: Payload, thunkAPI) => {
    try {
      const { data } = await getWarehousesRequest(payload.settlement, payload.page.toString())
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load warehouses')
    }
  }
)

// export const setWarehousesPageAction = (page: number): WarehousesAction =>
//   ({ type: WarehousesActionTypes.SET_WAREHOUSES_PAGE, payload: page })
