import { useEffect } from "react";

function useClear(callback: Function) {
  useEffect(() => {
    return () => {
      callback()
    }
  }, [])
}

export { useClear }