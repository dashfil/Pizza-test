import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Cuc.css'

export default function Cuc({ cuc, setCuc }) {
  

  const handleChange = (event) => {
    setCuc(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className='cuc-inp'>
      <FormControl fullWidth  className='cuc-inp'>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cuc}
          onChange={handleChange}
          className='cuc-inp'
        >
          <MenuItem value={'Малосольные'}>Малосольные</MenuItem>
          <MenuItem value={'Соленые'}>Соленые</MenuItem>
          <MenuItem value={'Тухлые'}>Тухлые</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
