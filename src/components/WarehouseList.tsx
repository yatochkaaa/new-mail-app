import { getWarehousesRequest } from '../api/novaposhta/warehouses'

const WarehouseList: React.FC = () => {
  const getWarehouse = async () => {
    const warehouses = await getWarehousesRequest()

    console.log('warehouses', warehouses)
  }

  getWarehouse()

  return (
      <ul className="warehouseList">
      </ul>
  )
}

export default WarehouseList
