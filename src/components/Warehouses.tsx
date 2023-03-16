import React from 'react'
import { searchSettlementsRequest } from '../api/novaposhta/settlements'
import { type Address } from '../types/novapochta'
import WarehousesTable from './WarehousesTable'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getMoreWarehousesAction, getWarehousesAction } from '../store/action-creators/warehouses'

const WarehouseList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { warehouses, page, isLoading } = useAppSelector(state => state.warehousesReducer)

  const [settlements, setSettlements] = React.useState<Address[]>([])
  const [inputSettlement, setInputSettlement] = React.useState<string>('')
  const [fetching, setFetching] = React.useState<boolean>(false)

  React.useEffect(() => {
    document.addEventListener('scroll', handleScrollChange)

    return function () {
      document.removeEventListener('scroll', handleScrollChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateWarehouses = () => {
    const payload = {
      settlement: inputSettlement,
      page,
      prevWarehouses: warehouses
    }

    dispatch(getMoreWarehousesAction(payload))
    setFetching(false)
  }

  React.useEffect(() => {
    if (fetching) {
      updateWarehouses()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

  const getSettlements = async (cityName: string) => {
    const settlements = await searchSettlementsRequest(cityName)

    if (settlements.data.length > 0 && settlements.data[0].Addresses.length > 0) {
      const addresses = settlements.data[0].Addresses
      const firstAdress = addresses[0].MainDescription

      if (firstAdress !== inputSettlement) {
        setSettlements(addresses)
      }
    }
  }

  React.useEffect(() => {
    if (inputSettlement.length > 0) {
      getSettlements(inputSettlement)
    } else {
      setSettlements([])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSettlement])

  const getWarehouses = () => {
    dispatch(getWarehousesAction(inputSettlement))
  }

  const handleInputSettlementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setInputSettlement(value)
  }

  const handleAddressClickChange = (settlement: Address) => {
    setInputSettlement(settlement.MainDescription)
    setSettlements([])
  }

  const handleScrollChange = () => {
    const scrollTop = document.documentElement.scrollTop
    const offsetHeight = document.documentElement.offsetHeight
    const innerHeight = window.innerHeight

    if (innerHeight + scrollTop === offsetHeight && !isLoading) {
      setFetching(true)
    }
  }

  return (
    <div className='warehouses'>
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
       {warehouses &&
          <WarehousesTable
            warehouses={warehouses}
            isLoading={isLoading}
          />
       }
    </div>
  )
}

export default WarehouseList
