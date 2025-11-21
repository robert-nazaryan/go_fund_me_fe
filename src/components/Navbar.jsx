import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

function Navbar() {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          💰 CrowdFund
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Главная</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/create-campaign" className="navbar-link">Создать кампанию</Link>
              <Link to="/my-campaigns" className="navbar-link">Мои кампании</Link>
              <Link to="/profile" className="navbar-link">Профиль</Link>
              <div className="navbar-user">
                <span className="navbar-balance">💵 {user?.virtualBalance?.toFixed(2)} ₽</span>
                <span className="navbar-username">{user?.fullName}</span>
                <button onClick={handleLogout} className="btn btn-danger btn-sm">Выйти</button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">Войти</Link>
              <Link to="/register" className="btn btn-success">Регистрация</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
