import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { GraphNode, GraphLink, GraphData } from '../types/graph';
import { backupCompanyGraphData } from '../data/backupCompanyGraph';
import { backupCompanyListData } from '../data/backupCompanyList';

// Dynamically import ForceGraph2D
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false
});

interface BackupCompanyDetailProps {
  companyId: string;
  onBack: () => void;
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
  industry: {
    finance: '#F6AD55',      // Orange for 金融业
    tech: '#F56565',         // Red for 信息技术
    manufacturing: '#4299E1', // Blue for 制造业
    research: '#48BB78'      // Green for 科学研究
  }
};

const BackupCompanyDetail: React.FC<BackupCompanyDetailProps> = ({ companyId, onBack }) => {
  const [windowSize, setWindowSize] = useState({ width: 400, height: 300 });
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [], recommendations: [] });
  const [companyInfo, setCompanyInfo] = useState<any>(null);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth * 0.7,
        height: window.innerHeight - 400
      });
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    // Find company data
    const company = backupCompanyListData.find(c => c.id === companyId);
    setCompanyInfo(company);

    // Get graph data
    const data = backupCompanyGraphData[companyId];
    if (data) {
      setGraphData({
        nodes: data.nodes,
        links: data.links,
        recommendations: data.recommendations
      });
    } else if (company) {
      // Create default graph data for companies without relationships
      setGraphData({
        nodes: [{
          id: company.name,
          category: '上市后备',
          industry: company.industry,
          relation: '总部',
          info: {
            revenue: '暂无数据',
            employees: '暂无数据',
            industry: company.industry,
            description: company.description
          }
        }],
        links: [],
        recommendations: []
      });
    }
  }, [companyId]);

  if (!companyInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
      padding: '0',
      backgroundColor: THEME.background,
      height: '100%',
      color: THEME.text.primary,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header with back button - sticky */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        position: 'sticky',
        top: 0,
        backgroundColor: THEME.background,
        zIndex: 10,
        padding: '24px 24px 12px 24px',
        borderBottom: `1px solid ${THEME.border}`
      }}>
        <button
          onClick={onBack}
          style={{
            padding: '8px 16px',
            backgroundColor: 'transparent',
            border: `1px solid ${THEME.border}`,
            borderRadius: '8px',
            color: THEME.text.primary,
            cursor: 'pointer'
          }}
        >
          返回列表
        </button>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          margin: 0
        }}>
          {companyInfo.name}
        </h1>
      </div>

      {/* Scrollable content area */}
      <div style={{ 
        flex: '1',
        overflow: 'auto',
        padding: '24px'
      }}>
        {/* Company Info */}
        <div style={{
          background: THEME.cardBg,
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            基本信息
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <div>
              <label style={{ color: THEME.text.tertiary }}>成立日期</label>
              <div>{companyInfo.establishDate}</div>
            </div>
            <div>
              <label style={{ color: THEME.text.tertiary }}>总部地区</label>
              <div>{companyInfo.location}</div>
            </div>
            <div>
              <label style={{ color: THEME.text.tertiary }}>来觅赛道</label>
              <div>{companyInfo.industry}</div>
            </div>
          </div>
          <div style={{ marginTop: '16px' }}>
            <label style={{ color: THEME.text.tertiary }}>企业简介</label>
            <p style={{ marginTop: '8px', lineHeight: 1.6 }}>{companyInfo.description}</p>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{
          background: THEME.cardBg,
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            发展历程
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              padding: '16px',
              background: THEME.background,
              borderRadius: '8px',
              border: `1px solid ${THEME.border}`
            }}>
              <div style={{ color: THEME.text.secondary, marginBottom: '8px' }}>{companyInfo.establishDate}</div>
              <div>公司成立</div>
            </div>
            <div style={{
              padding: '16px',
              background: THEME.background,
              borderRadius: '8px',
              border: `1px solid ${THEME.border}`
            }}>
              <div style={{ color: THEME.text.secondary, marginBottom: '8px' }}>2024年</div>
              <div>进入上市后备企业名单</div>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div style={{
          background: THEME.cardBg,
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            核心竞争力
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}>
            <div style={{
              padding: '20px',
              background: THEME.background,
              borderRadius: '8px',
              border: `1px solid ${THEME.border}`
            }}>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: THEME.text.primary }}>技术创新</h3>
              <p style={{ color: THEME.text.secondary, lineHeight: 1.6 }}>
                在{companyInfo.industry}领域拥有核心技术优势和自主知识产权
              </p>
            </div>
            <div style={{
              padding: '20px',
              background: THEME.background,
              borderRadius: '8px',
              border: `1px solid ${THEME.border}`
            }}>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: THEME.text.primary }}>市场地位</h3>
              <p style={{ color: THEME.text.secondary, lineHeight: 1.6 }}>
                在细分市场具有较强的竞争优势和品牌影响力
              </p>
            </div>
            <div style={{
              padding: '20px',
              background: THEME.background,
              borderRadius: '8px',
              border: `1px solid ${THEME.border}`
            }}>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: THEME.text.primary }}>发展潜力</h3>
              <p style={{ color: THEME.text.secondary, lineHeight: 1.6 }}>
                所处行业具有广阔的市场空间和良好的发展前景
              </p>
            </div>
          </div>
        </div>

        {/* Graph */}
        <div style={{
          background: THEME.cardBg,
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            关系网络
          </h2>
          <div style={{
            border: `1px solid ${THEME.border}`,
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <ForceGraph2D
              graphData={graphData}
              nodeLabel="id"
              backgroundColor={THEME.background}
              linkLabel="relation"
              width={windowSize.width}
              height={windowSize.height}
              nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                const graphNode = node as GraphNode & { industry?: string };
                const label = graphNode.id;
                const fontSize = 14/globalScale;
                const nodeSize = 6;

                ctx.beginPath();
                ctx.arc(node.x || 0, node.y || 0, nodeSize, 0, 2 * Math.PI);
                
                // Set color based on industry
                let color = THEME.industry.manufacturing; // default color
                if (graphNode.industry === '金融业') {
                  color = THEME.industry.finance;
                } else if (graphNode.industry === '信息技术') {
                  color = THEME.industry.tech;
                } else if (graphNode.industry === '科学研究') {
                  color = THEME.industry.research;
                }
                
                ctx.fillStyle = color;
                ctx.fill();

                ctx.font = `${fontSize}px system-ui, -apple-system, sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = THEME.text.primary;
                ctx.fillText(label, node.x || 0, (node.y || 0) + nodeSize + fontSize/2);
              }}
              linkColor={() => THEME.border}
              linkWidth={1.5}
              nodeRelSize={6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackupCompanyDetail; 