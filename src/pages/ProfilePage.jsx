import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { donationAPI } from '../services/api'
import './ProfilePage.css'

function ProfilePage() {
  const { user } = useAuth()
  const [donations, setDonations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDonations()
  }, [])

  const loadDonations = async () => {
    try {
      const response = await donationAPI.getMyDonations()
      setDonations(response.data)
    } catch (error) {
      console.error('Error loading donations:', error)
    } finally {
      setLoading(false)
    }
  }

  const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0)

  if (loading) return <div className="loading">Загрузка...</div>

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header card">
          <div className="avatar">
            {user?.fullName?.charAt(0).toUpperCase()}
          </div>
          <div className="user-info">
            <h1>{user?.fullName}</h1>
            <p>{user?.email}</p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-value">{user?.virtualBalance?.toFixed(2)} ₽</span>
                <span className="stat-label">Баланс</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{totalDonated.toFixed(2)} ₽</span>
                <span className="stat-label">Всего пожертвовано</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{donations.length}</span>
                <span className="stat-label">Донатов</span>
              </div>
            </div>
          </div>
        </div>

        <div className="donations-history card">
          <h2>История донатов</h2>
          {donations.length === 0 ? (
            <p className="no-donations">Вы еще не делали донатов</p>
          ) : (
            <div className="donations-table">
              {donations.map(donation => (
                <div key={donation.id} className="donation-row">
                  <div className="donation-info">
                    <strong>{donation.campaignTitle}</strong>
                    {donation.message && <p className="donation-message">{donation.message}</p>}
                    <span className="donation-date">
                      {new Date(donation.createdAt).toLocaleDateString('ru-RU')}
                    </span>
                  </div>
                  <div className="donation-amount">
                    {donation.amount.toFixed(0)} ₽
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
