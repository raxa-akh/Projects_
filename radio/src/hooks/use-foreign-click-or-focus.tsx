import { useEffect } from "react"

function useForeignClickOrFocus(
  refs: React.RefObject<HTMLElement>[],
  callback: () => void
) {

  useEffect(() => {
    function foreignClickOrFocus(e: MouseEvent | FocusEvent) {
      if (!refs.find(ref => (ref.current as Node)?.contains(e.target as Node))) {
        callback()
      }
    }
    document.body.addEventListener('click', foreignClickOrFocus)
    document.body.addEventListener('focusin', foreignClickOrFocus)
    return () => {
      document.body.removeEventListener('click', foreignClickOrFocus)
      document.body.removeEventListener('focusin', foreignClickOrFocus)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export { useForeignClickOrFocus }