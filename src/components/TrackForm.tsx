interface Props {
  TTN: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  getStatus: (TTN: string) => void
}

const TrackForm: React.FC<Props> = ({
  TTN,
  handleInputChange,
  getStatus
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
      </div>
  )
}

export default TrackForm
