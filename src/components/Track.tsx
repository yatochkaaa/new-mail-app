import React from 'react'
import { getTrackingRequest } from '../api/novaposhta/tracking'
import TrackData from './TrackData'
import TrackForm from './TrackForm'

const Track: React.FC = () => {
  const [TTN, setTTN] = React.useState<string>('')
  const [warehouseSender, setWarehouseSender] = React.useState<string>('')
  const [warehouseRecipient, setWarehouseRecipient] = React.useState<string>('')
  const [status, setStatus] = React.useState<string>('')
  const [history, setHistory] = React.useState<string[]>([])
  const [isStatusData, setIsStatusData] = React.useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setTTN(value)
  }

  const getStatus = async (TTN: string) => {
    const status = await getTrackingRequest(TTN)
    const statusData = status.data[0]

    if (status.success) {
      setWarehouseSender(statusData.WarehouseSender)
      setWarehouseRecipient(statusData.WarehouseRecipient)
      setStatus(statusData.Status)
      setHistory([...history, TTN])
      setIsStatusData(status.success)
    }
    // 20400317061470
  }

  return (
    <div className='track'>
      <TrackForm
        TTN={TTN}
        handleInputChange={handleInputChange}
        getStatus={getStatus}
      />

      {isStatusData && (
        <TrackData
          warehouseSender={warehouseSender}
          warehouseRecipient={warehouseRecipient}
          status={status}
          history={history}
        />
      )}
    </div>
  )
}

export default Track
