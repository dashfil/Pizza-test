import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './AddBtn.css'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import PizzaSize from './PizzaSize/PizzaSize';
import Dough from './Dough/Dough';
import Cuc from './Cuc/Cuc';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import context from '../context';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
 
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
  height: '631px',
  padding: '0px',
  overflow: 'auto',
};

export default function AddBtn({ pizzas, setPizzas }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [alignment, setAlignment] = React.useState('23');
  const [dough, setDough] = React.useState('Тонкое');
  const [cuc, setCuc] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const { dispatch } = React.useContext(context)

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const createPizza =(event)=>{
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      discription: event.target.discription.value,
      size: alignment,
      weight: event.target.weight.value,
      dough: dough,
      cucumbers: cuc,
      price: '450',
      date: new Date().toLocaleDateString(),
      hot: checked,
      phone: event.target.phone.value,
    }
    dispatch({ type: "ADD_PIZZA", payload: data })
    handleClose()
  }

  return (
    <div>
      <Button className='add-btn' onClick={handleOpen}>Добавить пиццу</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className='creacte-header'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Создать пиццу
          </Typography>
            <CloseIcon onClick={handleClose}/>
          </Box>
          <Box className='create-content'>
            <form onSubmit={createPizza}>
            <Typography id="modal-modal-title" variant="body1" >
            Название пиццы
          </Typography>
            <input id="outlined-basic" variant="outlined" name='name' className='create-name create-input'/>
            <Typography id="modal-modal-title" variant="body1" >
            Описание вкуса
          </Typography>
            <input id="outlined-basic" variant="outlined" name='discription' className='create-input create-disc' placeholder='Введите комментарий' />
          <Box className='creacte-size'>
            <Box className=''>
                <Typography id="modal-modal-title" variant="body1" >
                Размер пиццы
              </Typography>
                  <PizzaSize alignment={alignment} setAlignment={setAlignment}  name='size'/>
            </Box>
            <Box className=''>
                <Typography id="modal-modal-title" variant="body1" >
                Масса
              </Typography>
                <input id="outlined-basic" variant="outlined" name='weight' className='creacte-gram' />
              <Button variant="outlined">г</Button>
            </Box>
          </Box>
            <Typography id="modal-modal-title" variant="body1" >
            Тесто
          </Typography>
              <Dough dough={dough} setDough={setDough} name ='dough'/>
            <Typography id="modal-modal-title" variant="body1" >
            Огурцы
          </Typography>
              <Cuc cuc={cuc} setCuc={setCuc} name='cuc'/>
              <FormControlLabel control={<Checkbox checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }} />} label="Острая" />
            <Typography id="modal-modal-title" variant="body1" >
            Телефон автора
          </Typography>
          <input type="tel" id="phone" name="phone" className='create-tel' placeholder='+7 (___)___-__-__'
            required/>
          <Box className='creacte-footer'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Итоговая цена
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              450 р
            </Typography>
          </Box>
            <Box className='creacte-size'>
              <Button variant="outlined">Отменить</Button>
              <Button variant="contained" type='submit'>Создать</Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
