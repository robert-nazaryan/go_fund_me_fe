import { useState, useEffect } from 'react';
import { campaignAPI } from '../services/api';
import CampaignCard from '../components/CampaignCard';
import { Campaign, CampaignCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import './HomePage.css';

type SortOption = 'default' | 'name_asc' | 'name_desc' | 'date_newest' | 'date_oldest' | 'goal_low' | 'goal_high';

function HomePage() {
  const { t } = useLanguage();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CampaignCategory | ''>('');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  useEffect(() => {
    loadCampaigns();
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (campaigns.length > 0) {
      loadCampaigns();
    }
  }, [sortBy]);

  const loadCampaigns = async () => {
    try {
      setLoading(true);
      const response = await campaignAPI.search(
          searchQuery || undefined,
          selectedCategory || undefined,
          undefined
      );
      let sortedCampaigns = [...response.data];

      switch (sortBy) {
        case 'default':
          // ничего не делаем, оставляем порядок от бэка
          break;
        case 'name_asc':
          sortedCampaigns.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'name_desc':
          sortedCampaigns.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case 'date_newest':
          sortedCampaigns.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case 'date_oldest':
          sortedCampaigns.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
          break;
        case 'goal_low':
          sortedCampaigns.sort((a, b) => a.goalAmount - b.goalAmount);
          break;
        case 'goal_high':
          sortedCampaigns.sort((a, b) => b.goalAmount - a.goalAmount);
          break;
      }

      setCampaigns(sortedCampaigns);
    } catch (error) {
      console.error('Error loading campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchTerm(searchQuery);
    }
  };

  if (loading) return <div className="loading">{t.common.loading}</div>;

  return (
      <div className="home-page">
        <div className="search-filters">
          <div className="search-bar">
            <input
                type="text"
                placeholder={t.home.search}
                value={searchQuery}
                onKeyDown={handleSearch}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="filters">
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as CampaignCategory | '')}
                className="filter-select"
            >
              <option value="">{t.home.allCategories}</option>
              {Object.values(CampaignCategory).map(category => (
                  <option key={category} value={category}>
                    {t.campaign.categories[category]}
                  </option>
              ))}
            </select>

            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="filter-select"
            >
              <option value="default">{t.home.sortByDefault}</option>
              <option value="name_asc">{t.home.sortByNameAsc}</option>
              <option value="name_desc">{t.home.sortByNameDesc}</option>
              <option value="date_newest">{t.home.sortByNewest}</option>
              <option value="date_oldest">{t.home.sortByOldest}</option>
              <option value="goal_low">{t.home.sortByGoalLow}</option>
              <option value="goal_high">{t.home.sortByGoalHigh}</option>
            </select>
          </div>
        </div>

        <div className="campaigns-grid">
          {campaigns.length === 0 ? (
              <div className="no-results">
                <p>{searchQuery || selectedCategory ? t.home.noResults : t.home.noCampaigns}</p>
              </div>
          ) : (
              campaigns.map(campaign => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
              ))
          )}
        </div>
      </div>
  );
}

export default HomePage;