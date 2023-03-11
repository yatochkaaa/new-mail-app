import axios from 'axios'
import { apiKey, url } from '.'

export const getWarehousesRequest = async (cityName = '', warehouseId = '') => {
  const config = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: cityName,
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
