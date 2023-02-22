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
      let { res } = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/user/register`,
        method: 'POST',
        data: {
          name: name.current.value,
          username: username.current.value,
          email: email.current.value,
          phone: phone.current.value,
          password: password.current.value,
        },
      })
      if (res.status === 200) {

      }
    } catch (e) {

    }

  }

  return (
    <div className="register-form">
      <h2>ĐĂNG KÝ</h2>
    </div>
  )
}

export default RegisterArea
