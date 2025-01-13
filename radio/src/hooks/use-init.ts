import { useEffect } from "react";

function useInit(callback: Function, deps?: unknown[]) {
  useEffect(() => {
    callback()
  }, deps || [])
}

export { useInit }