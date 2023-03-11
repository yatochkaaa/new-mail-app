import axios from 'axios'
import { apiKey, url } from '.'

export const searchSettlementsRequest = async (cityName: string) => {
  const config = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'searchSettlements',
    methodProperties: {
      CityName: cityName,
      Limit: '10',
      Page: '1'
    }

  }

  const response = await axios.post(url, config)

  try {
    return response.data
  } catch (e) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }
}
