import overview1 from '../../assets/img/overview/overview1.png'
import overview2 from '../../assets/img/overview/overview2.png'
import { Link } from 'react-router-dom'

const Overview = (props) => {
  return (
    <section className="overview-area pt-100 pg-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-overview">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="overview-image">
                    <img src={overview1} alt="overview1"/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="overview-content">
                    <h3>Ưu đãi đặc biệt</h3>
                    <p>Cho đầu năm</p>
                    <span>$499.00</span>

                    <div className="overview-btn">
                      <Link to="/shop" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>
                        Mua ngay
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-overview-item">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="overview-content">
                    <p>Tính năng</p>
                    <h3>Giá & chất lượng tốt nhất</h3>
                    <span>Giảm 50%</span>

                    <div className="overview-btn">
                      <a href="#" className="overview-btn-one">
                        Xem sản phẩm
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="overview-image">
                    <img src={overview2} alt="overview2"/>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview