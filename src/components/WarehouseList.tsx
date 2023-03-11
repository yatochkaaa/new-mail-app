import React from 'react'
import { searchSettlementsRequest } from '../api/novaposhta/settlements'
// import { getWarehousesRequest } from '../api/novaposhta/warehouses'

const WarehouseList: React.FC = () => {
  const [settlements, setSettlements] = React.useState([])
  const [inputSettlement, setInputSettlement] = React.useState('')

  React.useEffect(() => {
    getSettlements(inputSettlement)
    console.log(settlements)
  }, [inputSettlement])

  const getSettlements = async (cityName: string) => {
    const settlements = await searchSettlementsRequest(cityName)
    const adresses = settlements.data[0].Adresses

    setSettlements(adresses)
    console.log('settlements', adresses)
  }

  // const getWarehouses = async () => {
  //   const warehouses = await getWarehousesRequest()

  //   console.log('warehouses', warehouses)
  // }

  const handleInputSettlementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputSettlement(value)
  }

  return (
    <div className="warehouseList">
      <input
        type="text"
        value={inputSettlement}
        onChange={handleInputSettlementChange}
      />

      <ul>

      </ul>
    </div>
  )
}

export default WarehouseList
