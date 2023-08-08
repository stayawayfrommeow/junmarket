import { Paper, TextField } from '@mui/material';
import React from 'react';

function Bar() {
  return (
    <div>
      <Paper elevation={5}>
        <TextField label='Search' variant='outlined' />
      </Paper>
    </div>
  );
}

export default Bar;
