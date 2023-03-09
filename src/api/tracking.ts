import axios from 'axios'
import {
  type Document,
  type TrackingRequest
} from '../types/tracking'

const url = 'https://api.novaposhta.ua/v2.0/json/'
const apiKey = JSON.stringify(process.env.REACT_APP_POST_KEY)

export const getTrackingRequestSettings = (documents: Document[]): TrackingRequest => ({
  apiKey,
  modelName: 'TrackingDocument',
  calledMethod: 'getStatusDocuments',
  methodProperties: {
    Documents: documents
  }
})
