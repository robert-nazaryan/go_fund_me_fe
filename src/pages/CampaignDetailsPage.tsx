import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { campaignAPI, donationAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Campaign, Donation, CampaignCategory } from '../types';
import './CampaignDetailsPage.css';

function CampaignDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [donationAmount, setDonationAmount] = useState('');
  const [donationMessage, setDonationMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donating, setDonating] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    try {
      const [campRes, donRes] = await Promise.all([
        campaignAPI.getById(Number(id)),
        donationAPI.getByCampaign(Number(id))
      ]);
      setCampaign(campRes.data);
      setDonations(donRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDonate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    setError('');
    setDonating(true);

    const amount = parseFloat(donationAmount);
    
    if (amount <= 0 || amount > (user?.virtualBalance || 0)) {
      setError('Проверьте сумму и баланс');
      setDonating(false);
      return;
    }

    try {
      await donationAPI.create({
        campaignId: Number(id),
        amount,
        message: donationMessage,
        isAnonymous
      });
      
      alert('Спасибо за поддержку!');
      window.location.reload();
    } catch (err) {
      setError('Ошибка при создании доната');
    } finally {
      setDonating(false);
    }
  };

  if (loading) return <div className="loading">Загрузка...</div>;
  if (!campaign) return <div>Кампания не найдена</div>;

  const categories: Record<CampaignCategory, string> = {
    [CampaignCategory.MEDICAL]: '🏥 Медицина',
    [CampaignCategory.EDUCATION]: '📚 Образование',
    [CampaignCategory.EMERGENCY]: '🚨 Срочная помощь',
    [CampaignCategory.CREATIVE]: '🎨 Творчество',
    [CampaignCategory.CHARITY]: '❤️ Благотворительность',
    [CampaignCategory.OTHER]: '📦 Другое'
  };

  return (
    <div className="campaign-details-page">
      <div className="details-container">
        <div className="main-content">
          {campaign.imageUrl && (
            <img src={campaign.imageUrl} alt={campaign.title} className="detail-image" />
          )}
          
          <div className="campaign-info">
            <span className="category">{categories[campaign.category]}</span>
            <h1>{campaign.title}</h1>
            <p className="author">Автор: {campaign.userFullName}</p>

            <div className="progress-section">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${Math.min(campaign.progressPercentage || 0, 100)}%` }}
                />
              </div>
              <div className="stats">
                <div>
                  <strong>{campaign.currentAmount.toFixed(0)} ₽</strong>
                  <span> из {campaign.goalAmount.toFixed(0)} ₽</span>
                </div>
                <div>{campaign.progressPercentage?.toFixed(0)}%</div>
              </div>
            </div>

            <div className="description">
              <h3>Описание</h3>
              <p>{campaign.description}</p>
            </div>
          </div>
        </div>

        <div className="sidebar">
          {campaign.status === 'ACTIVE' && (
            <div className="card">
              <h3>Поддержать</h3>
              {!isAuthenticated ? (
                <button className="btn btn-primary" onClick={() => navigate('/login')}>
                  Войти
                </button>
              ) : (
                <form onSubmit={handleDonate}>
                  <div className="form-group">
                    <label>Сумма (₽)</label>
                    <input
                      type="number"
                      className="form-input"
                      value={donationAmount}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setDonationAmount(e.target.value)}
                      required
                      min="1"
                    />
                    <small>Баланс: {user?.virtualBalance.toFixed(2)} ₽</small>
                  </div>

                  <div className="form-group">
                    <label>Сообщение</label>
                    <textarea
                      className="form-textarea"
                      value={donationMessage}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDonationMessage(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <label>
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setIsAnonymous(e.target.checked)}
                    />
                    {' '}Анонимно
                  </label>

                  {error && <div className="error-message">{error}</div>}

                  <button type="submit" className="btn btn-success" disabled={donating}>
                    {donating ? 'Обработка...' : '💰 Поддержать'}
                  </button>
                </form>
              )}
            </div>
          )}

          <div className="card">
            <h3>Донаты ({donations.length})</h3>
            {donations.length === 0 ? (
              <p>Пока нет донатов</p>
            ) : (
              <div className="donations-list">
                {donations.map(d => (
                  <div key={d.id} className="donation-item">
                    <div>
                      <strong>{d.donorName}</strong>
                      <span> {d.amount.toFixed(0)} ₽</span>
                    </div>
                    {d.message && <p>{d.message}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetailsPage;
