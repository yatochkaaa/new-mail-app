import React from 'react'
import { getTrackDataAction, setTrackClearHistoryAction } from '../store/action-creators/tracking'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import TrackData from './TrackData'
import TrackForm from './TrackForm'

const Track: React.FC = () => {
  const dispatch = useAppDispatch()
  const { status, history } = useAppSelector(state => state.trackingReducer)

  const [TTN, setTTN] = React.useState<string>('')
  const [showInputError, setShowInputError] = React.useState<boolean>(false)

  // React.useEffect(() => {
  //   const savedHistory = localStorage.getItem('history')

  //   if (savedHistory) {
  //     const parsedSavedHistory = JSON.parse(savedHistory)
  //     setHistory(parsedSavedHistory)
  //   }
  // }, [])

  // React.useEffect(() => {
  //   localStorage.setItem('history', JSON.stringify(history))
  // }, [history])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setTTN(value)
  }

  const getStatus = async (TTN: string) => {
    const TTNCode = '204003'
    if (TTNCode === TTN.substring(0, TTNCode.length) && TTN.length === 14) {
      setShowInputError(false)
      dispatch(getTrackDataAction(TTN))
    } else {
      setShowInputError(true)
    }
    // 20400317061470
  }

  const clearHistory = () => {
    dispatch(setTrackClearHistoryAction())
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
