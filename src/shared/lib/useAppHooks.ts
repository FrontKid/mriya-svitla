import { useDispatch, useSelector, useStore } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
const useAppSelector = useSelector.withTypes<TRootState>();
const useAppStore = useStore.withTypes<TAppStore>();

export { useAppDispatch, useAppSelector, useAppStore };
