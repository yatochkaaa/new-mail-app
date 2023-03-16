import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress
} from '@mui/material'
import { type Warehouse } from '../../types/warehouses/warehouses'
import { WarehouseHeader } from '../../types/warehouses/table'

interface Props {
  warehouses: Warehouse[]
  isLoading: boolean
}

const WarehousesTable: React.FC<Props> = ({ warehouses, isLoading }: Props) => {
  const getPostOfficeType = (description: string, postNumber: string) => {
    if (description.includes('Поштомат')) {
      return `П-т ${postNumber}`
    }

    return `Відд ${postNumber}`
  }

  return (
    <TableContainer className='warehouses__table' component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {Object.values(WarehouseHeader).map(header => (
                <TableCell style={{ fontWeight: 600 }} align='center' key={header}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {warehouses.map(warehouse => (
              <TableRow key={warehouse.Number}>
                <TableCell align='center'>
                  {getPostOfficeType(warehouse.Description, warehouse.Number)}
                </TableCell>

                <TableCell align='center'>
                  {warehouse.ShortAddress}
                </TableCell>

                <TableCell align='center'>
                  {warehouse.Schedule.Monday}
                </TableCell>

                <TableCell align='center'>
                  {warehouse.TotalMaxWeightAllowed === '0' ? '1000' : warehouse.TotalMaxWeightAllowed}
                </TableCell>
              </TableRow>
            ))}
            {isLoading && (
            <TableRow>
              <TableCell colSpan={4} align='center'>
                <CircularProgress />
              </TableCell>
            </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default WarehousesTable
