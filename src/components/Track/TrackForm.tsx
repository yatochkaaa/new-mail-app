interface Props {
  TTN: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  getStatus: (TTN: string) => void
  showInputError: boolean
}

const TrackForm: React.FC<Props> = ({
  TTN,
  handleInputChange,
  getStatus,
  showInputError
}: Props) => {
  return (
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

      {showInputError && (
        <div className='track__formError'>
          Неправильно введено номер ТТН
        </div>
      )}
    </div>
  )
}

export default TrackForm
