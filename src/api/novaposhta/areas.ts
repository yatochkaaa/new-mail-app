import axios from 'axios'
import { apiKey, url } from '.'

export const getAreasRequest = async () => {
  const config = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'getAreas',
    methodProperties: { }
  }

  const response = await axios.post(url, config)

  try {
    return response.data
  } catch (e) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }
}
