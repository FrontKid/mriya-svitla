import { configureStore } from "@reduxjs/toolkit";

import { testApi } from "@/shared/api/testApiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [testApi.reducerPath]: testApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(testApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
