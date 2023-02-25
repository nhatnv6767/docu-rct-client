import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Image } from 'cloudinary-react'
import axios from 'axios'
import authContext from "../../contexts/auth-context"
import { logDOM } from '@testing-library/react'

const ProductsArea = ({ products, history, editProduct, deleteProduct }) => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [type, setType] = useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState("")
  const [inStock, setInStock] = useState("")
  const [role, setRole] = useState("user")
  const [product, setProduct] = useState({})
  const [imagePublicId, setImagePublicId] = useState(null)
  const [product_images, setProductImages] = useState("")
  const context = useContext(authContext)

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/check-role`, {
      userId: context.userId,
    })
      .then((res) => setRole(res.data.role))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      ProductsArea
    </div>
  )
}

export default ProductsArea
