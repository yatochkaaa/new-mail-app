import axios from 'axios'
import { apiKey, url } from '.'

export const getTrackingRequest = async (documentNumber: string) => {
  const config = {
    apiKey,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [{
        DocumentNumber: documentNumber
      }]
    }
  }

  const response = await axios.post(url, config)

  try {
    return response.data
  } catch (e) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }
}
