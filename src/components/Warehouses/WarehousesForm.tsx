import { type Address } from '../../types/warehouses/warehouses'

interface Props {
  inputSettlement: string
  handleInputSettlementChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  settlements: Address[]
  handleAddressClickChange: (settlement: Address) => void
  getWarehouses: () => void
}

const WarehousesForm: React.FC<Props> = ({
  inputSettlement,
  handleInputSettlementChange,
  settlements,
  handleAddressClickChange,
  getWarehouses
}: Props) => {
  return (
    <div className='warehouses__form'>
      <div className='warehouses__input'>
        <div className='warehouses__pointer'></div>
        <input
          className='warehouses__settlement'
          type="text"
          value={inputSettlement}
          onChange={handleInputSettlementChange}
          placeholder='Вкажіть населений пункт'
        />
        {settlements.length > 0 && (
        <ul className='warehouses__addresses'>
          {settlements.map(settlement => (
            <li
              key={settlement.Ref}
              className='warehouses__address'
              onClick={() => { handleAddressClickChange(settlement) }}
            >
              {settlement.Present}
            </li>
          ))}
        </ul>
        )}
      </div>

      <button
        className='warehouses__searchButton'
        onClick={getWarehouses}
      >
        Пошук
      </button>
    </div>
  )
}

export default WarehousesForm
