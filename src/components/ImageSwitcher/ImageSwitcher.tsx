import { useState, useEffect } from 'react'

type Props = {
  interval: number
  images: string[]
  className?: string
}

function ImageSwitcher(props: Props) {
  const { interval, images, className } = props

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((previousIndex) => {
        return (previousIndex + 1) % images.length
      })
    }, interval) // changes every 3 seconds

    return () => {
      clearInterval(timer)
    }
  }, [images.length, interval])

  return (
    <img src={images[index]} alt={`picture - ${index}`} className={className} />
  )
}

export default ImageSwitcher
