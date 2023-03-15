import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import { type RootState } from '../reducers'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
