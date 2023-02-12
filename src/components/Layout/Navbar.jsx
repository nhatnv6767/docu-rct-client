import axios from 'axios'
import { Link, useHistory, useLocation } from 'react-router-dom'

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
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 90) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [visible, handleScroll])

  const handleLogout = () => {
    context.logout()
    history.push("/login")
  }

  return (
    <div
      className={`navbar-area ${
        visible ? "is-sticky sticky-active" : ""
      }`}
    >
      <div className={showMenu ? "main-navbar show" : "main-navbar"}>

      </div>

    </div>
  )
}

export default Navbar