import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Image } from 'cloudinary-react'
import axios from 'axios'
import authContext from '../../contexts/auth-context'

const ProductsArea = ({ products, history, editProduct, deleteProduct }) => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [inStock, setInStock] = useState('')
  const [role, setRole] = useState('user')
  const [product, setProduct] = useState({})
  const [imagePublicId, setImagePublicId] = useState(null)
  const [product_images, setProductImages] = useState('')
  const context = useContext(authContext)

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/check-role`, {
      userId: context.userId,
    })
      .then((res) => setRole(res.data.role))
      .catch((err) => console.log(err))
  }, [])

  const goToDetails = (id) => {
    history.push(`/products-details/${id}`)
  }

  const openDeleteModal = (product, imagePublicId) => {
    setProduct(product)
    setImagePublicId(imagePublicId)
  }

  const openEditModal = (product, imagePublicId) => {
    setProduct(product)
    setName(product.name)
    setDescription(product.description)
    setProductImages(product.image_public_id)
    setType(product.type)
    setColor(product.color)
    setPrice(product.price)
    setInStock(product.total_in_stock)
    setImagePublicId(imagePublicId)
  }

  return (
    <div>
      ProductsArea
    </div>
  )
}

export default ProductsArea
