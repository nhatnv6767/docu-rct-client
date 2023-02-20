import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterArea = (props) => {

  const name = useRef()
  const username = useRef()
  const email = useRef()
  const phone = useRef()
  const password = useRef()

  const [passwordShown, setPasswordShown] = useState(false)
  const [message, setMessage] = useState(null)

  const handleRegistration = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      RegisterArea
    </div>
  )
}

export default RegisterArea
