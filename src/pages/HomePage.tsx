import { useState, useEffect } from 'react';
import { campaignAPI } from '../services/api';
import CampaignCard from '../components/CampaignCard';
import { Campaign } from '../types';
import { useLanguage } from '../context/LanguageContext';
import './HomePage.css';

function HomePage() {
  const { t } = useLanguage();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    try {
      const response = await campaignAPI.getAll();
      setCampaigns(response.data);
    } catch (error) {
      console.error('Error loading campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">{t.common.loading}</div>;

  return (
      <div className="home-page">
        <div className="home-header">
          <h1>{t.home.title}</h1>
        </div>

        <div className="campaigns-grid">
          {campaigns.length === 0 ? (
              <p>{t.home.noCampaigns}</p>
          ) : (
              campaigns.map(campaign => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
              ))
          )}
        </div>
      </div>
  );
}

export default HomePage;