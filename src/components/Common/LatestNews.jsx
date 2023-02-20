import React from 'react'
import blog1 from '../../assets/img/blog/blog-1.jpg'
import blog2 from '../../assets/img/blog/blog-2.jpg'
import blog3 from '../../assets/img/blog/blog-3.jpg'

const LatestNews = ({ paddingClass = '' }) => {
  return (
    <section className={'blog-area ' + paddingClass}>
      <div className="container">
        <div className="section-title">
          <h2>Cập nhật mới nhất</h2>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog1} alt="image"/>
                </a>
              </div>

              <div className="blog-content">
                <span>TMDT</span>
                <h3>
                  <a href="/blog-details">
                    Nhận sửa chữa thiết bị điện tử
                  </a>
                </h3>

                <div className="post-meta">
                  <a href="#">Admin</a> / 18-05-2023
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut corporis deleniti doloremque earum eveniet ex nam
                  perferendis porro sapiente suscipit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog2} alt="image"/>
                </a>
              </div>

              <div className="blog-content">
                <span>TMDT</span>
                <h3>
                  <a href="/blog-details">
                    Nhiều mẫu đồng hồ thông minh đẹp, thời trang
                  </a>
                </h3>

                <div className="post-meta">
                  <a href="#">Admin</a> / 18-03-2023
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut corporis deleniti doloremque earum eveniet ex nam
                  perferendis porro sapiente suscipit.
                </p>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog3} alt="image"/>
                </a>
              </div>

              <div className="blog-content">
                <span>TMDT</span>
                <h3>
                  <a href="/blog-details">
                    Đồ điện gia dụng cũng đã về tại shop
                  </a>
                </h3>

                <div className="post-meta">
                  <a href="#">Admin</a> / 18-03-2023
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut corporis deleniti doloremque earum eveniet ex nam
                  perferendis porro sapiente suscipit.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default LatestNews
