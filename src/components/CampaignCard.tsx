import { useNavigate } from 'react-router-dom';
import { Campaign, CampaignCategory } from '../types';
import './CampaignCard.css';
import { useLanguage } from "../context/LanguageContext.tsx";

interface CampaignCardProps {
  campaign: Campaign;
}

function CampaignCard({ campaign }: CampaignCardProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const progressPercentage = campaign.progressPercentage || 0;

  const categoryNames: Record<CampaignCategory, string> = {
    [CampaignCategory.MEDICAL]: t.campaign.categories.MEDICAL,
    [CampaignCategory.EDUCATION]: t.campaign.categories.EDUCATION,
    [CampaignCategory.EMERGENCY]: t.campaign.categories.EMERGENCY,
    [CampaignCategory.CREATIVE]: t.campaign.categories.CREATIVE,
    [CampaignCategory.CHARITY]: t.campaign.categories.CHARITY,
    [CampaignCategory.OTHER]: t.campaign.categories.OTHER
  };

  const handleClick = () => {
    navigate(`/campaigns/${campaign.id}`);
  };

  return (
      <div className="campaign-card" onClick={handleClick}>
        <div className="campaign-image-wrapper">
          <img
              src={campaign.coverImage ? `http://localhost:8080${campaign.coverImage}` : 'https://via.placeholder.com/400x300?text=No+Image'}
              alt={campaign.title}
              className="campaign-image"
          />
        </div>
        <div className="campaign-content">
          <span className="campaign-category">{categoryNames[campaign.category]}</span>
          <h3 className="campaign-title">{campaign.title}</h3>
          <p className="campaign-description">{campaign.description.substring(0, 100)}...</p>

          <div className="campaign-progress">
            <div className="progress-bar">
              <div
                  className="progress-fill"
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>
            <div className="progress-info">
            <span className="progress-amount">
              <strong>{campaign.currentAmount.toFixed(0)} ֏</strong> {t.campaign.of} {campaign.goalAmount.toFixed(0)} ֏
            </span>
              <span className="progress-percentage">{progressPercentage.toFixed(0)}%</span>
            </div>
          </div>

          <div className="campaign-footer">
            <span className="campaign-author">{campaign.userFullName}</span>
          </div>
        </div>
      </div>
  );
}

export default CampaignCard;