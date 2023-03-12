import React from 'react'
import { searchSettlementsRequest } from '../api/novaposhta/settlements'
import { getWarehousesRequest } from '../api/novaposhta/warehouses'
import { type Warehouse, type Address } from '../types/novapochta'
import WarehousesTable from './WarehousesTable'

const WarehouseList: React.FC = () => {
  const [settlements, setSettlements] = React.useState<Address[]>([])
  const [inputSettlement, setInputSettlement] = React.useState<string>('')
  const [warehouses, setWarehouses] = React.useState<Warehouse[]>([])
  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const [fetching, setFetching] = React.useState<boolean>(false)

  React.useEffect(() => {
    document.addEventListener('scroll', handleScrollChange)

    return function () {
      document.removeEventListener('scroll', handleScrollChange)
    }
  }, [])

  React.useEffect(() => {
    if (fetching) {
      updateWarehouses()
      console.log(warehouses)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

  React.useEffect(() => {
    getSettlements(inputSettlement)

    if (inputSettlement.length === 0) {
      setSettlements([])
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSettlement])

  const updateWarehouses = async () => {
    const { data } = await getWarehousesRequest(inputSettlement, currentPage.toString())

    setWarehouses([...warehouses, ...data])
    setCurrentPage(prevState => prevState + 1)
    setFetching(false)
  }

  const getSettlements = async (cityName: string) => {
    const settlements = await searchSettlementsRequest(cityName)
    const addresses = settlements.data[0].Addresses
    const firstAdress = addresses[0].MainDescription

    if (firstAdress !== inputSettlement) {
      setSettlements(addresses)
    }
  }

  const getWarehouses = async () => {
    setCurrentPage(1)
    setWarehouses([])
    setFetching(true)
  }

  const handleInputSettlementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputSettlement(value)
  }

  const handleAddressClickChange = (settlement: Address) => {
    setInputSettlement(settlement.MainDescription)
    setSettlements([])
  }

  const handleScrollChange = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight
    const scrollTop = e.target.documentElement.scrollTop
    const innerHeight = window.innerHeight

    if (scrollHeight - (Number(scrollTop) + innerHeight) < 100) {
      setFetching(true)
    }
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
