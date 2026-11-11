import React from 'react';
import BusinessCooperation from './BusinessCooperation';
import MatchmakingTrading from './MatchmakingTrading';

interface MergerAcquisitionProps {
  activeSubTab: 'business' | 'matchmaking';
  onChangeSubTab: (tab: 'business' | 'matchmaking') => void;
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
    primary: '#3182CE',
    primaryHover: '#4299E1'
  }
};

const MergerAcquisition: React.FC<MergerAcquisitionProps> = ({ activeSubTab, onChangeSubTab }) => {
  return (
    <div style={{
      padding: '24px',
      backgroundColor: THEME.background,
      height: '100%',
      color: THEME.text.primary,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Sub-tab navigation */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <button
          onClick={() => onChangeSubTab('business')}
          style={{
            padding: '8px 16px',
            backgroundColor: activeSubTab === 'business' ? THEME.button.primary : 'transparent',
            border: `1px solid ${activeSubTab === 'business' ? THEME.button.primary : THEME.border}`,
            borderRadius: '8px',
            color: activeSubTab === 'business' ? '#FFFFFF' : THEME.text.primary,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          商业合作
        </button>
        <button
          onClick={() => onChangeSubTab('matchmaking')}
          style={{
            padding: '8px 16px',
            backgroundColor: activeSubTab === 'matchmaking' ? THEME.button.primary : 'transparent',
            border: `1px solid ${activeSubTab === 'matchmaking' ? THEME.button.primary : THEME.border}`,
            borderRadius: '8px',
            color: activeSubTab === 'matchmaking' ? '#FFFFFF' : THEME.text.primary,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          撮合交易
        </button>
      </div>

      {/* Content area */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        {activeSubTab === 'business' ? (
          <BusinessCooperation />
        ) : (
          <MatchmakingTrading />
        )}
      </div>
    </div>
  );
};

export default MergerAcquisition; 