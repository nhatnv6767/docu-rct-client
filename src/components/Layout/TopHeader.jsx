import { useContext } from 'react'
import AuthContext from '../../contexts/auth-context'
import english from '../../assets/img/english.png'
import tiengviet from '../../assets/img/tiengviet.png'
import { Link, withRouter } from 'react-router-dom'

const TopHeader = ({ shippingMessage, history }) => {
  const context = useContext(AuthContext)

  const handleLogout = () => {
    context.logout()
    history.push('/login')
  }
  return (
    <div className="top-header-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="top-header-content">
              <span>
                <i className="flaticon-check"></i>
                {shippingMessage}
              </span>
            </div>
          </div>

          <div className="col-lg-6 text-right">
            <ul className="top-header-optional">
              <li>
                <div className="dropdown language-switcher d-inline-block">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>
                      Ngôn ngữ{' '}
                      <i className="bx bx-chevron-down"></i>
                    </span>
                  </button>

                  <div className="dropdown-menu">
                    <a href="#"
                       className="dropdown-item d-flex align-items-center">
                      <img src={english} alt="flag" className="shadow-sm"/>
                      <span>English</span>
                    </a>

                  </div>
                  <div className="dropdown-menu">
                    <a href="#"
                       className="dropdown-item d-flex align-items-center">
                      <img src={tiengviet} alt="flag" className="shadow-sm"/>
                      <span>Tiếng Việt</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <i className="bx bxs-lock-alt"></i>
                <span>
                  {!context.token && (
                    <Link to="/login">Đăng nhập</Link>
                  )}{' '}
                  Or{' '}
                  {!context.token && (
                    <Link to="/login">Đăng ký</Link>
                  )}
                  {context.token && (
                    <button
                      className="logout-btn"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )}
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default withRouter(TopHeader)