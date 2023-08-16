import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import style from './header.module.scss';
import { Button, Paper } from '@mui/material';
import PocketBase from 'pocketbase';
import AddDialog from './AddDialog';

function Header() {
  const pb = new PocketBase('http://127.0.0.1:8090/');
  const navigate = useNavigate();
  const location = useLocation();

  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const handleLogout = () => {
    pb.authStore.clear();
    navigate('/login');
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const handleGoToMarket = () => {
    navigate('/market');
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.header}>
          <div>junmarket</div>
          <Paper elevation={3}>
            <div className={style.buttons}>
              {location.pathname === '/market' && (
                <>
                  <Button variant='outlined' onClick={handleGoToCart}>
                    Cart
                  </Button>
                  <Button
                    variant='outlined'
                    onClick={() => setAddDialogOpen(true)}
                  >
                    Add
                  </Button>
                </>
              )}
              {location.pathname === '/cart' && (
                <Button variant='outlined' onClick={handleGoToMarket}>
                  Market
                </Button>
              )}

              <Button variant='outlined' onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Paper>
        </div>
        <AddDialog open={addDialogOpen} setOpen={setAddDialogOpen} />
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
