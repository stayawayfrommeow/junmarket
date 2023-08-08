import React from 'react';
import style from './cart.module.scss';
import JunTable from './JunTable';
import { Button } from '@mui/material';

function Cart() {
  return (
    <div className={style.container}>
      <h4>cart</h4>
      <JunTable />
      <div className={style.buttons}>
        <Button variant='outlined'>purchase</Button>
        <Button variant='outlined'>continue shopping</Button>
      </div>
    </div>
  );
}

export default Cart;
