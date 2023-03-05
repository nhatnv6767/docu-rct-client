import React, { useContext, useRef, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthContext from '../../contexts/auth-context'
import axios from 'axios'

const LoginArea = ({ customClass = '', history }) => {
  const email = useRef()
  const password = useRef()
  const [alertMsg, setAlertMsg] = useState(null)
  const context = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
      email: email.current.value,
      password: password.current.value,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.id) {
          email.current.value = ''
          password.current.value = ''
          context.login(res.token, res.id, res.tokenExpiration)
          localStorage.setItem('token', JSON.stringify(res.token))
          localStorage.setItem('userId', JSON.stringify(res.id))
          localStorage.setItem('tokenExpiration',
            JSON.stringify(res.tokenExpiration))
          history.push('/')
        } else if (res.error) {
          setAlertMsg(res.error)
        } else if (res.errors) {
          let errors = Object.values(res.errors)
          setAlertMsg(errors)
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={'login-form' + customClass}>
      {alertMsg &&
        (Array.isArray(alertMsg) ? (
          <div className="alert alert-danger" role="alert">
            <ul className="errors" style={{ marginBottom: 0 }}>
              {alertMsg.map((msg) => (
                <li key={msg} className="error">
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={`alert alert-success`} role="alert">
            {alertMsg}
          </div>
        ))
      }

      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 placeholder="Email"
                 ref={email}
          />
        </div>
        <div className="form-group">
          <input type="password"
                 className="form-control"
                 placeholder="Mật khẩu"
                 ref={password}
          />
        </div>


      </form>
    </div>
  )
}

export default withRouter(LoginArea)
