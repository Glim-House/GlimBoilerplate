import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {rootReducer} from './root.reducer';
import {rootSaga} from './root.saga';
// import {MMKVLoader} from 'AsyncStorageAsyncStorage';
import {persistReducer, persistStore} from 'redux-persist';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = AsyncStorage;
const sagaMiddleWare = createSagaMiddleware();
const middleware = [
  sagaMiddleWare,
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['counter'],
  blacklist: [],
  debug: true,
  devTools: process.env.NODE_ENV !== 'production',
};

if (__DEV__) {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
