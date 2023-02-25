export default function validateInfo (values) {
  let errors = {}

  if (!values.product_name) {
    errors.product_name = 'Cần phải có tên sản phẩm'
  }

  if (!values.product_description) {
    errors.product_description = 'Cần phải có mô tả sản phẩm'
  }
  if (!values.product_images) {
    errors.product_images = 'Cần phải có ảnh cho sản phẩm'
  }

  if (!values.product_type) {
    errors.product_type = 'Cần phải có loại sản phẩm'
  }

  if (!values.product_color) {
    errors.product_color = 'Vui lòng chọn màu cho sản phẩm'
  }
  if (!values.product_price) {
    errors.product_price = 'Đưa vào giá cho sản phẩm'
  }
  if (!values.product_totalInStock) {
    errors.product_totalInStock = 'Cần có tổng số lượng của mặt hàng này'
  }
  return errors
}
