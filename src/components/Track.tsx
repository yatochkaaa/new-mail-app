import React from 'react'
import getTrackingRequest from '../api/tracking'
import TrackData from './TrackData'

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
  }

  return (
    <div className='track'>
      <div className='track__form'>
        <input
          className='track__formInput'
          type="number"
          placeholder="Номер посилки"
          value={TTN}
          onChange={handleInputChange}
        />
        <button
          className='track__formButton'
          onClick={() => { getStatus(TTN) }}
        >
          Get status TTN
        </button>
      </div>

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
