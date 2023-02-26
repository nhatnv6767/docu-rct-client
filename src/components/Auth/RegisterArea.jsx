import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'

const RegisterArea = (props) => {

  const name = useRef()
  const username = useRef()
  const email = useRef()
  const phone = useRef()
  const password = useRef()

  const [passwordShown, setPasswordShown] = useState(false)
  const [message, setMessage] = useState(null)

  const registerValidation = Yup.object({
    name: Yup.string().required('Tên của bạn là gì?')
      .min(2, 'Độ dài của tên là từ 2 đến 16 ký tự')
      .max(16, 'Độ dài của tên là từ 2 đến 16 ký tự')
      .matches(/^[aA-zZ\s]+$/, 'Số và ký tự đặc biệt không được sử dụng'),
    email: Yup.string()
      .required(
        'Bạn cần phải nhập vào email, để có thể đăng nhập và sử dụng chức năng đặt hàng')
      .email('Hãy nhập vào địa chỉ email chính xác'),
    password: Yup.string()
      .required(
        'Mật khẩu nên kết hợp ít nhất 6 sô, chữ và một vài ký tự đặc biệt')
      .min(6, 'Tối thiểu là 6 ký tự')
      .max(36, 'Tối đa 36 ký tự'),
  })
  const handleRegistration = async (e) => {
    e.preventDefault()
    try {
      let { data, status, ...res } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/register`, {
          name: name.current.value,
          username: username.current.value,
          email: email.current.value,
          phone: phone.current.value,
          password: password.current.value,
        })

      if (status === 200) {
        name.current.value = ''
        username.current.value = ''
        email.current.value = ''
        phone.current.value = ''
        password.current.value = ''
        setMessage(data.message)
        console.log(message)
      } else {
        console.log('something wrong')
      }

      // console.log('data _: ', data)// tra ve data.message neu thanh cong
      // console.log('data message_: ', data.message)// tra ve data.message neu thanh cong
      // console.log('res _: ', res)
      // console.log('res response_: ', res.request)
      // console.log('status _: ', status)
    } catch (e) {
      let errorMessage = e.response.data.error
      let errors = Object.values(e.response.data.error)
      console.log(errorMessage)
      setMessage(errors)

    }

  }

  return (
    <div className="register-form">

      {message &&
        (Array.isArray(message) ? (
            <div className="alert alert-danger" role="alert">
              <ul className="errors" style={{ marginBottom: 0 }}>
                {message.map((msg) => (
                  <li key={msg} className="error">
                    {msg}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className={`alert alert-success`} role="alert">
              {message}
            </div>
          )
        )
      }

      <h2>ĐĂNG KÝ</h2>

      <form onSubmit={handleRegistration}>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Họ tên"
            ref={name}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Tên tài khoản"
            ref={username}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            ref={email}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Số điện thoại"
            ref={phone}
            required
          />
        </div>
        <div className="form-group">
          <input
            type={passwordShown ? 'text' : 'password'}
            className="form-control"
            placeholder="Mật khẩu"
            ref={password}
            required
          />
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkme"
                onChange={() => setPasswordShown(!passwordShown)}
              />
              <label htmlFor="checkme" className="form-check-label"></label>
            </div>
          </div>
        </div>
        <button type="submit">Đăng ký ngay</button>
      </form>

      <div className="important-text">
        <p>
          Bạn đã có tài khoản? <Link to="/login">Đăng nhập!</Link>
        </p>
      </div>

    </div>
  )
}

export default RegisterArea
