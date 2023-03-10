import axios from 'axios'

export const getTrackingRequest = async (documentNumber: string) => {
  const url = 'https://api.novaposhta.ua/v2.0/json/'
  const apiKey = '88c364870f288e06e0a5505bbd3ddd55'
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

export default getTrackingRequest
