import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";
const sagaMiddleware = createSagaMiddleware();

const persistConfig = { key: "root", storage, whitelist: ["cart"] };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type", action.type);
//   console.log("payload", action.type);
//   console.log("current state", store.getState());
//   next(action);
//   console.log("next state", store.getState());
// };
