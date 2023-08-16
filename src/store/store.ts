import { configureStore } from '@reduxjs/toolkit';
import { skillsApi } from '../services/skills';

export const store = configureStore({
  reducer: {
    [skillsApi.reducerPath]: skillsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skillsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
