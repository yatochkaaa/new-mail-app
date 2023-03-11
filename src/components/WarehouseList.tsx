import React from 'react'
import { getAreasRequest } from '../api/novaposhta/areas'
// import { getCitiesRequest } from '../api/novaposhta/cities'
// import { getWarehousesRequest } from '../api/novaposhta/warehouses'
import { type Area } from '../types/novaposhta'

const WarehouseList: React.FC = () => {
  const [areas, setAreas] = React.useState<Area[]>([])
  const [selectArea, setSelectArea] = React.useState<string>('')

  React.useEffect(() => {
    getAreas()
  }, [])

  const getAreas = async () => {
    const areas = await getAreasRequest()
    const areasData = areas.data

    setAreas(areasData)
    setSelectArea(areasData[0].Description)
  }

  // const getCities = async () => {
  //   const cities = await getCitiesRequest()

  //   console.log('cities', cities)
  // }

  // const getWarehouses = async () => {
  //   const warehouses = await getWarehousesRequest()

  //   console.log('warehouses', warehouses)
  // }

  const handleSelectAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target

    setSelectArea(value)

    console.log(selectArea)
  }

  return (
    <div className="warehouseList">
      <select
        className='warehouseList__select'
        value={selectArea}
        onChange={handleSelectAreaChange}
      >
        {areas.map((area: Area, i) => {
          return (
            <option key={area.Description}>
              {area.Description}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default WarehouseList
