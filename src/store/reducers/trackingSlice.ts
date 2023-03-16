import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type TrackStatus } from '../../types/tracking'
import { getTrackDataAction, setTrackClearHistoryAction } from '../action-creators/tracking'

interface TrackingState {
  status: TrackStatus | null
  history: string[]
  isLoading: boolean
  error: string | null
}

const initialState: TrackingState = {
  status: null,
  history: [],
  isLoading: false,
  error: null
}

export const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {},
  extraReducers: {
    [getTrackDataAction.fulfilled.type]: (state, action: PayloadAction<TrackStatus>) => {
      state.isLoading = false
      state.error = null
      state.status = action.payload
      if (state.history.length > 10) {
        state.history.shift()
      }
      state.history = [...state.history, action.payload.Number]
    },
    [getTrackDataAction.pending.type]: (state) => {
      state.isLoading = true
    },
    [getTrackDataAction.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [setTrackClearHistoryAction.fulfilled.type]: (state, action: PayloadAction<[]>) => {
      state.status = null
      state.isLoading = false
      state.history = action.payload
    },
    [setTrackClearHistoryAction.pending.type]: (state) => {
      state.isLoading = true
    }
  }
})

export default trackingSlice.reducer
