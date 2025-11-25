import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { campaignAPI } from '../services/api';
import { CampaignCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import './CreateCampaignPage.css';

interface FormData {
  title: string;
  description: string;
  goalAmount: string;
  category: CampaignCategory;
  imageUrl: string;
}

function CreateCampaignPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    goalAmount: '',
    category: CampaignCategory.MEDICAL,
    imageUrl: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    { value: CampaignCategory.MEDICAL, label: t.campaign.categories.MEDICAL },
    { value: CampaignCategory.EDUCATION, label: t.campaign.categories.EDUCATION },
    { value: CampaignCategory.EMERGENCY, label: t.campaign.categories.EMERGENCY },
    { value: CampaignCategory.CREATIVE, label: t.campaign.categories.CREATIVE },
    { value: CampaignCategory.CHARITY, label: t.campaign.categories.CHARITY },
    { value: CampaignCategory.OTHER, label: t.campaign.categories.OTHER }
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await campaignAPI.create({
        ...formData,
        goalAmount: parseFloat(formData.goalAmount)
      });
      navigate(`/campaigns/${response.data.id}`);
    } catch (err) {
      setError(t.createCampaign.error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="create-campaign-page">
        <div className="create-container">
          <h1>{t.createCampaign.title}</h1>
          <p>{t.createCampaign.subtitle}</p>

          <form onSubmit={handleSubmit} className="campaign-form">
            <div className="form-group">
              <label className="form-label">{t.createCampaign.nameLabel} *</label>
              <input
                  type="text"
                  name="title"
                  className="form-input"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder={t.createCampaign.namePlaceholder}
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t.createCampaign.descriptionLabel} *</label>
              <textarea
                  name="description"
                  className="form-textarea"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={8}
                  placeholder={t.createCampaign.descriptionPlaceholder}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{t.createCampaign.goalLabel} *</label>
                <input
                    type="number"
                    name="goalAmount"
                    className="form-input"
                    value={formData.goalAmount}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder={t.createCampaign.goalPlaceholder}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.createCampaign.categoryLabel} *</label>
                <select
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                >
                  {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{t.createCampaign.imageLabel}</label>
              <input
                  type="url"
                  name="imageUrl"
                  className="form-input"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder={t.createCampaign.imagePlaceholder}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="form-actions">
              <button type="button" className="btn" onClick={() => navigate('/')}>
                {t.createCampaign.cancel}
              </button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? t.createCampaign.creating : t.createCampaign.create}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default CreateCampaignPage;
