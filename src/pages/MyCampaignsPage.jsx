import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { campaignAPI } from '../services/api'
import CampaignCard from '../components/CampaignCard'
import './MyCampaignsPage.css'

function MyCampaignsPage() {
  const [campaigns, setCampaigns] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMyCampaigns()
  }, [])

  const loadMyCampaigns = async () => {
    try {
      const response = await campaignAPI.getMyCampaigns()
      setCampaigns(response.data)
    } catch (error) {
      console.error('Error loading campaigns:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Удалить кампанию?')) return

    try {
      await campaignAPI.delete(id)
      setCampaigns(campaigns.filter(c => c.id !== id))
      alert('Кампания удалена')
    } catch (error) {
      alert('Ошибка при удалении')
    }
  }

  if (loading) return <div className="loading">Загрузка...</div>

  return (
    <div className="my-campaigns-page">
      <div className="page-header">
        <h1>Мои кампании</h1>
        <Link to="/create-campaign" className="btn btn-primary">
          + Создать кампанию
        </Link>
      </div>

      {campaigns.length === 0 ? (
        <div className="empty-state">
          <p>У вас пока нет кампаний</p>
          <Link to="/create-campaign" className="btn btn-primary">
            Создать первую кампанию
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
                  Просмотр
                </Link>
                <button 
                  onClick={() => handleDelete(campaign.id)}
                  className="btn btn-danger btn-sm"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyCampaignsPage
