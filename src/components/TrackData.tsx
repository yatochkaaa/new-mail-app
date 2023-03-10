interface Props {
  warehouseSender: string
  warehouseRecipient: string
  status: string
}

const TrackData: React.FC<Props> = ({
  warehouseSender,
  warehouseRecipient,
  status
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
          <p><strong>Історія:</strong></p>
        </div>
    </div>
  )
}

export default TrackData
