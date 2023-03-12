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
              <TableCell>Відділення / Поштомат</TableCell>
              <TableCell>Адреса</TableCell>
              <TableCell>Графік роботи</TableCell>
              <TableCell>Вага до</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {warehouses.map(warehouse => (
              <TableRow key={warehouse.Ref}>
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
