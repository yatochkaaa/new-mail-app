const Track: React.FC = () => {
  return (
    <div className='track'>
      <div className='track__panel'>
        <button>Перевірити ТТН</button>
        <button>Список відділень</button>
      </div>

      <div className='track__form'>
          <input type="text" />
          <button>Get status TTN</button>
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
