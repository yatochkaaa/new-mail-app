interface Props {
  warehouseSender: string
  warehouseRecipient: string
  status: string
  history: string[]
}

const TrackData: React.FC<Props> = ({
  warehouseSender,
  warehouseRecipient,
  status,
  history
}: Props) => {
  return (
    <div className="track__data">
        <div className='track__status'>
          <p>
            Статус доставки: {status}
          </p>
          <p>
            <strong>Відправлено: </strong>
            {warehouseSender}
          </p>
          <p>
            <strong>Отримано: </strong>
            {warehouseRecipient}
          </p>
        </div>

        <div className='track__history'>
          <span className="track__historyTitle">Історія:</span>
          <ul>
            {history.map((TTN, i) => <li key={i}>{TTN}</li>)}
          </ul>
        </div>
    </div>
  )
}

export default TrackData
