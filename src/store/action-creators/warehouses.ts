import { type Dispatch } from '@reduxjs/toolkit'
import { getWarehousesRequest } from '../../api/novaposhta/warehouses'
import { type WarehousesAction, WarehousesActionTypes, type Warehouse } from '../../types/warehouses'

export const getWarehousesAction = (settlement: string, page: number, prevState?: Warehouse): any =>
  async (dispatch: Dispatch<WarehousesAction>) => {
    try {
      const { data } = await getWarehousesRequest(settlement, page.toString())
      dispatch({ type: WarehousesActionTypes.GET_WAREHOUSES })
      dispatch({ type: WarehousesActionTypes.GET_WAREHOUSES_SUCCESS, payload: data })
    } catch (e) {
      dispatch({
        type: WarehousesActionTypes.GET_WAREHOUSES_ERROR,
        payload: 'An error occurred while loading warehouses.'
      })
    }
  }

export const setWarehousesPageAction = (page: number): WarehousesAction =>
  ({ type: WarehousesActionTypes.SET_WAREHOUSES_PAGE, payload: page })
