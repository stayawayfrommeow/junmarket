import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './header.module.scss';
import { Button, Paper } from '@mui/material';

function Header() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.header}>
          <div>junmarket</div>
          <Paper elevation={3}>
            <div className={style.buttons}>
              <Button variant='outlined'>Cart</Button>
              <Button variant='outlined'>Add</Button>
            </div>
          </Paper>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
