import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComingSoonArea from './components/About/ComingSoonArea'
import TopHeader from './components/Layout/TopHeader'
import ComingSoon from './pages/About/ComingSoon'
import MiddleHeader from './components/Layout/MiddleHeader'
import Navbar from './components/Layout/Navbar'
import Support from './components/Common/Support'
import NewArrivals from './components/Common/NewArrivals'

function App () {
  return (
    <Router>
      {/*<ComingSoonArea/>*/}
      <TopHeader
        shippingMessage="Miễn phí vận chuyển với đơn hàng trên 10.000 &#165;"/>
      {/*<ComingSoon/>*/}
      <MiddleHeader/>
      <Navbar/>
      <NewArrivals/>
      {/*<Support paddingClass="pt-20 pb-50"/>*/}
    </Router>
  )
}

export default App
