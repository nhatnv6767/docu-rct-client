import { Image } from 'cloudinary-react'
import { Link } from 'react-router-dom'

const NewArrivals = ({
  paddingClass = '',
  title = 'Hàng sắp về',
  products = [],
  showQuickView,
  addToCart,
}) => {
  return (
    <section className={'arrivals-products-area' + paddingClass}>
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
        </div>

        <div className="row justify-content-center">
          {products &&
            products.slice(0, 4).map((product) => {
              return (
                <div className="col-lg-3 col-sm-6" key={product._id}>
                  <div className="single-arrivals-products">
                    <div className="arrivals-products-image">
                      <Link to={`/products-details/${product._id}`}>
                        <Image
                          key={product._id}
                          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                          publicId={product.image_public_id}
                          width="300"
                          crop="scale"
                        />
                      </Link>
                      <div className="tag">New</div>
                      <ul className="arrivals-action">

                        <li>
                          
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default NewArrivals