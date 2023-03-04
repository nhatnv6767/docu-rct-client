import React, { useContext, useRef, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthContext from '../../contexts/auth-context'

const LoginArea = ({ customClass = '', history }) => {
  const email = useRef()
  const password = useRef()
  const [alertMsg, setAlertMsg] = useState(null)
  const context = useContext(AuthContext)
  return (
    <div>
      LoginArea
    </div>
  )
}

export default LoginArea
