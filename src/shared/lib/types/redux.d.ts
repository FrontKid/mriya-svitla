import { RootState, AppDispatch, AppStore } from "@/shared/store";

declare global {
  type TRootState = RootState;
  type TAppDispatch = AppDispatch;
  type TAppStore = AppStore;
}
