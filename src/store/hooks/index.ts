import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { type AppDispatch } from '..'
import { type RootState } from '../reducers'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
