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
  const [showInputError, setShowInputError] = React.useState<boolean>(false)

  React.useEffect(() => {
    const savedHistory = localStorage.getItem('history')

    if (savedHistory) {
      const parsedSavedHistory = JSON.parse(savedHistory)
      setHistory(parsedSavedHistory)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history))
  }, [history])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setTTN(value)
  }

  const getStatus = async (TTN: string) => {
    const TTNCode = '204003'
    setWarehouseSender('')
    setWarehouseRecipient('')
    setStatus('')
    if (TTNCode === TTN.substring(0, TTNCode.length) && TTN.length === 14) {
      setShowInputError(false)
      const status = await getTrackingRequest(TTN)
      const statusData = status.data[0]

      if (status.success) {
        setWarehouseSender(statusData.WarehouseSender)
        setWarehouseRecipient(statusData.WarehouseRecipient)
        setStatus(statusData.Status)
        if (history.length > 10) {
          history.shift()
        }
        setHistory([...history, TTN])
      }
    } else {
      setShowInputError(true)
    }
    // 20400317061470
  }

  const clearHistory = () => {
    setWarehouseSender('')
    setWarehouseRecipient('')
    setStatus('')
    setHistory([])
  }

  return (
    <div className='track'>
      <TrackForm
        TTN={TTN}
        handleInputChange={handleInputChange}
        getStatus={getStatus}
        showInputError={showInputError}
      />

      <TrackData
        warehouseSender={warehouseSender}
        warehouseRecipient={warehouseRecipient}
        status={status}
        history={history}
        clearHistory={clearHistory}
        setTTN={setTTN}
        getStatus={getStatus}
      />
    </div>
  )
}

export default Track
