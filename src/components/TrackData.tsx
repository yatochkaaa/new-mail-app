interface Props {
  warehouseSender: string
  warehouseRecipient: string
  status: string
  history: string[]
  clearHistory: () => void
}

const TrackData: React.FC<Props> = ({
  warehouseSender,
  warehouseRecipient,
  status,
  history,
  clearHistory
}: Props) => {
  return (
    <div className="track__data">
        <div className='track__status'>
          {history.length === 0
            ? <p>Введіть номер ТТН для отримання даних</p>
            : (
              <>
                <p>
                  Статус доставки: {status || 'Дані відсутні'}
                </p>
                <p>
                  <strong>Відправлено: </strong>
                  {warehouseSender || 'Дані відсутні'}
                </p>
                <p>
                  <strong>Отримано: </strong>
                  {warehouseRecipient || 'Дані відсутні'}
                </p>
              </>
              )
          }
        </div>

        {history.length > 0 && (
          <div className='track__history'>
            <span className="track__historyTitle">Історія:</span>
            <ul className='track__historyList'>
              {history.map((TTN, i) => <li key={i}>{TTN}</li>)}
            </ul>

            <button
              className="track__clearHistoryButton"
              onClick={clearHistory}
            >
              Очистити все
            </button>
          </div>
        )}
    </div>
  )
}

export default TrackData
