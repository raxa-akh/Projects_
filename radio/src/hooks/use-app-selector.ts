import { RootState } from "@/services/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppSelector }