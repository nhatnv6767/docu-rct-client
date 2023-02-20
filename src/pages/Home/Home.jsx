import { listProducts } from '../../redux/Product/ProductAction'

import Footer from '../../components/Footer/Footer'
import NewArrivals from '../../components/Common/NewArrivals'
import Support from '../../components/Common/Support'
import BestSellers from '../../components/Common/BestSellers'
import LatestNews from '../../components/Common/LatestNews'

import { useDispatch, useSelector } from 'react-redux'
import { useContext, useEffect, useState } from 'react'
import cartContext from '../../contexts/cart-context'
import Banner from '../../components/Home/Banner'
import './Home.css'
import Overview from '../../components/Home/Overview'
import Partner from '../../components/Common/Partner'

const Home = (props) => {

  const [product, setProduct] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  const { products } = useSelector(state => state.productReducer)
  const context = useContext(cartContext)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const showQuickView = (product) => {
    setIsOpen(true)
    setProduct(product)
  }

  const closeModal = () => {
    setIsOpen(false)
    setProduct({})
  }

  const addToCart = (product) => {
    let currentItem = {
      _id: product._id,
      name: product.name,
      price: product.price,
      type: product.type,
      total_in_stock: product.total_in_stock,
      image_public_id: product.image_public_id,
      quantity,
    }
    context.addItemToCart(currentItem)
  }

  return (
    <>

      <Banner/>
      <Overview/>
      <Support/>

      <LatestNews/>
      <Partner paddingClass=" ptb-100"/>
      {/*<NewArrivals*/}
      {/*  paddingClass="pt-100 pb-70"*/}
      {/*  products={products}*/}
      {/*  addToCart=""*/}
      {/*  showQuickView=""*/}
      {/*/>*/}
    </>
  )
}

export default Home