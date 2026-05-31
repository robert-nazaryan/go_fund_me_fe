import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './HomePage.css';

function HomePage() {
  const { t } = useLanguage();

  return (
      <div className="landing-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">{t.landing.heroTitle}</h1>
            <p className="hero-subtitle">{t.landing.heroSubtitle}</p>
            <div className="hero-actions">
              <Link to="/campaigns" className="btn btn-primary btn-large">
                {t.landing.exploreCampaigns}
              </Link>
              <Link to="/create-campaign" className="btn btn-outline btn-large">
                {t.landing.startCampaign}
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">🏥</div>
              <div className="card-text">{t.campaign.categories.MEDICAL}</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">📚</div>
              <div className="card-text">{t.campaign.categories.EDUCATION}</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">❤️</div>
              <div className="card-text">{t.campaign.categories.CHARITY}</div>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <h2 className="section-title">{t.landing.categories}</h2>
          <div className="categories-grid">
            <Link to="/campaigns?category=MEDICAL" className="category-card">
              <div className="category-icon">🏥</div>
              <div className="category-name">{t.campaign.categories.MEDICAL}</div>
            </Link>
            <Link to="/campaigns?category=EDUCATION" className="category-card">
              <div className="category-icon">📚</div>
              <div className="category-name">{t.campaign.categories.EDUCATION}</div>
            </Link>
            <Link to="/campaigns?category=EMERGENCY" className="category-card">
              <div className="category-icon">🚨</div>
              <div className="category-name">{t.campaign.categories.EMERGENCY}</div>
            </Link>
            <Link to="/campaigns?category=CREATIVE" className="category-card">
              <div className="category-icon">🎨</div>
              <div className="category-name">{t.campaign.categories.CREATIVE}</div>
            </Link>
            <Link to="/campaigns?category=CHARITY" className="category-card">
              <div className="category-icon">❤️</div>
              <div className="category-name">{t.campaign.categories.CHARITY}</div>
            </Link>
            <Link to="/campaigns?category=OTHER" className="category-card">
              <div className="category-icon">📦</div>
              <div className="category-name">{t.campaign.categories.OTHER}</div>
            </Link>
          </div>
        </section>

        <section className="cta-section">
          <h2 className="cta-title">{t.landing.ctaTitle}</h2>
          <p className="cta-subtitle">{t.landing.ctaSubtitle}</p>
          <Link to="/create-campaign" className="btn btn-primary btn-large">
            {t.landing.ctaButton}
          </Link>
        </section>
      </div>
  );
}

export default HomePage;
