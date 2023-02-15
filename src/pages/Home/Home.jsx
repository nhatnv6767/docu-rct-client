import { listProducts } from '../../redux/Product/ProductAction'

import Footer from '../../components/Footer/Footer'
import NewArrivals from '../../components/Common/NewArrivals'
import Support from '../../components/Common/Support'
import BestSellers from '../../components/Common/BestSellers'

import { useDispatch, useSelector } from 'react-redux'
import { useContext, useState } from 'react'
import cartContext from '../../contexts/cart-context'
import Banner from '../../components/Home/Banner'
import './Home.css'

const Home = (props) => {

  const [product, setProduct] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  const { products } = useSelector(state => state.productReducer)
  const context = useContext(cartContext)
  return (
    <div>

      <Banner/>
      {/*<NewArrivals*/}
      {/*  paddingClass="pt-100 pb-70"*/}
      {/*  products={products}*/}
      {/*  addToCart=""*/}
      {/*  showQuickView=""*/}
      {/*/>*/}
    </div>
  )
}

export default Home