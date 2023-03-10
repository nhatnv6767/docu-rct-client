import axios from 'axios'
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom'

import AuthContext from '../../contexts/auth-context'
import { useContext, useEffect, useState } from 'react'

const homeRoutes = ['/', 'home']
const pagesRoutes = [
  '/about',
  '/our-team',
  '/pricing-plans',
  '/search',
  '/contact',
  '/faqs',
  '/login',
  '/register',
  '/my-account',
  '/error-404',
  '/tracking-order',
  '/compare',
  '/terms-of-service',
  '/privacy-policy',
]

const shopRoutes = [
  '/shop',
  '/shop-list-view',
  '/shop-left-sidebar',
  '/shop-full-width',
  '/cart',
  '/wishlist',
  '/checkout',
  '/products-details',
  '/products-details-sidebar',
]

const blogRoutes = [
  '/blog',
  '/blog-list-view',
  '/blog-left-sidebar',
  '/blog-right-sidebar',
  '/blog-full-width',
  '/blog-details',
]

const productsRoutes = ['/products', '/add-product']

const Navbar = (props) => {
  const [user, setUser] = useState({})
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()
  const context = useContext(AuthContext)
  const history = useHistory()
  const [active, setActive] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (context && context.userId) {
      axios.get(`/user/${context.userId}`)
        .then((res) => {
          setUser(res.data.user)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [context])

  const toggleHotline = () => {
    setActive(!active)
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos > 90) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visible, handleScroll])

  const handleLogout = () => {
    context.logout()
    history.push('/login')
  }

  return (
    <div
      className={`navbar-area ${
        visible ? 'is-sticky sticky-active' : ''
      }`}
    >
      <div className={showMenu ? 'main-navbar show' : 'main-navbar'}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className={'navbar-category'}>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item respo-nav">
                    <a href="#" className="nav-link">
                      <i className="bx bx-menu"></i>
                      Danh m???c
                    </a>
                    <ul className="dropdown-menu">

                      <li className="nav-item">
                        <Link
                          to="/shop/camera"
                          className="nav-link"
                        >
                          <i className="flaticon-camera"></i>
                          Camera
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/shop/speaker"
                          className="nav-link"
                        >
                          <i className="flaticon-stereo"></i>
                          Audio
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/shop/tv"
                        >
                          <i className="flaticon-tv-box"></i>
                          TV
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/shop/phone" className="nav-link">
                          <i className="flaticon-smartphone"></i>
                          ??i???n tho???i
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/shop/headphone" className="nav-link">
                          <i className="flaticon-headphones"></i>
                          Headphone
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/shop/watch" className="nav-link">
                          <i className="flaticon-smart-watch"></i>
                          ?????ng h???
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/shop/computer" className="nav-link">
                          <i className="flaticon-desktop-computer"></i>
                          Computer
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/shop/computer" className="nav-link">
                          <i className="flaticon-laptop"></i>
                          Laptop
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/shop/battery" className="nav-link">
                          <i className="flaticon-battery-charge"></i>
                          Pin
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/shop/accessories" className="nav-link">
                          <i className="flaticon-trimmer"></i>
                          Ph??? ki???n
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav responsive-menu">
                <li className="nav-item">
                  <NavLink
                    to={'/'}
                    isActive={() => homeRoutes.includes(pathname)}
                    className="nav-link"
                  >
                    Trang ch??? {' '}
                    <i className="bx bx-chevron-down chevron-display"></i>
                    <span className="plus-icon"></span>
                  </NavLink>
                </li>

                <li className="nav-item megamenu">
                  <NavLink
                    to="/about"
                    isActive={() => pagesRoutes.includes(pathname)}
                    className="nav-link"
                  >
                    Li??n k???t{' '}
                    <i className="bx bx-chevron-down chevron-display"></i>
                    <span className="plus-icon"></span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <ul className="megamenu-submenu">
                              <li>
                                <NavLink
                                  to={'/about'}
                                  className="nav-link"
                                >
                                  V??? ch??ng t??i
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to={'/our-team'}
                                  className="nav-link"
                                >
                                  Nh??m ch??ng t??i
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to={'/pricing-plans'}
                                  className="nav-link"
                                >
                                  K??? ho???ch
                                </NavLink>
                              </li>
                              <li>
                                <NavLink className="nav-link" to={'/search'}>
                                  T??m ki???m
                                </NavLink>
                              </li>

                              <li>
                                <NavLink className="nav-link" to={'/contact'}>
                                  Li??n h???
                                </NavLink>
                              </li>
                            </ul>
                          </div>

                          <div className="col">
                            <ul className="megamenu-submenu">
                              <li>
                                <NavLink className="nav-link" to={'/faqs'}>
                                  C??u h???i
                                </NavLink>
                              </li>
                              {!context.token && (
                                <div>
                                  <li>
                                    <NavLink className="nav-link" to="/login">
                                      ????ng nh???p
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink className="nav-link"
                                             to="/register">
                                      ????ng k??
                                    </NavLink>
                                  </li>
                                </div>
                              )}

                              <li>
                                <NavLink className="nav-link"
                                         to="/my-account">
                                  T??i kho???n
                                </NavLink>
                              </li>

                              <li>
                                <NavLink className="nav-link" to="/error-404">
                                  404 Error
                                </NavLink>
                              </li>
                            </ul>
                          </div>

                          <div className="col">
                            <ul className="megamenu-submenu">
                              <li>
                                <NavLink className="nav-link"
                                         to="/tracking-order">
                                  Theo d??i ????n
                                </NavLink>
                              </li>

                              <li>
                                <NavLink className="nav-link" to="/compare">
                                  So s??nh
                                </NavLink>
                              </li>

                              <li>
                                <NavLink className="nav-link"
                                         to="/terms-of-service">
                                  Terms Of Service
                                </NavLink>
                              </li>

                              <li>
                                <NavLink className="nav-link"
                                         to="/privacy-policy">
                                  Ch??nh s??ch
                                </NavLink>
                              </li>

                              <li>
                                <NavLink className="nav-link" to="/coming-soon">
                                  S??? ki???n
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/shop"
                    isActive={() => shopRoutes.includes(pathname)}
                    className="nav-link"
                  >
                    C???a h??ng {' '}
                    <i className="bx bx-chevron-down chevron-display"></i>
                    <span className="plus-icon">+</span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/shop">
                        C???a h??ng
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/shop-list-view">
                        Danh s??ch h??ng ho??
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/shop-left-sidebar">
                        Shop Left Sidebar
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/shop-right-sidebar">
                        Shop Right Sidebar
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/shop-full-width">
                        Shop Full Width
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/cart">
                        Gi??? h??ng
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/wishlist">
                        Y??u th??ch
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/checkout">
                        Trang thanh to??n
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    isActive={() => blogRoutes.includes(pathname)}
                    className="nav-link"
                  >
                    Blog{' '}
                    <i className="bx bx-chevron-down chevron-display"></i>
                    <span className="plus-icon">+</span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/blog">
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/blog-list-view">
                        Danh s??ch Blog
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/blog-left-sidebar">
                        Blog Left Sidebar
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/blog-right-sidebar">
                        Blog Right Sidebar
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/blog-full-width">
                        Blog Full Width
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/blog-details">
                        Chi ti???t
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                  >
                    Li??n h???
                  </NavLink>
                </li>
                {context.token && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        to="/profile"
                        className="nav-link"
                      >
                        {user && (
                          <i className="bx bxs-user"></i>
                        )} {' '}
                        <i className="bx bx-chevron-down chevron-display"></i>
                        <span className="plus-icon">
                          +
                        </span>
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/profile">
                            {user && user.name}
                          </NavLink>
                        </li>

                        {user.role === 'admin' && (
                          <>
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/products">
                                Xem c??c s???n ph???m
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/add-product">
                                Th??m s???n ph???m m???i
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/order">
                                ?????t h??ng
                              </NavLink>
                            </li>
                          </>
                        )}

                        <li className="nav-item">
                          <NavLink className="nav-link" to="/cart">
                            Gi??? h??ng
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/wishlist">
                            Y??u th??ch
                          </NavLink>
                        </li>

                        <hr/>

                        <li className="nav-item">
                          <button
                            className="nav-logout-btn"
                            onClick={handleLogout}
                          >
                            ????ng xu???t
                          </button>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/reset">
                            Qu??n m???t kh???u
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </ul>

              <div className="others-option d-flex align-items-center">
                <div className="option-item respo-nav">
                  <span>
                    Hotline:
                    <a href="tel:123456789">
                      (+1) 234 567 - 6789
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="others-option-for-responsive">
        <div className="container">
          <div className="responsive-logo">
            <span>pShop</span>
          </div>
          <div className="dot-menu" onClick={() => toggleHotline()}>
            <div className="inner">
              <div className="circle circle-one"></div>
              <div className="circle circle-two"></div>
              <div className="circle circle-three"></div>
            </div>
          </div>

          <div className="hamburger-menu" onClick={() => toggleMenu()}>
            {showMenu ? (
              <span className="x-icon">x</span>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </div>

          <div className={active ? 'active container' : 'container'}>
            <div className="option-inner">
              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <span>
                    Hotline:
                    <a href="tel:123456789">
                      (+1) 234 567 - 6789
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar