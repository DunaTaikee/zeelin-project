import React, { useState } from 'react';
import newsData from '../data/news.json';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  category: string;
  relatedCompanies: string[];
}

const NewsList: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <div style={{ padding: 20 }}>
      {selectedNews ? (
        <div>
          <button 
            onClick={() => setSelectedNews(null)}
            style={{ marginBottom: 20, padding: '8px 16px', background: '#f0f0f0', border: 'none', borderRadius: 4, cursor: 'pointer' }}
          >
            返回列表
          </button>
          <h2>{selectedNews.title}</h2>
          <div style={{ color: '#666', marginBottom: 16 }}>
            <span>{selectedNews.date}</span>
            <span style={{ margin: '0 8px' }}>|</span>
            <span>{selectedNews.category}</span>
          </div>
          <div style={{ whiteSpace: 'pre-line' }}>{selectedNews.content}</div>
          <div style={{ marginTop: 20 }}>
            <h3>相关公司：</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              {selectedNews.relatedCompanies.map(company => (
                <span 
                  key={company}
                  style={{ 
                    padding: '4px 12px',
                    background: '#e6f4ff',
                    borderRadius: 16,
                    color: '#0070f3'
                  }}
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 style={{ marginBottom: 20 }}>北京专栏</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {newsData.news.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: 16,
                  border: '1px solid #eee',
                  borderRadius: 8,
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedNews(item)}
              >
                <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
                <div style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>
                  <span>{item.date}</span>
                  <span style={{ margin: '0 8px' }}>|</span>
                  <span>{item.category}</span>
                </div>
                <p style={{ margin: 0, color: '#444' }}>{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsList; 