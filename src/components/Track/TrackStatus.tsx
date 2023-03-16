import { type TrackStatusType } from '../../types/tracking'

interface Props {
  status: TrackStatusType | null
}

const TrackStatus: React.FC<Props> = ({
  status
}: Props) => {
  return (
    <div className="track__data">
        <div className='track__status'>
          {status === null
            ? <p>Введіть номер ТТН для отримання даних</p>
            : (
              <>
                <p>
                  Статус доставки: {status.Status || 'Дані відсутні'}
                </p>
                <p>
                  <strong>Відправлено: </strong>
                  {status.WarehouseSender || 'Дані відсутні'}
                </p>
                <p>
                  <strong>Отримано: </strong>
                  {status.WarehouseRecipient || 'Дані відсутні'}
                </p>
              </>
              )
          }
        </div>
    </div>
  )
}

export default TrackStatus
