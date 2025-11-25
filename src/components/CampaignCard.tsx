import { Link } from 'react-router-dom';
import { Campaign, CampaignCategory } from '../types';
import './CampaignCard.css';

interface CampaignCardProps {
  campaign: Campaign;
}

function CampaignCard({ campaign }: CampaignCardProps) {
  const progressPercentage = campaign.progressPercentage || 0;
  
  const categoryNames: Record<CampaignCategory, string> = {
    [CampaignCategory.MEDICAL]: '🏥 Медицина',
    [CampaignCategory.EDUCATION]: '📚 Образование',
    [CampaignCategory.EMERGENCY]: '🚨 Срочная помощь',
    [CampaignCategory.CREATIVE]: '🎨 Творчество',
    [CampaignCategory.CHARITY]: '❤️ Благотворительность',
    [CampaignCategory.OTHER]: '📦 Другое'
  };

  return (
    <div className="campaign-card">
      <div className="campaign-image-wrapper">
        <img 
          src={campaign.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'} 
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
              <strong>{campaign.currentAmount.toFixed(0)} ₽</strong> из {campaign.goalAmount.toFixed(0)} ₽
            </span>
            <span className="progress-percentage">{progressPercentage.toFixed(0)}%</span>
          </div>
        </div>
        
        <div className="campaign-footer">
          <span className="campaign-author">{campaign.userFullName}</span>
          <Link to={`/campaigns/${campaign.id}`} className="campaign-view-btn">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
