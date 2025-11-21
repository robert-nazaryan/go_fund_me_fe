import axios from 'axios'

const API_URL = 'http://localhost:8080/api'

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me')
}

// Campaign API
export const campaignAPI = {
  getAll: () => api.get('/campaigns'),
  getById: (id) => api.get(`/campaigns/${id}`),
  getByStatus: (status) => api.get(`/campaigns/status/${status}`),
  getByCategory: (category) => api.get(`/campaigns/category/${category}`),
  getMyCampaigns: () => api.get('/campaigns/my'),
  create: (campaignData) => api.post('/campaigns', campaignData),
  update: (id, campaignData) => api.put(`/campaigns/${id}`, campaignData),
  delete: (id) => api.delete(`/campaigns/${id}`)
}

// Donation API
export const donationAPI = {
  create: (donationData) => api.post('/donations', donationData),
  getByCampaign: (campaignId) => api.get(`/donations/campaign/${campaignId}`),
  getMyDonations: () => api.get('/donations/my')
}

export default api
