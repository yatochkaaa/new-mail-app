import React from 'react'
import { searchSettlementsRequest } from '../api/novaposhta/settlements'
import { getWarehousesRequest } from '../api/novaposhta/warehouses'
import { type Address } from '../types/novapochta'
import WarehousesTable from './WarehousesTable'

const WarehouseList: React.FC = () => {
  const [settlements, setSettlements] = React.useState<Address[]>([])
  const [inputSettlement, setInputSettlement] = React.useState('')
  const [warehouses, setWarehouses] = React.useState([])
  const [showWarehouses, setShowWarehouses] = React.useState<boolean>(false)
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  React.useEffect(() => {
    getSettlements(inputSettlement)

    if (inputSettlement.length === 0) {
      setSettlements([])
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const getWarehouses = async () => {
    const warehouses = await getWarehousesRequest(inputSettlement, currentPage.toString())
    setShowWarehouses(true)
    setWarehouses(warehouses.data)

    console.log('warehouses', warehouses.data)
  }

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
        <div className='warehouseList__input'>
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

        <button
          onClick={getWarehouses}
        >
          Пошук
        </button>
      </div>

      <WarehousesTable warehouses={warehouses} />
    </div>
  )
}

export default WarehouseList
