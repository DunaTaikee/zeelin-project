import React from 'react';

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

// Mock data for acquisition demands
const acquisitionDemands = [
  {
    id: '1',
    industry: '新能源',
    company: '远景能源科技有限公司',
    demand: '收购新能源领域优质企业，尤其是在储能技术和智能电网方面有技术积累的企业。希望目标企业年营收在5000万以上，有成熟产品和客户资源。',
  },
  {
    id: '2',
    industry: '半导体',
    company: '芯动科技有限公司',
    demand: '寻找芯片设计领域的并购标的，特别是在AI芯片、车规级芯片方向有技术积累的企业。希望团队具有稳定性和创新能力，有自主知识产权。',
  },
  {
    id: '3',
    industry: '医疗器械',
    company: '康泰医疗器械股份有限公司',
    demand: '希望对接医疗影像设备、体外诊断试剂等细分领域的优质企业。要求目标企业产品已获得医疗器械注册证，且在市场上有良好口碑。',
  },
  {
    id: '4',
    industry: '电气设备',
    company: '国电智能电气有限公司',
    demand: '希望对接电气设备上下游企业，包括智能电表、配电设备等领域。寻求具有核心技术和市场份额的企业进行战略合作或并购。',
  },
  {
    id: '5',
    industry: '软件服务',
    company: '云智软件科技有限公司',
    demand: '寻找在企业SaaS服务、大数据分析等领域有特色产品的企业。希望通过并购扩充产品线，提升市场竞争力。',
  },
  {
    id: '6',
    industry: '智能制造',
    company: '智造未来工业科技有限公司',
    demand: '寻求在工业机器人、智能工厂解决方案等领域有技术积累的企业。希望目标企业有稳定的客户群体和技术团队。',
  }
];

const MatchmakingTrading: React.FC = () => {
  return (
    <div>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: 'bold', 
        marginBottom: '24px',
        color: THEME.text.primary
      }}>
        撮合交易
      </h1>

      {/* Acquisition demands table */}
      <div style={{ 
        backgroundColor: THEME.cardBg,
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '32px'
      }}>
        <table style={{ 
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{ 
              backgroundColor: THEME.background,
              borderBottom: `1px solid ${THEME.border}`
            }}>
              <th style={{ 
                padding: '16px 24px',
                textAlign: 'left',
                color: THEME.text.primary,
                fontWeight: 'bold',
                width: '80px'
              }}>
                序号
              </th>
              <th style={{ 
                padding: '16px 24px',
                textAlign: 'left',
                color: THEME.text.primary,
                fontWeight: 'bold',
                width: '120px'
              }}>
                所属行业
              </th>
              <th style={{ 
                padding: '16px 24px',
                textAlign: 'left',
                color: THEME.text.primary,
                fontWeight: 'bold',
                width: '200px'
              }}>
                公司名称
              </th>
              <th style={{ 
                padding: '16px 24px',
                textAlign: 'left',
                color: THEME.text.primary,
                fontWeight: 'bold'
              }}>
                收购诉求
              </th>
              <th style={{ 
                padding: '16px 24px',
                textAlign: 'center',
                color: THEME.text.primary,
                fontWeight: 'bold',
                width: '120px'
              }}>
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {acquisitionDemands.map((demand, index) => (
              <tr 
                key={demand.id}
                style={{ 
                  borderBottom: index < acquisitionDemands.length - 1 ? `1px solid ${THEME.border}` : 'none',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = THEME.background;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <td style={{ 
                  padding: '16px 24px',
                  color: THEME.text.secondary,
                  verticalAlign: 'top'
                }}>
                  {index + 1}
                </td>
                <td style={{ 
                  padding: '16px 24px',
                  color: THEME.text.primary,
                  verticalAlign: 'top'
                }}>
                  <div style={{
                    backgroundColor: THEME.background,
                    color: THEME.text.secondary,
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '13px',
                    display: 'inline-block'
                  }}>
                    {demand.industry}
                  </div>
                </td>
                <td style={{ 
                  padding: '16px 24px',
                  color: THEME.text.primary,
                  fontWeight: 'bold',
                  verticalAlign: 'top'
                }}>
                  {demand.company}
                </td>
                <td style={{ 
                  padding: '16px 24px',
                  color: THEME.text.secondary,
                  lineHeight: '1.6',
                  verticalAlign: 'top'
                }}>
                  {demand.demand}
                </td>
                <td style={{ 
                  padding: '16px 24px',
                  textAlign: 'center',
                  verticalAlign: 'top'
                }}>
                  <button style={{
                    backgroundColor: 'transparent',
                    color: THEME.button.primary,
                    border: `1px solid ${THEME.button.primary}`,
                    borderRadius: '4px',
                    padding: '6px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '14px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = THEME.button.primary;
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = THEME.button.primary;
                  }}
                  >
                    需求对接
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom description */}
      <div style={{ 
        color: THEME.text.tertiary,
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        <p style={{ marginBottom: '12px' }}>
          本平台支持引入中介平台进行对接，为企业提供全方位的并购服务，包括标的筛选、尽职调查、估值定价等专业服务。
        </p>
        <p>
          我们正在探索使用区块链技术记录并购过程中的关键信息，打造更加透明可信的并购生态环境，保障各方权益。
        </p>
      </div>
    </div>
  );
};

export default MatchmakingTrading; 