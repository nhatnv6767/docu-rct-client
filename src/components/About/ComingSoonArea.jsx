const ComingSoonArea = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div className="comming-soon-area ptb-50">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="coming-soon-content">
              <h2>Chúng tôi sẽ khởi chạy chương trình sớm ...</h2>
              <div id="timer"
                   className="flex-wrap d-flex justify-content-center">
                <div id="days"
                     className="align-items-center flex-column d-flex justify-content-center">
                  {days}
                  <span>Ngày</span>
                </div>
                <div id="hours"
                     className="align-items-center flex-column d-flex justify-content-center">
                  {hours}
                  <span>Giờ</span>
                </div>
                <div id="minutes"
                     className="align-items-center flex-column d-flex justify-content-center">
                  {minutes}
                  <span>Phút</span>
                </div>
                <div id="seconds"
                     className="align-items-center flex-column d-flex justify-content-center">
                  {seconds}
                  <span>Giây</span>
                </div>
              </div>

              <form className="newsletter-form" data-toggle="validator">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Nhập vào email của bạn"
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />
                </div>
                <button className="default-btn" type="submit">
                  Đăng ký
                </button>
                <div id="validator-newsletter" className="form-result"></div>
                <p>
                  Hãy điền email của bạn để chúng tôi có thể gửi đến bạn những
                  thông tin sớm nhất!
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoonArea