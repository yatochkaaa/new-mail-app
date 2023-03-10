import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'
import { type Warehouse } from '../types/novapochta'
import { WarehouseHeader } from '../types/warehousesTable'

interface Props {
  warehouses: Warehouse[]
}

const WarehousesTable: React.FC<Props> = ({ warehouses }: Props) => {
  const getPostOfficeType = (description: string, postNumber: string) => {
    if (description.includes('Поштомат')) {
      return `П-т ${postNumber}`
    }

    return `Відд ${postNumber}`
  }

  return (
    <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {Object.values(WarehouseHeader).map(header => (
                <TableCell key={header}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {warehouses.map(warehouse => (
              <TableRow key={warehouse.Number}>
                <TableCell>
                  {getPostOfficeType(warehouse.Description, warehouse.Number)}
                </TableCell>

                <TableCell>
                  {warehouse.ShortAddress}
                </TableCell>

                <TableCell>
                  {warehouse.Schedule.Monday}
                </TableCell>

                <TableCell>
                  {warehouse.TotalMaxWeightAllowed === '0' ? '1000' : warehouse.TotalMaxWeightAllowed}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default WarehousesTable
