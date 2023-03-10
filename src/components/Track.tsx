import React from 'react'
import getTrackingRequest from '../api/tracking'

const Track: React.FC = () => {
  const [TTN, setTTN] = React.useState<string>('')
  const [warehouseSenderAddress, setWarehouseSenderAddress] = React.useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setTTN(value)
  }

  const getStatus = async (TTN: string) => {
    const status = await getTrackingRequest(TTN)

    setWarehouseSenderAddress(status.data[0])
    console.log(warehouseSenderAddress)
  }

  return (
    <div className='track'>
      <div className='track__controlPanel'>
        <button>Перевірити ТТН</button>
        <button>Список відділень</button>
      </div>

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

      <div className="track__data">
        <div className='track__status'>
          <p>Статус доставки:</p>
          <p><strong>Відправлено:</strong></p>
          <p><strong>Отримано:</strong></p>
        </div>

        <div className='track__history'>
          <p><strong>Історія:</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Track
