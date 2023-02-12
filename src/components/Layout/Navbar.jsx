import axios from 'axios'
import { Link } from 'react-router-dom'

import AuthContext from '../../contexts/auth-context'

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

  return (
    <div>Navbar</div>
  )
}

export default Navbar