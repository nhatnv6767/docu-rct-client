import { useEffect, useState } from 'react'
import Preloader from '../../components/Common/Preloader'
import Countdown from 'react-countdown'
import ComingSoonArea from '../../components/About/ComingSoonArea'

const ComingSoon = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {isLoading ? (
        <Preloader/>
      ) : (
        <Countdown date={Date.now() + 50000000000} renderer={ComingSoonArea}/>
      )}
    </>
  )
}

export default ComingSoon