import axios from 'axios'

const url = 'https://api.novaposhta.ua/v2.0/json/'
const apiKey = JSON.stringify(process.env.REACT_APP_POST_KEY)

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

export default getTrackingRequest
