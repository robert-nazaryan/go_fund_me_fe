import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { donationAPI, paymentAPI } from '../services/api';
import { Donation, Card } from '../types';
import './ProfilePage.css';

function ProfilePage() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  // Add card form state
  const [showAddCard, setShowAddCard] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardError, setCardError] = useState('');
  const [cardLoading, setCardLoading] = useState(false);

  useEffect(() => {
    Promise.all([loadDonations(), loadCards()]).finally(() => setLoading(false));
  }, []);

  const loadDonations = async () => {
    try {
      const response = await donationAPI.getMyDonations();
      setDonations(response.data);
    } catch (error) {
      console.error('Error loading donations:', error);
    }
  };

  const loadCards = async () => {
    try {
      const response = await paymentAPI.getCards();
      setCards(response.data);
    } catch (error) {
      console.error('Error loading cards:', error);
    }
  };

  const handleAddCard = async (e: React.FormEvent) => {
    e.preventDefault();
    setCardError('');

    const cleaned = cardNumber.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cleaned)) {
      setCardError('Номер карты должен содержать 16 цифр');
      return;
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      setCardError('Формат даты: MM/YY');
      return;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      setCardError('CVV должен содержать 3-4 цифры');
      return;
    }

    setCardLoading(true);
    try {
      await paymentAPI.addCard({ cardNumber: cleaned, cardHolder, expiryDate, cvv });
      await loadCards();
      setShowAddCard(false);
      setCardNumber('');
      setCardHolder('');
      setExpiryDate('');
      setCvv('');
    } catch (err: any) {
      setCardError(err.response?.data?.message || 'Ошибка при добавлении карты');
    } finally {
      setCardLoading(false);
    }
  };

  const handleDeleteCard = async (cardId: number) => {
    try {
      await paymentAPI.deleteCard(cardId);
      setCards(prev => prev.filter(c => c.id !== cardId));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const getCardIcon = (cardType: string) => {
    if (cardType === 'VISA') return '💳 VISA';
    if (cardType === 'MASTERCARD') return '💳 MC';
    if (cardType === 'AMEX') return '💳 AMEX';
    return '💳';
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '').substring(0, 16);
    return cleaned.replace(/(.{4})/g, '$1 ').trim();
  };

  const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);

  if (loading) return <div className="loading">{t.common.loading}</div>;

  return (
      <div className="profile-page">
        <div className="profile-container">
          {/* Заголовок профиля */}
          <div className="profile-header card">
            <div className="avatar">
              {user?.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="user-info">
              <h1>{user?.fullName}</h1>
              <p>{user?.email}</p>
              <div className="stats" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <div className="stat-item">
                  <span className="stat-value">{totalDonated.toFixed(0)} ֏</span>
                  <span className="stat-label">{t.profile.totalDonated}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{donations.length}</span>
                  <span className="stat-label">{t.profile.donationsCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Мои карты */}
          <div className="donations-history card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ margin: 0 }}>💳 Мои карты</h2>
              <button className="btn btn-primary btn-sm" onClick={() => { setShowAddCard(!showAddCard); setCardError(''); }}>
                {showAddCard ? 'Отмена' : '+ Добавить карту'}
              </button>
            </div>

            {showAddCard && (
                <form onSubmit={handleAddCard} className="card-add-form">
                  {cardError && <div className="card-error">{cardError}</div>}
                  <div className="card-form-grid">
                    <div className="form-group">
                      <label>Номер карты</label>
                      <input
                          type="text"
                          className="form-input"
                          placeholder="0000 0000 0000 0000"
                          value={cardNumber}
                          onChange={e => setCardNumber(formatCardNumber(e.target.value))}
                          maxLength={19}
                          required
                      />
                    </div>
                    <div className="form-group">
                      <label>Имя держателя</label>
                      <input
                          type="text"
                          className="form-input"
                          placeholder="IVAN IVANOV"
                          value={cardHolder}
                          onChange={e => setCardHolder(e.target.value.toUpperCase())}
                          required
                      />
                    </div>
                    <div className="form-group">
                      <label>Срок действия</label>
                      <input
                          type="text"
                          className="form-input"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={e => {
                            let v = e.target.value.replace(/\D/g, '');
                            if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2, 4);
                            setExpiryDate(v);
                          }}
                          maxLength={5}
                          required
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                          type="password"
                          className="form-input"
                          placeholder="•••"
                          value={cvv}
                          onChange={e => setCvv(e.target.value.replace(/\D/g, '').substring(0, 4))}
                          maxLength={4}
                          required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={cardLoading}>
                    {cardLoading ? 'Сохранение...' : 'Сохранить карту'}
                  </button>
                </form>
            )}

            {cards.length === 0 && !showAddCard ? (
                <p className="no-donations">Нет сохранённых карт. Добавьте карту для совершения донатов.</p>
            ) : (
                <div className="cards-list">
                  {cards.map(card => (
                      <div key={card.id} className="card-item">
                        <div className="card-item-info">
                          <span className="card-type">{getCardIcon(card.cardType)}</span>
                          <span className="card-number">•••• •••• •••• {card.last4}</span>
                          <span className="card-holder">{card.cardHolder}</span>
                          <span className="card-expiry">{card.expiryDate}</span>
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDeleteCard(card.id)}
                        >
                          Удалить
                        </button>
                      </div>
                  ))}
                </div>
            )}
          </div>

          {/* История донатов */}
          <div className="donations-history card">
            <h2>{t.profile.history}</h2>
            {donations.length === 0 ? (
                <p className="no-donations">{t.profile.noDonations}</p>
            ) : (
                <div className="donations-table">
                  {donations.map(donation => (
                      <div key={donation.id} className="donation-row">
                        <div className="donation-info">
                          <strong>{donation.campaignTitle}</strong>
                          {donation.message && <p className="donation-message">{donation.message}</p>}
                          {donation.transactionId && (
                              <span className="donation-txn">TXN: {donation.transactionId}</span>
                          )}
                          <span className="donation-date">
                            {new Date(donation.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="donation-amount">
                          {donation.amount.toFixed(0)} ֏
                        </div>
                      </div>
                  ))}
                </div>
            )}
          </div>
        </div>
      </div>
  );
}

export default ProfilePage;
