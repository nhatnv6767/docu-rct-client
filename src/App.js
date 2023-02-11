import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComingSoonArea from './components/About/ComingSoonArea'
import TopHeader from './components/Layout/TopHeader'

function App () {
  return (
    <Router>
      {/*<ComingSoonArea/>*/}
      {/*<TopHeader shippingMessage="Miễn phí vận chuyển với đơn hàng trên 10.000 yên"/>*/}
      <ComingSoonArea/>

    </Router>
  )
}

export default App
