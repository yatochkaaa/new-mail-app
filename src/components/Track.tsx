import getTrackingRequest from '../api/tracking'

const Track: React.FC = () => {
  console.log(getTrackingRequest('20400317061470'))

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
        />
        <button className='track__formButton'>
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
