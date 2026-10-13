import React, { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { curatedResources } from '../data/resources';

interface ResourcesPageProps {
  navigate: (route: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Junior' | 'Senior' | 'Both'>('All');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  // Extract unique topics
  const allTopics = Array.from(new Set(curatedResources.flatMap((r) => r.topics))).sort();

  const filteredResources = curatedResources.filter((res) => {
    // Category filter
    if (selectedCategory !== 'All' && res.category !== selectedCategory && res.category !== 'Both') {
      return false;
    }
    // Topic filter
    if (selectedTopic !== 'All' && !res.topics.includes(selectedTopic)) {
      return false;
    }
    // Search query
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      const matchTitle = res.title.toLowerCase().includes(q);
      const matchDesc = res.description.toLowerCase().includes(q);
      const matchSource = res.source.toLowerCase().includes(q);
      const matchTopic = res.topics.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchSource || matchTopic;
    }
    return true;
  });

  return (
    <div className="resources-page-view py-main">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav mb-4" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Resources</span>
        </nav>

        <div className="page-header">
          <span className="badge badge-senior">Curated Science Library</span>
          <h1 className="page-title">Astronomy References & Learning Library</h1>
          <p className="page-subtitle">
            Explore trusted external educational sources from NASA, IOAA, and scientific encyclopaedias. Filter by study level or topic to find deep-dive reading materials.
          </p>
        </div>

        {/* External Reference Notice */}
        <div className="alert-box alert-info mt-6">
          <ExternalLink size={20} className="text-cyan" />
          <p>
            <strong>External Reference Notice:</strong> All curated links open external educational portals (such as NASA Science, NASA Space Place, IOAA, and Wikipedia) in new browser tabs for deeper exploration.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="resources-filter-card card mt-6">
          <div className="filter-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="search"
              className="resource-search-input"
              placeholder="Filter by keyword (e.g. Kepler, transit, solar system)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Filter resources by keyword"
            />
          </div>

          <div className="filter-options-row mt-4">
            {/* Category Filter */}
            <div className="filter-group">
              <span className="filter-group-label">Level:</span>
              <div className="filter-chips">
                {(['All', 'Junior', 'Senior', 'Both'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Filter */}
            <div className="filter-group">
              <span className="filter-group-label">Topic:</span>
              <select
                className="topic-select-dropdown"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                aria-label="Select topic filter"
              >
                <option value="All">All Topics ({curatedResources.length})</option>
                {allTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Resources Cards Grid */}
        <div className="resources-results-header mt-6">
          <span>Showing <strong>{filteredResources.length}</strong> resources</span>
          {(searchQuery || selectedCategory !== 'All' || selectedTopic !== 'All') && (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedTopic('All');
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        <div className="resources-cards-grid mt-4">
          {filteredResources.map((res) => (
            <article key={res.id} className="resource-card card">
              <div className="res-card-top">
                <span className={`badge ${res.category === 'Junior' ? 'badge-junior' : 'badge-senior'}`}>
                  {res.category}
                </span>
                <span className="res-source-domain-tag">{res.source}</span>
              </div>

              <h2 className="resource-title">{res.title}</h2>
              <p className="resource-desc">{res.description}</p>

              <div className="resource-topics-row">
                {res.topics.map((t, idx) => (
                  <span key={idx} className="topic-tag">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="resource-card-action mt-4">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-full res-ext-btn"
                >
                  Open External Source <ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
