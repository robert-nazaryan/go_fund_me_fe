import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { campaignAPI } from '../services/api';
import CampaignCard from '../components/CampaignCard';
import { Campaign } from '../types';
import { useLanguage } from '../context/LanguageContext';
import './MyCampaignsPage.css';

function MyCampaignsPage() {
  const { t } = useLanguage();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMyCampaigns();
  }, []);

  const loadMyCampaigns = async () => {
    try {
      const response = await campaignAPI.getMyCampaigns();
      setCampaigns(response.data);
    } catch (error) {
      console.error('Error loading campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm(t.myCampaigns.confirmDelete)) return;

    try {
      await campaignAPI.delete(id);
      setCampaigns(campaigns.filter(c => c.id !== id));
      alert(t.myCampaigns.deleted);
    } catch (error) {
      alert(t.myCampaigns.deleteError);
    }
  };

  if (loading) return <div className="loading">{t.common.loading}</div>;

  return (
      <div className="my-campaigns-page">
        <div className="page-header">
          <h1>{t.myCampaigns.title}</h1>
          <Link to="/create-campaign" className="btn btn-primary">
            + {t.myCampaigns.create}
          </Link>
        </div>

        {campaigns.length === 0 ? (
            <div className="empty-state">
              <p>{t.myCampaigns.empty}</p>
              <Link to="/create-campaign" className="btn btn-primary">
                {t.myCampaigns.createFirst}
              </Link>
            </div>
        ) : (
            <div className="campaigns-grid">
              {campaigns.map(campaign => (
                  <div key={campaign.id} className="campaign-wrapper">
                    <CampaignCard campaign={campaign} />
                    <div className="campaign-actions">
                      <Link
                          to={`/campaigns/${campaign.id}`}
                          className="btn btn-primary btn-sm"
                      >
                        {t.myCampaigns.view}
                      </Link>
                      <button
                          onClick={() => handleDelete(campaign.id)}
                          className="btn btn-danger btn-sm"
                      >
                        {t.myCampaigns.delete}
                      </button>
                    </div>
                  </div>
              ))}
            </div>
        )}
      </div>
  );
}

export default MyCampaignsPage;
