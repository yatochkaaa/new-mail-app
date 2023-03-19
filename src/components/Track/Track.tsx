import React from 'react'
import { getTrackDataAction, getTrackHistoryAction, setTrackClearHistoryAction } from '../../store/action-creators/tracking'
import { store } from '../../store'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import TrackForm from './TrackForm'
import TrackStatus from './TrackStatus'
import TrackHistory from './TrackHistory'

const Track: React.FC = () => {
  const dispatch = useAppDispatch()
  const { status, history } = useAppSelector(state => state.trackingReducer)

  const [TTN, setTTN] = React.useState<string>('')
  const [showInputError, setShowInputError] = React.useState<boolean>(false)

  React.useEffect(() => {
    const persistedState = localStorage.getItem('history')

    if (persistedState) {
      const parsedHistory = JSON.parse(persistedState)
      dispatch(getTrackHistoryAction(parsedHistory))
    }

    store.subscribe(() => {
      localStorage.setItem('history', JSON.stringify(store.getState().trackingReducer.history))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setTTN(value)
  }

  const getStatus = async (TTN: string) => {
    if (TTN.length === 14) {
      setShowInputError(false)
      dispatch(getTrackDataAction(TTN))
    } else {
      setShowInputError(true)
    }
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

      <div className="track__data">
        <TrackStatus status={status} />
        {history.length > 0 && (
          <TrackHistory
            history={history}
            clearHistory={clearHistory}
            setTTN={setTTN}
            getStatus={getStatus}
          />
        )}
      </div>
    </div>
  )
}

export default Track
