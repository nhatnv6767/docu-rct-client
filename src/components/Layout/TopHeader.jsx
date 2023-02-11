import { useContext } from 'react'
import AuthContext from '../../contexts/auth-context'

const TopHeader = ({ shippingMessage, history }) => {
  const context = useContext(AuthContext)

  const handleLogout = () => {
    context.logout()
    history.push("/login")
  }
  return (
    <div>TopHeader</div>
  )
}

export default TopHeader