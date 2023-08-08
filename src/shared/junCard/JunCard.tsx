import { Avatar, Button, Chip, Paper, Stack } from '@mui/material';
import React from 'react';
import style from './junCard.module.scss';

function JunCard() {
  return (
    <Paper elevation={3}>
      <div className={style.card}>
        <Avatar
          src='/broken-image.jpg'
          sx={{ width: '5rem', height: '5rem' }}
        />
        <div className={style.name}>name</div>
        <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
          <Chip label='skill1' variant='outlined' />
          <Chip label='skill2' variant='outlined' />
          <Chip label='skill2' variant='outlined' />
          <Chip label='skill2' variant='outlined' />
          <Chip label='skill2' variant='outlined' />
          <Chip label='skill2' variant='outlined' />
          <Chip label='skill2' variant='outlined' />
        </Stack>

        <Button variant='outlined'>add to cart</Button>
      </div>
    </Paper>
  );
}

export default JunCard;
