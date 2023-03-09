const Track: React.FC = () => {
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

      <div>
        <div className='track__status'>
          Статус доставки
        </div>

        <div className='track__history'>
          Історія
        </div>
      </div>
    </div>
  )
}

export default Track
