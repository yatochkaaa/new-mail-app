import axios from 'axios'
import { apiKey, url } from '.'

export const getCitiesRequest = async () => {
  const config = {
    apiKey,
    modelName: 'Address',
    calledMethod: 'getCities',
    methodProperties: {}
  }

  const response = await axios.post(url, config)

  try {
    return response.data
  } catch (e) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }
}
