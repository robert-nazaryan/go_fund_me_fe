import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { campaignAPI } from '../services/api'
import './CreateCampaignPage.css'

function CreateCampaignPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goalAmount: '',
    category: 'MEDICAL',
    imageUrl: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const categories = [
    { value: 'MEDICAL', label: '🏥 Медицина' },
    { value: 'EDUCATION', label: '📚 Образование' },
    { value: 'EMERGENCY', label: '🚨 Срочная помощь' },
    { value: 'CREATIVE', label: '🎨 Творчество' },
    { value: 'CHARITY', label: '❤️ Благотворительность' },
    { value: 'OTHER', label: '📦 Другое' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await campaignAPI.create({
        ...formData,
        goalAmount: parseFloat(formData.goalAmount)
      })
      navigate(`/campaigns/${response.data.id}`)
    } catch (err) {
      setError('Ошибка при создании кампании')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="create-campaign-page">
      <div className="create-container">
        <h1>Создать кампанию</h1>
        <p>Расскажите о вашей цели</p>

        <form onSubmit={handleSubmit} className="campaign-form">
          <div className="form-group">
            <label className="form-label">Название *</label>
            <input
              type="text"
              name="title"
              className="form-input"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Помощь на лечение"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Описание *</label>
            <textarea
              name="description"
              className="form-textarea"
              value={formData.description}
              onChange={handleChange}
              required
              rows="8"
              placeholder="Подробно опишите вашу ситуацию..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Целевая сумма (₽) *</label>
              <input
                type="number"
                name="goalAmount"
                className="form-input"
                value={formData.goalAmount}
                onChange={handleChange}
                required
                min="1"
                placeholder="50000"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Категория *</label>
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
            <label className="form-label">URL изображения</label>
            <input
              type="url"
              name="imageUrl"
              className="form-input"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="form-actions">
            <button type="button" className="btn" onClick={() => navigate('/')}>
              Отмена
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Создание...' : 'Создать кампанию'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCampaignPage
