import axios from 'axios'
import { apiKey, url } from '.'

export const getWarehousesRequest = async (
  cityName: string,
  page: string,
  warehouseId = ''
) => {
  const config = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: cityName,
      Page: page,
      Limit: '30',
      Language: 'UA',
      WarehouseId: warehouseId
    }
  }

  const response = await axios.post(url, config)

  try {
    return response.data
  } catch (e) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }
}
