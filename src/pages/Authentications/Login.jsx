import React from 'react'
import PageTitle from '../../components/Common/PageTitle'
import LoginArea from '../../components/Auth/LoginArea'
import Support from '../../components/Common/Support'
import Footer from '../../components/Footer/Footer'

const Login = (props) => {
  return (
    <div className="login-wrapper">
      <PageTitle title="Đăng nhập"/>
      <section className="login-area ptb-50">
        <div className="container">
          <LoginArea/>
        </div>
      </section>
      <Support/>
      <Footer/>
    </div>
  )
}

export default Login
