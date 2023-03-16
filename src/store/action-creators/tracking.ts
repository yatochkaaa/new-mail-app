import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTrackingRequest } from '../../api/novaposhta/tracking'

export const getTrackDataAction = createAsyncThunk(
  'tracking/getData',
  async (TTN: string, thunkAPI) => {
    try {
      const { data } = await getTrackingRequest(TTN)

      return data[0]
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load warehouses')
    }
  }
)

export const setTrackClearHistoryAction = createAsyncThunk('tracking/clearHistory', () => [])
