import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { campaignAPI, donationAPI, paymentAPI } from '../services/api';
import { Campaign, Donation, Card } from '../types';
import { useLanguage } from '../context/LanguageContext';
import './CampaignDetailsPage.css';

function CampaignDetailsPage() {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const quickAmounts = [500, 1000, 2500, 5000, 10000];

  useEffect(() => {
    loadCampaignDetails();
    loadCards();
  }, [id]);

  const loadCards = async () => {
    try {
      const res = await paymentAPI.getCards();
      setCards(res.data);
      if (res.data.length > 0) setSelectedCardId(res.data[0].id);
    } catch (error) {
      console.error('Error loading cards:', error);
    }
  };

  const loadCampaignDetails = async () => {
    try {
      const [campaignRes, donationsRes] = await Promise.all([
        campaignAPI.getById(Number(id)),
        donationAPI.getByCampaign(Number(id))
      ]);
      console.log("BACKEND coverImage:", campaignRes.data.coverImage);
      console.log("BACKEND galleryImages:", campaignRes.data.galleryImages);
      setCampaign(campaignRes.data);
      setDonations(donationsRes.data);
      if (campaignRes.data.coverImage) {
        console.log("SET selectedImage:", campaignRes.data.coverImage);
        setSelectedImage(campaignRes.data.coverImage);
      }
    } catch (error) {
      console.error('Error loading campaign:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString());
  };

  const showError = (message: string) => {
    setErrorMessage(message);
    setShowErrorModal(true);
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();

    const donationAmount = parseFloat(amount);

    if (isNaN(donationAmount) || donationAmount <= 0) {
      showError(t.campaignDetails.invalidAmount);
      return;
    }

    if (!selectedCardId) {
      showError('Пожалуйста, выберите карту для оплаты. Добавьте карту в профиле.');
      return;
    }

    setIsProcessing(true);

    try {
      await donationAPI.create({
        campaignId: Number(id),
        amount: donationAmount,
        cardId: selectedCardId,
        message: message || undefined,
        isAnonymous
      });

      // Показываем успех
      showError(t.campaignDetails.donationSuccess);

      // Очищаем форму
      setAmount('');
      setMessage('');
      setIsAnonymous(false);

      // Перезагружаем данные
      loadCampaignDetails();
    } catch (error: any) {
      // Обработка различных типов ошибок от backend
      const errorMsg = error.response?.data?.message || t.campaignDetails.donationError;
      showError(errorMsg);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadDocument = () => {
    if (campaign?.documentUrl) {
      window.open(campaign.documentUrl, '_blank');
    }
  };

  if (loading) return <div className="loading">{t.common.loading}</div>;
  if (!campaign) return <div className="error">{t.campaignDetails.notFound}</div>;

  const categoryNames: Record<string, string> = {
    'MEDICAL': t.campaign.categories.MEDICAL,
    'EDUCATION': t.campaign.categories.EDUCATION,
    'EMERGENCY': t.campaign.categories.EMERGENCY,
    'CREATIVE': t.campaign.categories.CREATIVE,
    'CHARITY': t.campaign.categories.CHARITY,
    'OTHER': t.campaign.categories.OTHER
  };

  return (
      <div className="campaign-details-page">
        {/* Модальное окно для ошибок и уведомлений */}
        {showErrorModal && (
            <div className="modal-overlay" onClick={() => setShowErrorModal(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-icon">
                  {errorMessage === t.campaignDetails.donationSuccess ? '✅' : '⚠️'}
                </div>
                <h3 className="modal-title">
                  {errorMessage === t.campaignDetails.donationSuccess
                      ? t.campaignDetails.successTitle
                      : t.campaignDetails.errorTitle}
                </h3>
                <p className="modal-message">{errorMessage}</p>
                <button
                    className="modal-button"
                    onClick={() => setShowErrorModal(false)}
                >
                  {t.campaignDetails.modalClose}
                </button>
              </div>
            </div>
        )}

        <div className="details-container">
          <div className="details-left">
            <div className="image-section">
              {selectedImage && (
                  <img
                      src={selectedImage}
                      alt={campaign.title}
                      className="detail-image"
                  />
              )}

              {campaign.galleryImages && campaign.galleryImages.length > 0 && (
                  <div className="gallery-section">
                    <h3 className="gallery-title">📸 {t.campaignDetails.gallery}</h3>
                    <div className="gallery-grid">
                      <div
                          className={`gallery-item ${selectedImage === campaign.coverImage ? 'active' : ''}`}
                          onClick={() => setSelectedImage(campaign.coverImage || '')}
                      >
                        <img
                            src={campaign.coverImage}
                            alt="Cover"
                        />
                        <div className="gallery-item-overlay">
                          <span className="gallery-item-label">{t.campaignDetails.cover}</span>
                        </div>
                      </div>

                      {campaign.galleryImages.map((imgPath, index) => (
                          <div
                              key={index}
                              className={`gallery-item ${selectedImage === imgPath ? 'active' : ''}`}
                              onClick={() => setSelectedImage(imgPath)}
                          >
                            <img
                                src={imgPath}
                                alt={`Gallery ${index + 1}`}
                            />
                            <div className="gallery-item-overlay">
                              <span className="gallery-item-label">{index + 1}</span>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
              )}
            </div>

            <div className="detail-card">
              <span className="detail-category">{categoryNames[campaign.category]}</span>
              <h1 className="detail-title">{campaign.title}</h1>

              <div className="detail-author">
                <span className="author-icon">👤</span>
                <span>{t.campaignDetails.author}: <strong>{campaign.userFullName}</strong></span>
              </div>

              <div className="detail-progress">
                <div className="progress-bar">
                  <div
                      className="progress-fill"
                      style={{ width: `${Math.min(campaign.progressPercentage, 100)}%` }}
                  />
                </div>
                <div className="progress-stats">
                  <div className="stat">
                    <strong>{campaign.currentAmount.toFixed(0)} ֏</strong>
                    <span>{t.campaignDetails.raised} {campaign.goalAmount.toFixed(0)} ֏</span>
                  </div>
                  <div className="stat">
                    <strong>{campaign.progressPercentage.toFixed(0)}%</strong>
                    <span>{t.campaignDetails.funded}</span>
                  </div>
                </div>
              </div>

              {campaign.documentUrl && (
                  <div className="detail-section">
                    <button
                        onClick={handleDownloadDocument}
                        className="btn btn-primary"
                        style={{ width: '100%', marginBottom: '20px' }}
                    >
                      📄 {t.campaignDetails.downloadDocument}
                    </button>
                  </div>
              )}

              <div className="detail-section">
                <h2>{t.campaignDetails.description}</h2>
                <p className="detail-description">{campaign.description}</p>
              </div>
            </div>
          </div>

          <div className="details-right">
            <div className="support-card">
              <h2>{t.campaignDetails.support}</h2>
              <form onSubmit={handleDonate} className="donate-form">
                <div className="form-group">
                  <label>{t.campaignDetails.quickAmount}</label>
                  <div className="quick-amounts">
                    {quickAmounts.map((quickAmount) => (
                        <button
                            key={quickAmount}
                            type="button"
                            className={`quick-amount-btn ${amount === quickAmount.toString() ? 'active' : ''}`}
                            onClick={() => handleQuickAmount(quickAmount)}
                            disabled={isProcessing}
                        >
                          {quickAmount.toLocaleString()} ֏
                        </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>{t.campaignDetails.customAmount}</label>
                  <div className="amount-input-wrapper">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        min="1"
                        placeholder="5000"
                        className="form-input"
                        disabled={isProcessing}
                    />
                    <span className="currency-symbol">֏</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>{t.campaignDetails.message}</label>
                  <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder={t.campaignDetails.messagePlaceholder}
                      className="form-textarea"
                      disabled={isProcessing}
                  />
                </div>

                <div className="form-group">
                  <label>Карта для оплаты</label>
                  {cards.length === 0 ? (
                      <div className="no-card-warning">
                        У вас нет сохранённых карт.{' '}
                        <Link to="/profile">Добавьте карту в профиле</Link>
                      </div>
                  ) : (
                      <select
                          className="form-input"
                          value={selectedCardId ?? ''}
                          onChange={e => setSelectedCardId(Number(e.target.value))}
                          disabled={isProcessing}
                      >
                        {cards.map(card => (
                            <option key={card.id} value={card.id}>
                              {card.cardType} •••• {card.last4} — {card.cardHolder}
                            </option>
                        ))}
                      </select>
                  )}
                </div>

                <div className="form-checkbox">
                  <input
                      type="checkbox"
                      id="anonymous"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      disabled={isProcessing}
                  />
                  <label htmlFor="anonymous">{t.campaignDetails.anonymous}</label>
                </div>

                <button
                    type="submit"
                    className="btn btn-donate"
                    disabled={isProcessing || cards.length === 0}
                >
                  {isProcessing ? (
                      <>
                        <span className="spinner"></span>
                        {t.campaignDetails.processing}
                      </>
                  ) : (
                      <>{t.campaignDetails.donate}</>
                  )}
                </button>
              </form>
            </div>

            <div className="donations-card">
              <h2>{t.campaignDetails.donations} ({donations.length})</h2>
              {donations.length === 0 ? (
                  <p className="no-donations">{t.campaignDetails.noDonations}</p>
              ) : (
                  <div className="donations-list">
                    {donations.map(donation => (
                        <div key={donation.id} className="donation-item">
                          <div className="donation-header">
                      <span className="donation-author">
                        {donation.isAnonymous ? t.campaignDetails.anonymousDonor : donation.donorName}
                      </span>
                            <span className="donation-amount">{donation.amount.toFixed(0)} ֏</span>
                          </div>
                          {donation.message && (
                              <p className="donation-message">{donation.message}</p>
                          )}
                          <span className="donation-date">
                      {new Date(donation.createdAt).toLocaleDateString()}
                    </span>
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