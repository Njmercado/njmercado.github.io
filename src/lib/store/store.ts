import { configureStore } from "@reduxjs/toolkit";
import footerReducer from '@/lib/store/features/footer/footerSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      footer: footerReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];