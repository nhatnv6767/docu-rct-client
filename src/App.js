import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import TopHeader from './components/Layout/TopHeader'
import ErrorArea from './components/About/ErrorArea'

function App () {
  return (
    <Router>
      <ErrorArea/>
    </Router>
  )
}

export default App
