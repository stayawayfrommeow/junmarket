import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';
import style from './market.module.scss';
import SearchIcon from '@mui/icons-material/Search';

function Bar() {
  return (
    <Paper elevation={5}>
      <div className={style.bar}>
        <TextField
          label='Search'
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <FormControl sx={{ minWidth: '10rem' }}>
          <InputLabel id='select-label'>Skills</InputLabel>
          <Select labelId='select-label' id='select' label='Skills'>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Paper>
  );
}

export default Bar;
