// // import { combineReducers } from "@reduxjs/toolkit";
// // import { configureStore as configureStoreRTK } from "@reduxjs/toolkit";
// // import {
// //   persistStore,
// //   persistReducer,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// //   Persistor,
// // } from "redux-persist";
// // import { cartSlice } from "./slices/cartSlice";
// // import { wishlistSlice } from "./slices/wishlistSlice";
// // import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// // import { bookingSlice } from "./slices/bookingSlice";
// // import appSlice from "./slices/appSlice";
// // import roomSlice from "./slices/roomSlice";
// // import formDataSlice from "./slices/formDataSlice";
// // import confirmedBookingSlice from "./slices/confirmedBookingSlice";

// // const createNoopStorage = () => {
// //   return {
// //     getItem(_key: string) {
// //       return Promise.resolve(null);
// //     },
// //     setItem(_key: string, value: any) {
// //       return Promise.resolve();
// //     },
// //     removeItem(_key: string) {
// //       return Promise.resolve();
// //     },
// //   };
// // };
// // const storage =
// //   typeof window !== "undefined"
// //     ? createWebStorage("local")
// //     : createNoopStorage();

// // const persistConfig = {
// //   key: "root",
// //   version: 1,
// //   storage,
// // };

// // const persistedReducer = persistReducer(
// //   persistConfig,
// //   combineReducers({
// //     cart: cartSlice.reducer,
// //     wishlist: wishlistSlice.reducer,
// //     booking: bookingSlice.reducer,
// //     app: appSlice,
// //     room: roomSlice,
// //     formData: formDataSlice,
// //     confirmedBooking: confirmedBookingSlice,
// //   })
// // );

// // // Configure Redux store
// // const store = configureStoreRTK({
// //   reducer: persistedReducer,
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //       },
// //     }),
// // });

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;
// // export type AppPersistor = Persistor;

// // // Create persistor
// // export const persistor = persistStore(store);

// // export default store;

// // redux/store.ts
// import { combineReducers } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import { hotelApi } from "@/services/hotelAPI";
// import { cartSlice } from "./slices/cartSlice";
// import { wishlistSlice } from "./slices/wishlistSlice";
// import { bookingSlice } from "./slices/bookingSlice";
// import appSlice from "./slices/appSlice";
// import roomSlice from "./slices/roomSlice";
// import formDataSlice from "./slices/formDataSlice";
// import confirmedBookingSlice from "./slices/confirmedBookingSlice";

// const createNoopStorage = () => ({
//   getItem(_key: string) {
//     return Promise.resolve(null);
//   },
//   setItem(_key: string, value: any) {
//     return Promise.resolve();
//   },
//   removeItem(_key: string) {
//     return Promise.resolve();
//   },
// });

// const storage =
//   typeof window !== "undefined"
//     ? createWebStorage("local")
//     : createNoopStorage();

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({
//     cart: cartSlice.reducer,
//     wishlist: wishlistSlice.reducer,
//     booking: bookingSlice.reducer,
//     app: appSlice,
//     room: roomSlice,
//     formData: formDataSlice,
//     confirmedBooking: confirmedBookingSlice,
//     [hotelApi.reducerPath]: hotelApi.reducer,
//   })
// );

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(hotelApi.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store);
// export default store;



// // store.ts
// import { combineReducers } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import { hotelApi } from "@/services/hotelAPI";
// import { roomApi } from "@/services/roomAPI"; // Import the room API
// import { cartSlice } from "./slices/cartSlice";
// import { wishlistSlice } from "./slices/wishlistSlice";
// import { bookingSlice } from "./slices/bookingSlice";
// import appSlice from "./slices/appSlice";
// import roomSlice from "./slices/roomSlice";
// import formDataSlice from "./slices/formDataSlice";
// import confirmedBookingSlice from "./slices/confirmedBookingSlice";

// const createNoopStorage = () => ({
//   getItem(_key: string) {
//     return Promise.resolve(null);
//   },
//   setItem(_key: string, value: any) {
//     return Promise.resolve();
//   },
//   removeItem(_key: string) {
//     return Promise.resolve();
//   },
// });

// const storage =
//   typeof window !== "undefined"
//     ? createWebStorage("local")
//     : createNoopStorage();

// // Separate persist config for non-API slices
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   blacklist: [hotelApi.reducerPath, roomApi.reducerPath], // Exclude API slices from persistence
// };

// // Combine reducers
// const rootReducer = combineReducers({
//   cart: cartSlice.reducer,
//   wishlist: wishlistSlice.reducer,
//   booking: bookingSlice.reducer,
//   app: appSlice,
//   room: roomSlice,
//   formData: formDataSlice,
//   confirmedBooking: confirmedBookingSlice,
//   [hotelApi.reducerPath]: hotelApi.reducer,
//   [roomApi.reducerPath]: roomApi.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(hotelApi.middleware, roomApi.middleware),
// });

// // Export types
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // Create persistor
// export const persistor = persistStore(store);
// export default store;


import { combineReducers } from "@reduxjs/toolkit";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { hotelApi } from "@/services/hotelAPI";
import { roomApi } from "@/services/roomAPI";
import { authApi } from '@/services/authAPI';
import { cartSlice } from "./slices/cartSlice";
import { wishlistSlice } from "./slices/wishlistSlice";
import { bookingSlice } from "./slices/bookingSlice";
import appSlice from "./slices/appSlice";
import roomSlice from "./slices/roomSlice";
import { promoApi } from "@/services/promoApi";
import { blogApi } from "@/services/blogAPI";
import { eventApi } from "@/services/eventAPI";
import { bookingApi } from "@/services/bookingAPI";
import { featuredApi } from "@/services/featuredAPI";
import formDataSlice from "./slices/formDataSlice";
import confirmedBookingSlice from "./slices/confirmedBookingSlice";
import filterReducer from './slices/filterSlice';
import authReducer from './slices/authSlice';
import reservationReducer from "./slices/reservationSlice"; // Add this import


const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve();
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [
    hotelApi.reducerPath,
    eventApi.reducerPath,
    featuredApi.reducerPath,
    blogApi.reducerPath, 
    roomApi.reducerPath, 
    bookingApi.reducerPath,
    // 'room',
    'formData',
    // 'filter',
    'reservation' // Add reservation to blacklist since we don't want to persist it
  ],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token', 'isAuthenticated'], // only persist these fields
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
  booking: bookingSlice.reducer,
  reservation: reservationReducer, // Add the reservation reducer
  app: appSlice,
  room: roomSlice,
  formData: formDataSlice,
  confirmedBooking: confirmedBookingSlice,
  filter: filterReducer, // Add this line
  [hotelApi.reducerPath]: hotelApi.reducer,
  [roomApi.reducerPath]: roomApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [promoApi.reducerPath]: promoApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  [eventApi.reducerPath]: eventApi.reducer,
  [featuredApi.reducerPath]: featuredApi.reducer,
  [bookingApi.reducerPath]: bookingApi.reducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create custom middleware for cache invalidation
const cacheInvalidationMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === 'room/clearRooms' || action.type === REHYDRATE) {
    store.dispatch(roomApi.util.resetApiState());
  }
  return next(action);
};

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      hotelApi.middleware,
      roomApi.middleware,
      authApi.middleware,
      promoApi.middleware,
      blogApi.middleware, 
      eventApi.middleware,
      featuredApi.middleware,
      bookingApi.middleware,
      cacheInvalidationMiddleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;