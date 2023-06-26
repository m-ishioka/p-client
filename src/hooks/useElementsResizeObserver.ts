import { useCallback, useEffect, useRef, useState } from 'react'

export const useElementsResizeObserver = () => {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    const width = entries[0].contentRect.width
    setWidth(Math.floor(width))
  }, [])
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      handleResize(entries)
    })
    ref.current && resizeObserver.observe(ref.current)

    return () => resizeObserver.disconnect()
  }, [])

  return {
    width,
    ref,
  }
}
