import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { iUser } from '../../shared/interfaces';

const initialState: iUser | null = null;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNew: (state, action: PayloadAction<iUser>) => {
      action;
    },
  },
});

export const { setNew } = userSlice.actions;

export default userSlice.reducer;
