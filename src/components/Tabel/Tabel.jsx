import * as React from 'react';
import './Tabel.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import context from '../context';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import HeightSharpIcon from '@mui/icons-material/HeightSharp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',

  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
  

  overflow: 'auto',
};



export default function Tabel() {
  const { state,dispatch } = React.useContext(context);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const remove = (event) =>{
    event.preventDefault();
    dispatch({ type: "REMOVE_PIZZA", payload: event.target.id })
  }

  
  return (
    <TableContainer component={Paper} className='tabel'>
      <Table aria-label="simple table">
        <TableHead className='tabel-name'>
          <TableRow >
            <TableCell >#</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">Название</TableCell>
            <TableCell align="left" >Огурцы</TableCell>
            <TableCell align="left" >Тесто</TableCell>
            <TableCell align="left" >Размер</TableCell>
            <TableCell align="left" >Острая пицца</TableCell>
            <TableCell align="left" >Цена</TableCell>
            <TableCell align="left" >Дата создания шедевра</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state?.pizzas?.map((pizza, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell component="th" scope="row" className='pizza-item pizza-number'>
                {i}
              </TableCell>
              <TableCell align="left" className='pizza-item pizza-edit'><EditIcon className='pizza-edit-icon' /><CloseIcon id={i} onClick={remove} className='pizza-edit-icon'/></TableCell>
              <TableCell align="left" className='pizza-item pizza-name' onClick={handleOpen}>{pizza?.name}</TableCell>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className='info'>
                  <p className='info-name'>{pizza?.name}</p>
                  <LockSharpIcon className='lock'/>
                  <HeightSharpIcon className='arrow' />
                  <p className='info-weight'>{pizza?.weight} г</p>
                  <p className='info-size'>{pizza?.size} см</p>
                  <p className='info-price'>{pizza?.price} р</p>
                  <p className='info-cuc'>Огурцы</p>
                  <div className='info-line1'></div>
                  <p className='info-cuc-pizza'>{pizza?.cucumbers}</p>
                  <p className='info-hot'>Острая</p>
                  <div className='info-line2'></div>
                  <p className='info-hot-pizza'>{pizza?.hot}</p>
                  <p className='info-dough'>Тесто</p>
                  <div className='info-line3'></div>
                  <p className='info-dough-pizza'>{pizza?.dough}</p>
                  <p className='info-disc'>{pizza?.discription}</p>
                  <CloseIcon onClick={handleClose} className='info-close'/>
                </Box>
              </Modal>
              <TableCell align="left" className='pizza-item'>{pizza?.cucumbers}</TableCell>
              <TableCell align="left" className='pizza-item'>{pizza?.dough}</TableCell>
              <TableCell align="left" className='pizza-item'>{pizza?.size} см</TableCell>
              <TableCell align="left" className='pizza-item'>{pizza?.hot ? 'Да' : 'Нет'}</TableCell>
              <TableCell align="left" className='pizza-price'>{pizza?.price} руб.</TableCell>
              <TableCell align="left" className='pizza-item'>{pizza?.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
