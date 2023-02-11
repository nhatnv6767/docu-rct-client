import errorImg from '../../assets/img/404.png'
import { Link } from 'react-router-dom'

const ErrorArea = (props) => {
  return (
    <section className="error-area ptb-50">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <img src={errorImg} alt="error"/>

              <h3>Wops - 404! Trang không tìm thấy!</h3>
              <p>
                Trang mà bạn đang tìm kiếm có thể đã bị xoá, tên đã thay đổi
                hoặc tạm thời không khả dụng.
              </p>
              <Link to="/" className="default-btn">
                Về trang chủ
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorArea