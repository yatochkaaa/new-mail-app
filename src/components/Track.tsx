import React from 'react'
import getTrackingRequest from '../api/tracking'
import TrackData from './TrackData'
import TrackForm from './TrackForm'

const Track: React.FC = () => {
  const [TTN, setTTN] = React.useState<string>('')
  const [warehouseSender, setWarehouseSender] = React.useState<string>('')
  const [warehouseRecipient, setWarehouseRecipient] = React.useState<string>('')
  const [status, setStatus] = React.useState<string>('')
  const [history, setHistory] = React.useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setTTN(value)
  }

  const getStatus = async (TTN: string) => {
    const status = await getTrackingRequest(TTN)
    const statusData = status.data[0]

    setWarehouseSender(statusData.WarehouseSender)
    setWarehouseRecipient(statusData.WarehouseRecipient)
    setStatus(statusData.Status)
    setHistory([...history, TTN])
    console.log(statusData)
  }

  return (
    <div className='track'>
      <TrackForm
        TTN={TTN}
        handleInputChange={handleInputChange}
        getStatus={getStatus}
      />

      <TrackData
        warehouseSender={warehouseSender}
        warehouseRecipient={warehouseRecipient}
        status={status}
        history={history}
      />
    </div>
  )
}

export default Track
