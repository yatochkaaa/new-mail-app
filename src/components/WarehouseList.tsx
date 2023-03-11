import { getAreasRequest } from '../api/novaposhta/areas'
import { getCitiesRequest } from '../api/novaposhta/cities'
import { getWarehousesRequest } from '../api/novaposhta/warehouses'

const WarehouseList: React.FC = () => {
  const getAreas = async () => {
    const areas = await getAreasRequest()

    console.log('areas', areas)
  }

  const getCities = async () => {
    const cities = await getCitiesRequest()

    console.log('cities', cities)
  }

  const getWarehouse = async () => {
    const warehouses = await getWarehousesRequest()

    console.log('warehouses', warehouses)
  }

  getAreas()
  getCities()
  getWarehouse()

  return (
      <ul className="warehouseList">
      </ul>
  )
}

export default WarehouseList
