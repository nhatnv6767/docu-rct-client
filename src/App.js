import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComingSoonArea from './components/About/ComingSoonArea'
import TopHeader from './components/Layout/TopHeader'
import CommingSoon from './pages/About/CommingSoon'

function App () {
  return (
    <Router>
      {/*<ComingSoonArea/>*/}
      {/*<TopHeader shippingMessage="Miễn phí vận chuyển với đơn hàng trên 10.000 yên"/>*/}
      <CommingSoon/>

    </Router>
  )
}

export default App
