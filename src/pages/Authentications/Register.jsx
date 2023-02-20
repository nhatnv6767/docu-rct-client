import React from 'react'
import PageTitle from '../../components/Common/PageTitle'
import Support from '../../components/Common/Support'
import Footer from '../../components/Footer/Footer'

const Register = (props) => {
  return (
    <div className="register-wrapper">
      <PageTitle title="Đăng ký"/>
      <section className="register-area ptb-50">
        <div className="container">
          Trang dang ky o day
        </div>
      </section>
      <Support/>
      <Footer/>
    </div>
  )
}

export default Register
