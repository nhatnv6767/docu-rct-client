import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Link } from 'react-router-dom'

import headphone from '../../assets/img/main-slider/headphone.png'
import monitor from '../../assets/img/main-slider/monitor.png'
import drone from '../../assets/img/main-slider/drone.png'

const Banner = (props) => {
  return (
    <OwlCarousel
      className="owl-theme"
      items={1}
      loop
      dots={false}
      nav={true}
      navText={[
        '<i class=\'flaticon-left-arrow\'/>',
        '<i class=\'flaticon-right-arrow\'/>',
      ]}
    >
      <div className="main-slider-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-slider-content">
                    <b>Ưu đãi khủng</b>
                    <h1>Máy bay drone có một món quà hấp dẫn - miễn phí</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ab, blanditiis eius excepturi harum ipsum iusto labore
                      laboriosam maxime mollitia officia quis tempore! Ab
                      accusantium</p>

                    <div className="slider-btn">
                      <Link to="/shop" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>
                        Mua ngay
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-slider-image">
                    <img src={drone} alt="drone"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-slider-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-slider-content">
                    <b>Ưu đãi khủng</b>
                    <h1>Sản phẩm chất lượng cao đã sẵn sàng</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ab, blanditiis eius excepturi harum ipsum iusto labore
                      laboriosam maxime mollitia officia quis tempore! Ab
                      accusantium</p>

                    <div className="slider-btn">
                      <Link to="/shop" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>
                        Mua ngay
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-slider-image">
                    <img src={headphone} alt="headphone"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-slider-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-slider-content">
                    <b>Ưu đãi khủng</b>
                    <h1>Nhận mức giá tốt với Smart TV</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ab, blanditiis eius excepturi harum ipsum iusto labore
                      laboriosam maxime mollitia officia quis tempore! Ab
                      accusantium</p>

                    <div className="slider-btn">
                      <Link to="/shop" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>
                        Mua ngay
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-slider-image">
                    <img src={monitor} alt="drone"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  )
}

export default Banner