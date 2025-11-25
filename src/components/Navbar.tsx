import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';
import LanguageSwitcher from "../LanguageSwitcher.tsx";
import {useLanguage} from "../context/LanguageContext.tsx";

function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            💰 CrowdFund
          </Link>

          <div className="navbar-menu">
            <Link to="/" className="navbar-link">{t.navbar.home}</Link>

            {isAuthenticated ? (
                <>
                  <Link to="/create-campaign" className="navbar-link">{t.navbar.createCampaign}</Link>
                  <Link to="/my-campaigns" className="navbar-link">{t.navbar.myCampaigns}</Link>
                  <Link to="/profile" className="navbar-link">{t.navbar.profile}</Link>
                  <div className="navbar-user">
                    <span className="navbar-balance">💵 {user?.virtualBalance.toFixed(2)} ₽</span>
                    <span className="navbar-username">{user?.fullName}</span>
                    <LanguageSwitcher />
                    <button onClick={handleLogout} className="btn btn-danger btn-sm">{t.navbar.logout}</button>
                  </div>
                </>
            ) : (
                <>
                  <LanguageSwitcher />
                  <Link to="/login" className="btn btn-primary">{t.navbar.login}</Link>
                  <Link to="/register" className="btn btn-success">{t.navbar.register}</Link>
                </>
            )}
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
