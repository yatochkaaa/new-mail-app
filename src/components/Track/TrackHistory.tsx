interface Props {
  history: string[]
  clearHistory: () => void
  setTTN: React.Dispatch<React.SetStateAction<string>>
  getStatus: (TTN: string) => void
}

const TrackHistory: React.FC<Props> = ({
  history,
  clearHistory,
  setTTN,
  getStatus
}: Props) => {
  return (
    <div className='track__history'>
      <span className="track__historyTitle">Історія:</span>
      <ul className='track__historyList'>
        {history.map((TTN, i) => (
          <li
            className='track__historyItem'
            key={i}
            onClick={() => {
              getStatus(TTN)
              setTTN(TTN)
            }}
          >
            {TTN}
          </li>
        ))}
      </ul>

      <button
        className="track__clearHistoryButton"
        onClick={clearHistory}
      >
        Очистити все
      </button>
    </div>
  )
}

export default TrackHistory
