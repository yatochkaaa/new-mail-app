import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'

const WarehousesTable: React.FC = () => {
  return (
    <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableCell>Відділення / Поштомат</TableCell>
            <TableCell>Адреса</TableCell>
            <TableCell>Графік роботи</TableCell>
            <TableCell>Вага до</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default WarehousesTable
