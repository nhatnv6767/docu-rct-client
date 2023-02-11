const Footer = (props) => {
  return (
    <>
      <section className="footer-area pt-100 pd-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h2>Liên hệ chúng tôi</h2>
                <ul className="footer-contact-info">
                  <li>
                    <span>Địa chỉ:</span>
                    <a href="#" target="_blank">
                      〒352-0001 埼玉県新座市東北２丁目３８
                    </a>
                  </li>
                  <li>
                    <span>Tel:</span>
                    <a href="tel:+000000000">+0 (000) 000-0000</a>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:hello@gmail.com">hello@gmail.com</a>
                  </li>
                </ul>

                <ul className="footer-social">
                  <li>
                    <a href="https://www.facebook.com" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.pinterest.com" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.twitter.com" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h2>Chính sách</h2>
                <ul className="quick-links">
                  <li>
                    <a href="/pricing-plans">Vận chuyển, giao hàng</a>
                  </li>
                  <li><a href="/checkout">Phương thúc thanh toán</a></li>
                  <li><a href="/shop">Cách mua hàng</a></li>
                  <li><a href="/terms-of-service">Điều khoản dịch vụ</a></li>
                  <li><a href="/privacy-policy">Chính sách bảo mật</a></li>
                  <li><a href="/compare">Hoàn trả</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer widget">
                <h2>Hỗ trợ</h2>
                <ul className="quick-links">
                  <li><a href="/my-account">Tài khoản của tôi</a></li>
                  <li><a href="/tracking-order">Theo dõi đơn hàng</a></li>
                  <li><a href="/contact">Liên hệ</a></li>
                  <li><a href="/terms-of-service">Dịch vụ khách hàng</a></li>
                  <li><a href="/faqs">Câu hỏi</a></li>
                  <li><a href="/contact">Giúp đỡ</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h2>Liên lạc</h2>
                <div className="newsletter-item">
                  <div className="newsletter-content">
                    <p>
                      Để lại thông tin email và chúng tôi sẽ gửi đến bạn những
                      cập nhật mới nhất về sản phẩm
                    </p>
                  </div>
                  <form data-toggle="validator" className="newsletter-form">
                    <input
                      type="email"
                      className="input-newsletter"
                      placeholder="Địa chỉ email"
                      name="EMAIL"
                      required
                      autoComplete="off"
                    />

                    <button type="submit">Đăng ký</button>
                    <div className="form-result"
                         id="validator-newsletter"></div>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer