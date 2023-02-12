import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComingSoonArea from './components/About/ComingSoonArea'
import TopHeader from './components/Layout/TopHeader'
import ComingSoon from './pages/About/ComingSoon'
import MiddleHeader from './components/Layout/MiddleHeader'
import Navbar from './components/Layout/Navbar'

function App () {
  return (
    <Router>
      {/*<ComingSoonArea/>*/}
      <TopHeader
        shippingMessage="Miễn phí vận chuyển với đơn hàng trên 10.000 &#165;"/>
      {/*<ComingSoon/>*/}
      <MiddleHeader/>
      <Navbar/>
    </Router>
  )
}

export default App
