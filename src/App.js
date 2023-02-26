import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComingSoonArea from './components/About/ComingSoonArea'
import TopHeader from './components/Layout/TopHeader'
import ComingSoon from './pages/About/ComingSoon'
import MiddleHeader from './components/Layout/MiddleHeader'
import Navbar from './components/Layout/Navbar'
import Support from './components/Common/Support'
import NewArrivals from './components/Common/NewArrivals'
import Home from './pages/Home/Home'
import Register from './pages/Authentications/Register'
import ProductsArea from './components/Products/ProductsArea'
import Products from './pages/Products/Products'
import Login from './pages/Authentications/Login'

function App () {
  return (
    <div className="app">
      <Router>
        <TopHeader
          shippingMessage="Miễn phí vận chuyển với đơn hàng trên 10.000 &#165;"/>
        <MiddleHeader/>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/products" component={Products}/>
        </Switch>


      </Router>
    </div>
  )
}

export default App
