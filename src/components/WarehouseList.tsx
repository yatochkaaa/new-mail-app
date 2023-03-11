import React from 'react'
import { searchSettlementsRequest } from '../api/novaposhta/settlements'
import { type Address } from '../types/novapochta'
// import { getWarehousesRequest } from '../api/novaposhta/warehouses'

const WarehouseList: React.FC = () => {
  const [settlements, setSettlements] = React.useState<Address[]>([])
  const [inputSettlement, setInputSettlement] = React.useState('')

  React.useEffect(() => {
    getSettlements(inputSettlement)
  }, [inputSettlement])

  const getSettlements = async (cityName: string) => {
    const settlements = await searchSettlementsRequest(cityName)
    const addresses = settlements.data[0].Addresses
    const firstAdress = addresses[0].MainDescription

    if (firstAdress !== inputSettlement) {
      setSettlements(addresses)
    }
    console.log('settlements', addresses)
  }

  // const getWarehouses = async () => {
  //   const warehouses = await getWarehousesRequest()

  //   console.log('warehouses', warehouses)
  // }

  const handleInputSettlementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputSettlement(value)
  }

  const handleAddressClickChange = (settlement: Address) => {
    setInputSettlement(settlement.MainDescription)
    setSettlements([])
    console.log(settlement)
  }

  return (
    <div className="warehouseList">
      <div className='warehouseList__form'>
        <div className='warehouseList__pointer'></div>
        <input
          className='warehouseList__settlement'
          type="text"
          value={inputSettlement}
          onChange={handleInputSettlementChange}
        />
        {settlements.length > 0 && (
          <ul className='warehouseList__addresses'>
            {settlements.map(settlement => (
              <li
                key={settlement.Ref}
                className='warehouseList__address'
                onClick={() => { handleAddressClickChange(settlement) }}
              >
                {settlement.Present}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul>

      </ul>
    </div>
  )
}

export default WarehouseList
