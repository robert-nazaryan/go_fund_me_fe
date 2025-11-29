import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CampaignCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import './CreateCampaignPage.css';

function CreateCampaignPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goalAmount: '',
    category: CampaignCategory.MEDICAL,
  });

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
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

  const handleCoverImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError(t.createCampaign.fileTooLarge);
        return;
      }
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleGalleryImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length + galleryImages.length > 10) {
      setError(t.createCampaign.maxPhotos);
      return;
    }

    const validFiles = files.filter(file => {
      if (file.size > 5 * 1024 * 1024) {
        setError(t.createCampaign.fileTooLarge);
        return false;
      }
      return true;
    });

    setGalleryImages(prev => [...prev, ...validFiles]);

    const newPreviews = validFiles.map(file => URL.createObjectURL(file));
    setGalleryPreviews(prev => [...prev, ...newPreviews]);

    setError('');
  };

  const removeGalleryImage = (index: number) => {
    URL.revokeObjectURL(galleryPreviews[index]);
    setGalleryImages(prev => prev.filter((_, i) => i !== index));
    setGalleryPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const removeCoverImage = () => {
    if (coverPreview) {
      URL.revokeObjectURL(coverPreview);
    }
    setCoverImage(null);
    setCoverPreview('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!coverImage) {
      setError(t.createCampaign.coverRequired);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('goalAmount', formData.goalAmount);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('coverImage', coverImage);

      galleryImages.forEach(image => {
        formDataToSend.append('galleryImages', image);
      });

      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/campaigns', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Failed to create campaign');
      }

      const campaign = await response.json();
      navigate(`/campaigns/${campaign.id}`);
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
              <label className="form-label">
                {t.createCampaign.coverImageLabel} <span style={{color: '#e74c3c'}}>*</span>
              </label>
              <p style={{fontSize: '14px', color: '#7f8c8d', marginBottom: '12px'}}>
                {t.createCampaign.coverImageDesc}
              </p>

              <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverImageChange}
                  required
                  style={{
                    padding: '12px',
                    border: '2px dashed #e5e7eb',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: '#f8f9fa',
                    width: '100%'
                  }}
              />

              {coverPreview && (
                  <div style={{marginTop: '16px', position: 'relative', display: 'inline-block'}}>
                    <img
                        src={coverPreview}
                        alt="Cover preview"
                        style={{
                          maxWidth: '100%',
                          width: '400px',
                          height: '250px',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                    />
                    <button
                        type="button"
                        onClick={removeCoverImage}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          background: 'rgba(231,76,60,0.9)',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: '600'
                        }}
                    >
                      ✕ {t.createCampaign.remove}
                    </button>
                  </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {t.createCampaign.galleryLabel} <span style={{color: '#95a5a6', fontSize: '14px'}}>({t.createCampaign.optional})</span>
              </label>
              <p style={{fontSize: '14px', color: '#7f8c8d', marginBottom: '12px'}}>
                {t.createCampaign.galleryDesc}
              </p>

              <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryImagesChange}
                  disabled={galleryImages.length >= 10}
                  style={{
                    padding: '12px',
                    border: '2px dashed #e5e7eb',
                    borderRadius: '8px',
                    cursor: galleryImages.length >= 10 ? 'not-allowed' : 'pointer',
                    background: '#f8f9fa',
                    width: '100%',
                    opacity: galleryImages.length >= 10 ? 0.5 : 1
                  }}
              />

              {galleryImages.length > 0 && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                    gap: '16px',
                    marginTop: '16px'
                  }}>
                    {galleryPreviews.map((preview, index) => (
                        <div key={index} style={{
                          position: 'relative',
                          aspectRatio: '1',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}>
                          <img
                              src={preview}
                              alt={`Gallery ${index + 1}`}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                          />
                          <button
                              type="button"
                              onClick={() => removeGalleryImage(index)}
                              style={{
                                position: 'absolute',
                                top: '4px',
                                right: '4px',
                                background: 'rgba(231,76,60,0.9)',
                                color: 'white',
                                border: 'none',
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                fontSize: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                          >
                            ✕
                          </button>
                          <span style={{
                            position: 'absolute',
                            bottom: '4px',
                            left: '4px',
                            background: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}>
                      {index + 1}
                    </span>
                        </div>
                    ))}
                  </div>
              )}

              {galleryImages.length > 0 && (
                  <p style={{
                    marginTop: '12px',
                    fontSize: '14px',
                    color: 'var(--primary-color)',
                    fontWeight: '600'
                  }}>
                    {galleryImages.length} / 10 {t.createCampaign.photos}
                  </p>
              )}
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
