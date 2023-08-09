import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import style from './header.module.scss';
import { Button, Paper } from '@mui/material';
import PocketBase from 'pocketbase';

function Header() {
  const pb = new PocketBase('http://127.0.0.1:8090/');
  const navigate = useNavigate();

  const handleLogout = () => {
    pb.authStore.clear();
    navigate('/login');
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.header}>
          <div>junmarket</div>
          <Paper elevation={3}>
            <div className={style.buttons}>
              <Button variant='outlined'>Cart</Button>
              <Button variant='outlined'>Add</Button>
              <Button variant='outlined' onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Paper>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
