import { Button, Paper, TextField } from '@mui/material';
import React from 'react';
import style from './login.module.scss';

function Login() {
  return (
    <div className={style.container}>
      <h2>welcome to junmarket</h2>

      <Paper elevation={8}>
        <div className={style.loginForm}>
          <TextField label='Login' variant='outlined' />
          <TextField label='Password' variant='outlined' />
          <div className={style.buttons}>
            <Button variant='outlined'>Register</Button>
            <Button variant='outlined'>Login</Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Login;
