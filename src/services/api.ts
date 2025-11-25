import axios, { AxiosInstance } from 'axios';
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
  Campaign,
  CampaignCreateRequest,
  CampaignUpdateRequest,
  CampaignStatus,
  CampaignCategory,
  Donation,
  DonationCreateRequest
} from '../types';

const API_URL = 'http://localhost:8080/api';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (userData: RegisterRequest) => 
    api.post<AuthResponse>('/auth/register', userData),
  login: (credentials: LoginRequest) => 
    api.post<AuthResponse>('/auth/login', credentials),
  getCurrentUser: () => 
    api.get<User>('/auth/me')
};

export const campaignAPI = {
  getAll: () => 
    api.get<Campaign[]>('/campaigns'),
  getById: (id: number) => 
    api.get<Campaign>(`/campaigns/${id}`),
  getByStatus: (status: CampaignStatus) => 
    api.get<Campaign[]>(`/campaigns/status/${status}`),
  getByCategory: (category: CampaignCategory) => 
    api.get<Campaign[]>(`/campaigns/category/${category}`),
  getMyCampaigns: () => 
    api.get<Campaign[]>('/campaigns/my'),
  create: (campaignData: CampaignCreateRequest) => 
    api.post<Campaign>('/campaigns', campaignData),
  update: (id: number, campaignData: CampaignUpdateRequest) => 
    api.put<Campaign>(`/campaigns/${id}`, campaignData),
  delete: (id: number) => 
    api.delete<void>(`/campaigns/${id}`)
};

export const donationAPI = {
  create: (donationData: DonationCreateRequest) => 
    api.post<Donation>('/donations', donationData),
  getByCampaign: (campaignId: number) => 
    api.get<Donation[]>(`/donations/campaign/${campaignId}`),
  getMyDonations: () => 
    api.get<Donation[]>('/donations/my')
};

export default api;
