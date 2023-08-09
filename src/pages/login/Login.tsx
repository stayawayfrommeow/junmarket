import {
  Alert,
  AlertColor,
  Button,
  Paper,
  Snackbar,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import style from './login.module.scss';
import PocketBase from 'pocketbase';
import { useForm, SubmitHandler, Controller, set } from 'react-hook-form';
import { iLoginFields } from '../../shared/interfaces';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { setNew } from '../../store/reducers/UserSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const pb = new PocketBase('http://127.0.0.1:8090/');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
  const [snackbarType, setSnackbarType] = useState<AlertColor>('error');
  const navigate = useNavigate();

  const { getValues, control } = useForm<iLoginFields>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();

  const handleRegister = async (): Promise<void> => {
    const { login, password } = getValues();

    const data = {
      username: login,
      password: password,
      passwordConfirm: password,
    };

    const record = await pb
      .collection('users')
      .create(data)
      .then(() => handleOpenSnackbar('Registration success!', 'success'));
  };

  const handleLogin = async (): Promise<void> => {
    const { login, password } = getValues();

    const authData = await pb
      .collection('users')
      .authWithPassword(login, password)

      .catch((e) => handleOpenSnackbar('Failed to login.', 'error'));

    if (pb.authStore.isValid) {
      console.log(pb.authStore.model);
      navigate('/market');
    }
  };

  const handleOpenSnackbar = (text: string, type: AlertColor): void => {
    setSnackbarText(text);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };
  const handleCloseSnackbar = (): void => {
    setSnackbarOpen(false);
  };

  return (
    <div className={style.container}>
      <h2>welcome to junmarket</h2>

      <Paper elevation={8}>
        <form>
          <div className={style.loginForm}>
            <Controller
              control={control}
              name='login'
              render={({ field }) => (
                <TextField label='Login' variant='outlined' {...field} />
              )}
            />
            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                <TextField
                  label='Password'
                  variant='outlined'
                  {...field}
                  helperText='Minimum length is 5.'
                />
              )}
            />

            <div className={style.buttons}>
              <Button variant='outlined' onClick={handleRegister}>
                Register
              </Button>
              <Button variant='outlined' onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        </form>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity={snackbarType} sx={{ width: '100%' }}>
          {snackbarText}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
