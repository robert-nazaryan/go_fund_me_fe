import { Link } from 'react-router-dom'
import './CampaignCard.css'

function CampaignCard({ campaign }) {
  const progressPercentage = campaign.progressPercentage || 0
  const categoryNames = {
    MEDICAL: '🏥 Медицина',
    EDUCATION: '📚 Образование',
    EMERGENCY: '🚨 Срочная помощь',
    CREATIVE: '🎨 Творчество',
    CHARITY: '❤️ Благотворительность',
    OTHER: '📦 Другое'
  }

  return (
    <div className="campaign-card">
      {campaign.imageUrl && (
        <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
      )}
      <div className="campaign-content">
        <span className="campaign-category">{categoryNames[campaign.category]}</span>
        <h3 className="campaign-title">{campaign.title}</h3>
        <p className="campaign-description">{campaign.description.substring(0, 100)}...</p>
        
        <div className="campaign-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="progress-info">
            <span className="progress-amount">
              <strong>{campaign.currentAmount.toFixed(0)} ₽</strong> из {campaign.goalAmount.toFixed(0)} ₽
            </span>
            <span className="progress-percentage">{progressPercentage.toFixed(0)}%</span>
          </div>
        </div>
        
        <div className="campaign-footer">
          <span className="campaign-author">Автор: {campaign.userFullName}</span>
          <Link to={`/campaigns/${campaign.id}`} className="btn btn-primary btn-sm">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CampaignCard
