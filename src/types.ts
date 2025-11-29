// User types
export interface User {
  id: number;
  email: string;
  fullName: string;
  avatarUrl?: string;
  virtualBalance: number;
  createdAt: string;
}

// Campaign types
export enum CampaignCategory {
  MEDICAL = 'MEDICAL',
  EDUCATION = 'EDUCATION',
  EMERGENCY = 'EMERGENCY',
  CREATIVE = 'CREATIVE',
  CHARITY = 'CHARITY',
  OTHER = 'OTHER'
}

export enum CampaignStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface Campaign {
  id: number;
  title: string;
  description: string;
  goalAmount: number;
  currentAmount: number;
  coverImage?: string;
  galleryImages?: string[];
  category: CampaignCategory;
  status: CampaignStatus;
  deadline?: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  userFullName: string;
  donationsCount: number;
  progressPercentage: number;
}

export interface CampaignCreateRequest {
  title: string;
  description: string;
  goalAmount: number;
  imageUrl?: string;
  category: CampaignCategory;
  deadline?: string;
}

export interface CampaignUpdateRequest {
  title?: string;
  description?: string;
  goalAmount?: number;
  imageUrl?: string;
  category?: CampaignCategory;
  status?: CampaignStatus;
  deadline?: string;
}

// Donation types
export interface Donation {
  id: number;
  campaignId: number;
  campaignTitle: string;
  donorId: number;
  donorName: string;
  amount: number;
  message?: string;
  isAnonymous: boolean;
  createdAt: string;
}

export interface DonationCreateRequest {
  campaignId: number;
  amount: number;
  message?: string;
  isAnonymous?: boolean;
}

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  user: User;
}

// Context types
export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<AuthResponse>;
  register: (userData: RegisterRequest) => Promise<AuthResponse>;
  logout: () => void;
  isAuthenticated: boolean;
}
