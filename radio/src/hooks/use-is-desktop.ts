import { useMediaQuery } from "react-responsive"

export function useIsDesktop() {
  return  useMediaQuery({
    minWidth: 1024
  })
}