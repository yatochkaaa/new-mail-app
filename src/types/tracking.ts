export interface Document {
  DocumentNumber: string
  Phone: string
}

export interface MethodProperties {
  Documents: Document[]
}

export interface TrackingRequest {
  apiKey: string
  modelName: string
  calledMethod: string
  methodProperties: MethodProperties
}
