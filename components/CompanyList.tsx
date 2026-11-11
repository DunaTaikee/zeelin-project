import React, { useState } from 'react';
import { CompanyListItem } from '../data/companyList';
import { useRouter } from 'next/router';

interface CompanyListProps {
  companies: CompanyListItem[];
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
  }
};

const CompanyList: React.FC<CompanyListProps> = ({ companies, onCompanySelect }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  // Get unique industries for filter
  const industries = Array.from(new Set(companies.map(company => 
    company.csrcCategory.split(' - ')[0]
  )));

  // Filter companies based on search and industry
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || 
                           company.csrcCategory.startsWith(selectedIndustry);
    return matchesSearch && matchesIndustry;
  });

  const formatCurrency = (value: number, currency: string) => {
    return `${value.toLocaleString('zh-CN')}亿${currency}`;
  };

  const handleCompanyClick = (companyId: string) => {
    router.push(`/company/${companyId}`);
  };

  return (
    <div style={{ padding: '24px' }}>
      {/* Search and Filter Controls */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '24px',
        alignItems: 'center'
      }}>
        <input
          type="text"
          placeholder="搜索公司名称或地区..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: `1px solid ${THEME.border}`,
            background: THEME.cardBg,
            color: THEME.text.primary,
            flex: 1
          }}
        />
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: `1px solid ${THEME.border}`,
            background: THEME.cardBg,
            color: THEME.text.primary
          }}
        >
          <option value="all">全部行业</option>
          {industries.map(industry => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
      </div>

      {/* Company Table */}
      <div style={{
        background: THEME.cardBg,
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${THEME.border}` }}>
              <th style={{ padding: '16px', textAlign: 'left', color: THEME.text.secondary }}>公司名称</th>
              <th style={{ padding: '16px', textAlign: 'left', color: THEME.text.secondary }}>所在地</th>
              <th style={{ padding: '16px', textAlign: 'right', color: THEME.text.secondary }}>市值</th>
              <th style={{ padding: '16px', textAlign: 'right', color: THEME.text.secondary }}>市盈率</th>
              <th style={{ padding: '16px', textAlign: 'right', color: THEME.text.secondary }}>营收</th>
              <th style={{ padding: '16px', textAlign: 'right', color: THEME.text.secondary }}>净利润</th>
              <th style={{ padding: '16px', textAlign: 'left', color: THEME.text.secondary }}>可比公司</th>
              <th style={{ padding: '16px', textAlign: 'left', color: THEME.text.secondary }}>行业分类</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => (
              <tr
                key={company.id}
                style={{
                  borderBottom: `1px solid ${THEME.border}`,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onClick={() => onCompanySelect?.(company.name)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = THEME.background;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <td style={{ padding: '16px', color: THEME.text.primary }}>{company.name}</td>
                <td style={{ padding: '16px', color: THEME.text.secondary }}>{company.location}</td>
                <td style={{ padding: '16px', textAlign: 'right', color: THEME.text.primary }}>
                  {formatCurrency(company.marketValue, company.currency)}
                </td>
                <td style={{ padding: '16px', textAlign: 'right', color: THEME.text.primary }}>
                  {company.peRatio.toFixed(2)}
                </td>
                <td style={{ padding: '16px', textAlign: 'right', color: THEME.text.primary }}>
                  {formatCurrency(company.revenue, company.revenueCurrency)}
                </td>
                <td style={{ padding: '16px', textAlign: 'right', color: THEME.text.primary }}>
                  {formatCurrency(company.netProfit, company.netProfitCurrency)}
                </td>
                <td style={{ padding: '16px', color: THEME.text.secondary }}>
                  {company.comparableCompanies.join(', ')}
                </td>
                <td style={{ padding: '16px', color: THEME.text.secondary }}>
                  {company.csrcCategory}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyList; 