import { configureStore} from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
// import { persistReducerContacts } from './reducer';
import storage from 'redux-persist/lib/storage';
import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './sliceContact';
import persistReducer from 'redux-persist/es/persistReducer';
import  { authReducer } from './auth/auth-slice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,
           REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

