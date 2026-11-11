import React, { useState } from 'react';
import { BackupCompanyListItem } from '../data/backupCompanyList';

interface BackupCompanyListProps {
  companies: BackupCompanyListItem[];
  onCompanySelect?: (companyId: string) => void;
}

const THEME = {
  background: '#FFFFFF',
  cardBg: '#F5F7FA',
  border: '#E2E8F0',
  text: {
    primary: '#1A202C',
    secondary: '#4A5568',
    tertiary: '#718096'
  },
  button: {
    primary: '#3A6DF0',
    primaryHover: '#5A8DFF'
  }
};

const BackupCompanyList: React.FC<BackupCompanyListProps> = ({ companies, onCompanySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  // Get unique industries for filter
  const industries = Array.from(new Set(companies.map(company => company.industry)));

  // Filter companies based on search term and selected industry
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = !selectedIndustry || company.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div style={{
      padding: '24px',
      color: THEME.text.primary
    }}>
      {/* Header Section */}
      <div style={{
        marginBottom: '24px'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}>
          上市后备企业列表
        </h1>
        
        {/* Search and Filter Controls */}
        <div style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <input
            type="text"
            placeholder="搜索企业..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '8px 12px',
              background: THEME.cardBg,
              border: `1px solid ${THEME.border}`,
              borderRadius: '6px',
              color: THEME.text.primary,
              width: '300px'
            }}
          />
          <select
            value={selectedIndustry || ''}
            onChange={(e) => setSelectedIndustry(e.target.value || null)}
            style={{
              padding: '8px 12px',
              background: THEME.cardBg,
              border: `1px solid ${THEME.border}`,
              borderRadius: '6px',
              color: THEME.text.primary
            }}
          >
            <option value="">全部行业</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Companies Table */}
      <div style={{
        background: THEME.cardBg,
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{
              borderBottom: `1px solid ${THEME.border}`
            }}>
              <th style={{ padding: '12px 16px', textAlign: 'left', width: '200px' }}>企业名称</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', width: '120px' }}>成立日期</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', width: '150px' }}>总部地区</th>
              <th style={{ padding: '12px 16px', textAlign: 'left' }}>企业简介</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', width: '120px' }}>来觅赛道</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company, index) => (
              <tr
                key={company.id}
                style={{
                  borderBottom: `1px solid ${THEME.border}`,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onClick={() => onCompanySelect?.(company.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = THEME.background;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <td style={{ padding: '16px' }}>{company.name}</td>
                <td style={{ padding: '16px' }}>{company.establishDate}</td>
                <td style={{ padding: '16px' }}>{company.location}</td>
                <td style={{ padding: '16px' }}>
                  <div style={{
                    maxWidth: '400px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {company.description}
                  </div>
                </td>
                <td style={{ padding: '16px' }}>
                  <span style={{
                    padding: '4px 8px',
                    background: '#EBF8FF',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#3182CE'
                  }}>
                    {company.industry}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BackupCompanyList; 