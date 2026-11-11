import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { GraphNode, GraphLink } from '../types/graph';

// Import JSON data
const graphData = {
  "nodes": [
    {
      "id": "北京智芯科技",
      "category": "上市公司",
      "relation": "总部",
      "info": {
        "revenue": "20亿",
        "employees": "500+",
        "industry": "芯片设计",
        "description": "北京智芯科技是一家领先的AI芯片设计公司，专注于人工智能芯片的研发和产业化。公司在高性能计算、深度学习等领域拥有多项核心专利。",
        "relatedNews": ["1", "2", "3"]
      }
    },
    {
      "id": "中科创新",
      "category": "上市公司",
      "relation": "合作伙伴",
      "info": {
        "revenue": "50亿",
        "employees": "2000+",
        "industry": "智能制造",
        "description": "中科创新是国内领先的智能制造解决方案提供商，致力于工业自动化和智能化转型。",
        "relatedNews": ["1", "3", "7"]
      }
    },
    {
      "id": "中芯国际",
      "category": "上市公司",
      "relation": "供应商",
      "info": {
        "revenue": "100亿",
        "employees": "10000+",
        "industry": "芯片制造",
        "description": "中芯国际是全球领先的集成电路晶圆代工企业，提供0.35微米到14纳米不同技术节点的晶圆代工与技术服务。",
        "relatedNews": ["2", "5", "6"]
      }
    },
    {
      "id": "智慧科技",
      "category": "上市公司",
      "relation": "竞争对手",
      "info": {
        "revenue": "15亿",
        "employees": "300+",
        "industry": "AI芯片",
        "description": "智慧科技专注于边缘计算AI芯片的研发和生产，在物联网和智能终端领域有较强竞争力。",
        "relatedNews": ["4", "8"]
      }
    },
    {
      "id": "创芯投资",
      "category": "投资机构",
      "relation": "投资方",
      "info": {
        "revenue": "管理规模100亿",
        "employees": "50+",
        "industry": "风险投资",
        "description": "创芯投资是专注于半导体和人工智能领域的风险投资机构，已投资多家行业领军企业。",
        "relatedNews": ["9", "10"]
      }
    },
    {
      "id": "张明",
      "category": "高管",
      "relation": "CEO",
      "info": {
        "position": "首席执行官",
        "education": "清华大学",
        "description": "张明博士拥有20年芯片设计经验，曾在多家国际知名芯片公司任职。"
      }
    },
    {
      "id": "李强",
      "category": "高管",
      "relation": "CTO",
      "info": {
        "position": "技术总监",
        "education": "斯坦福大学",
        "description": "李强博士专注于AI算法优化和芯片架构设计，拥有多项国际专利。"
      }
    },
    {
      "id": "王芯",
      "category": "高管",
      "relation": "CFO",
      "info": {
        "position": "财务总监",
        "education": "北京大学",
        "description": "王芯女士拥有丰富的科技公司财务管理经验，曾主导多起并购案例。"
      }
    },
    {
      "id": "陈博士",
      "category": "高管",
      "relation": "研发总监",
      "info": {
        "position": "研发总监",
        "education": "麻省理工",
        "description": "陈博士在深度学习加速器架构设计领域享有盛誉，领导了多个重要研发项目。"
      }
    },
    {
      "id": "智芯研究院",
      "category": "子公司",
      "relation": "研发中心",
      "info": {
        "revenue": "研发投入5亿/年",
        "employees": "100+",
        "industry": "研发",
        "description": "智芯研究院是公司的核心研发机构，专注于前沿AI算法和芯片架构研究。",
        "relatedNews": ["11", "12"]
      }
    },
    {
      "id": "智芯制造",
      "category": "子公司",
      "relation": "生产基地",
      "info": {
        "revenue": "10亿",
        "employees": "200+",
        "industry": "制造",
        "description": "智芯制造负责公司芯片的封装测试和部分生产工作，拥有先进的自动化生产线。",
        "relatedNews": ["13"]
      }
    }
  ],
  "links": [
    {"source": "北京智芯科技", "target": "中芯国际", "relation": "芯片代工"},
    {"source": "北京智芯科技", "target": "中科创新", "relation": "战略合作"},
    {"source": "北京智芯科技", "target": "智慧科技", "relation": "市场竞争"},
    {"source": "北京智芯科技", "target": "创芯投资", "relation": "投资关系"},
    {"source": "北京智芯科技", "target": "张明", "relation": "任职"},
    {"source": "北京智芯科技", "target": "李强", "relation": "任职"},
    {"source": "北京智芯科技", "target": "王芯", "relation": "任职"},
    {"source": "北京智芯科技", "target": "陈博士", "relation": "任职"},
    {"source": "北京智芯科技", "target": "智芯研究院", "relation": "控股"},
    {"source": "北京智芯科技", "target": "智芯制造", "relation": "控股"},
    {"source": "中科创新", "target": "智慧科技", "relation": "技术合作"},
    {"source": "中芯国际", "target": "智芯制造", "relation": "供应链合作"},
    {"source": "创芯投资", "target": "智慧科技", "relation": "投资"},
    {"source": "智芯研究院", "target": "陈博士", "relation": "分管负责"},
    {"source": "智芯制造", "target": "中芯国际", "relation": "技术支持"}
  ]
};

const newsData = {
  "news": [
    {
      "id": "1",
      "title": "北京智芯科技完成新一轮融资",
      "date": "2024-01-15",
      "category": "融资新闻",
      "summary": "北京智芯科技今日宣布完成10亿元人民币C轮融资，本轮融资由国家集成电路基金领投..."
    },
    {
      "id": "2",
      "title": "北京智芯科技发布新一代AI芯片",
      "date": "2024-01-10",
      "category": "产品发布",
      "summary": "北京智芯科技在京发布新一代AI芯片，相比上一代性能提升50%，功耗降低30%..."
    },
    {
      "id": "3",
      "title": "北京智芯科技与中科创新达成战略合作",
      "date": "2024-01-05",
      "category": "合作新闻",
      "summary": "北京智芯科技与中科创新今日签署战略合作协议，双方将在智能制造领域展开深度合作..."
    },
    {
      "id": "4",
      "title": "智慧科技推出新一代边缘计算芯片",
      "date": "2024-01-03",
      "category": "行业动态",
      "summary": "智慧科技发布新一代边缘计算芯片，针对物联网场景优化，功耗比肩业界领先水平..."
    },
    {
      "id": "5",
      "title": "中芯国际扩产14nm制程产线",
      "date": "2024-01-08",
      "category": "产能新闻",
      "summary": "中芯国际宣布将投资200亿元扩建14nm制程产线，预计2025年投产..."
    },
    {
      "id": "6",
      "title": "中芯国际与北京智芯科技深化合作",
      "date": "2024-01-12",
      "category": "合作新闻",
      "summary": "双方签署战略合作协议，中芯国际将为北京智芯科技提供稳定的晶圆代工产能..."
    },
    {
      "id": "7",
      "title": "中科创新发布智能工厂解决方案",
      "date": "2024-01-18",
      "category": "产品发布",
      "summary": "方案集成了北京智芯科技的AI芯片，可实现工业生产全流程智能化管理..."
    },
    {
      "id": "8",
      "title": "智慧科技获得新专利授权",
      "date": "2024-01-20",
      "category": "技术创新",
      "summary": "智慧科技在神经网络加速器架构领域获得重要专利授权，进一步巩固技术优势..."
    },
    {
      "id": "9",
      "title": "创芯投资完成新基金募集",
      "date": "2024-01-22",
      "category": "投资新闻",
      "summary": "创芯投资宣布完成50亿元新基金募集，将继续专注投资半导体和AI领域..."
    },
    {
      "id": "10",
      "title": "创芯投资增持北京智芯科技股份",
      "date": "2024-01-25",
      "category": "投资新闻",
      "summary": "创芯投资通过二级市场增持北京智芯科技2%股份，展示对公司发展的信心..."
    },
    {
      "id": "11",
      "title": "智芯研究院突破新技术",
      "date": "2024-01-28",
      "category": "技术创新",
      "summary": "智芯研究院在类脑计算架构领域取得重要突破，相关成果已申请专利保护..."
    },
    {
      "id": "12",
      "title": "智芯研究院与清华大学展开合作",
      "date": "2024-01-30",
      "category": "研发合作",
      "summary": "双方将在新一代AI芯片架构设计领域开展深入合作，推动技术创新..."
    },
    {
      "id": "13",
      "title": "智芯制造扩建自动化产线",
      "date": "2024-02-01",
      "category": "产能新闻",
      "summary": "智芯制造投资5亿元扩建自动化产线，预计将提升50%产能..."
    }
  ]
};

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false
});

interface CompanyDetailProps {
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
  },
  button: {
    primary: '#3182CE',
    primaryHover: '#4299E1'
  }
};

const CompanyDetail: React.FC<CompanyDetailProps> = ({ companyId, onBack }) => {
  const [windowSize, setWindowSize] = useState({ width: 400, height: 300 });
  const [graphData, setGraphData] = useState<{ nodes: GraphNode[]; links: GraphLink[] } | null>(null);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: 400,
        height: 300
      });
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    // Find the company and its direct relationships from the main graph data
    const mainGraphData = {
      nodes: [
        {
          id: "工商银行",
          category: "上市公司",
          industry: "金融业",
          relation: "总部",
          info: {
            revenue: "8218亿",
            employees: "10000+",
            description: "中国工商银行，全球领先的大型商业银行。"
          }
        },
        {
          id: "中国移动",
          category: "上市公司",
          industry: "信息技术",
          relation: "总部",
          info: {
            revenue: "10407亿",
            employees: "20000+",
            description: "中国移动是中国最大的移动通信运营商。"
          }
        },
        {
          id: "北京智芯科技",
          category: "上市公司",
          industry: "制造业",
          relation: "总部",
          info: {
            revenue: "2000亿",
            employees: "500+",
            description: "北京智芯科技是一家领先的AI芯片设计公司。"
          }
        },
        {
          id: "中科创新",
          category: "上市公司",
          industry: "制造业",
          relation: "合作伙伴",
          info: {
            revenue: "5000亿",
            employees: "2000+",
            description: "中科创新是国内领先的智能制造解决方案提供商。"
          }
        },
        {
          id: "中芯国际",
          category: "上市公司",
          industry: "制造业",
          relation: "供应商",
          info: {
            revenue: "12000亿",
            employees: "10000+",
            description: "中芯国际是全球领先的集成电路晶圆代工企业。"
          }
        },
        {
          id: "智慧科技",
          category: "上市公司",
          industry: "制造业",
          relation: "竞争对手",
          info: {
            revenue: "1500亿",
            employees: "300+",
            description: "智慧科技专注于边缘计算AI芯片的研发和生产。"
          }
        },
        {
          id: "创芯投资",
          category: "上市公司",
          industry: "金融业",
          relation: "投资方",
          info: {
            revenue: "1200亿",
            employees: "50+",
            description: "创芯投资是专注于半导体和人工智能领域的风险投资机构。"
          }
        },
        {
          id: "智芯研究院",
          category: "上市公司",
          industry: "科学研究",
          relation: "研发中心",
          info: {
            revenue: "500亿",
            employees: "100+",
            description: "智芯研究院是公司的核心研发机构。"
          }
        },
        {
          id: "智芯制造",
          category: "上市公司",
          industry: "制造业",
          relation: "生产基地",
          info: {
            revenue: "800亿",
            employees: "200+",
            description: "智芯制造负责公司芯片的封装测试和部分生产工作。"
          }
        },
        {
          id: "华虹半导体",
          category: "上市公司",
          industry: "制造业",
          relation: "竞争对手",
          info: {
            revenue: "9500亿",
            employees: "8000+",
            description: "华虹半导体是中国领先的特色工艺集成电路制造企业。"
          }
        }
      ],
      links: [
        {"source": "北京智芯科技", "target": "中芯国际", "relation": "芯片代工"},
        {"source": "北京智芯科技", "target": "中科创新", "relation": "战略合作"},
        {"source": "北京智芯科技", "target": "智慧科技", "relation": "市场竞争"},
        {"source": "北京智芯科技", "target": "创芯投资", "relation": "投资关系"},
        {"source": "北京智芯科技", "target": "智芯研究院", "relation": "控股"},
        {"source": "北京智芯科技", "target": "智芯制造", "relation": "控股"},
        {"source": "中科创新", "target": "智慧科技", "relation": "技术合作"},
        {"source": "中芯国际", "target": "智芯制造", "relation": "供应链合作"},
        {"source": "创芯投资", "target": "智慧科技", "relation": "投资"},
        {"source": "智芯制造", "target": "中芯国际", "relation": "技术支持"},
        {"source": "中芯国际", "target": "华虹半导体", "relation": "行业竞争"},
        {"source": "华虹半导体", "target": "智芯制造", "relation": "供应链合作"}
      ]
    };

    // Get all related nodes and links
    const links = mainGraphData.links.filter(
      link => link.source === companyId || link.target === companyId
    );
    
    const relatedNodeIds = new Set([
      companyId,
      ...links.map(link => [
        typeof link.source === 'string' ? link.source : (link.source as { id: string }).id,
        typeof link.target === 'string' ? link.target : (link.target as { id: string }).id
      ]).flat()
    ]);

    const nodes = mainGraphData.nodes.filter(node => relatedNodeIds.has(node.id));

    setGraphData({ nodes, links });
  }, [companyId]);

  // Find the current company's news
  const companyNews = newsData.news.filter(news => 
    news.title.includes(companyId) || 
    news.summary.includes(companyId)
  );

  if (!graphData) return null;

  const company = graphData.nodes.find(node => node.id === companyId);
  if (!company) return null;

  return (
    <div style={{
      backgroundColor: THEME.background,
      minHeight: '100vh',
      color: THEME.text.primary,
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden'
    }}>
      <div style={{
        padding: '20px',
        borderBottom: `1px solid ${THEME.border}`,
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <button
          onClick={onBack}
          style={{
            padding: '8px 16px',
            backgroundColor: THEME.cardBg,
            border: `1px solid ${THEME.border}`,
            borderRadius: '8px',
            color: THEME.text.primary,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>←</span>
          <span>返回上市公司列表</span>
        </button>
        <h1 style={{ margin: 0, fontSize: '24px' }}>{companyId}</h1>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        padding: '20px',
        gap: '20px',
        overflow: 'hidden'
      }}>
        {/* Left Side - Company Information */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          overflow: 'auto'
        }}>
          {/* Basic Info Card */}
          <div style={{
            background: THEME.cardBg,
            borderRadius: '12px',
            padding: '24px'
          }}>
            <h2 style={{ 
              marginBottom: '20px',
              fontSize: '20px',
              fontWeight: '600'
            }}>基本信息</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ color: THEME.text.secondary, marginBottom: '4px' }}>行业分类</div>
                <div>{company.industry}</div>
              </div>
              <div>
                <div style={{ color: THEME.text.secondary, marginBottom: '4px' }}>营收规模</div>
                <div>{company.info.revenue}</div>
              </div>
              <div>
                <div style={{ color: THEME.text.secondary, marginBottom: '4px' }}>员工规模</div>
                <div>{company.info.employees}</div>
              </div>
              <div>
                <div style={{ color: THEME.text.secondary, marginBottom: '4px' }}>公司简介</div>
                <div style={{ lineHeight: '1.6' }}>{company.info.description}</div>
              </div>
            </div>
          </div>

          {/* News Card */}
          <div style={{
            background: THEME.cardBg,
            borderRadius: '12px',
            padding: '24px'
          }}>
            <h2 style={{ 
              marginBottom: '20px',
              fontSize: '20px',
              fontWeight: '600'
            }}>相关新闻</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {companyNews.map(news => (
                <div
                  key={news.id}
                  style={{
                    padding: '16px',
                    background: THEME.background,
                    borderRadius: '8px',
                    border: `1px solid ${THEME.border}`
                  }}
                >
                  <h3 style={{ 
                    marginBottom: '8px',
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>{news.title}</h3>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    color: THEME.text.tertiary,
                    fontSize: '12px',
                    marginBottom: '8px'
                  }}>
                    <span>{news.date}</span>
                    <span>•</span>
                    <span>{news.category}</span>
                  </div>
                  <p style={{
                    margin: 0,
                    color: THEME.text.secondary,
                    fontSize: '14px',
                    lineHeight: '1.6'
                  }}>{news.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Relationship Graph */}
        <div style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Graph Card */}
          <div style={{
            background: THEME.cardBg,
            borderRadius: '12px',
            padding: '24px',
            height: '400px'
          }}>
            <h2 style={{ 
              marginBottom: '20px',
              fontSize: '20px',
              fontWeight: '600'
            }}>关系网络</h2>
            <div style={{ height: '300px', position: 'relative' }}>
              <ForceGraph2D
                graphData={graphData}
                nodeLabel="id"
                backgroundColor={THEME.background}
                linkLabel="relation"
                width={350}
                height={300}
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

          {/* Related Entities */}
          <div style={{
            background: THEME.cardBg,
            borderRadius: '12px',
            padding: '24px'
          }}>
            <h2 style={{ 
              marginBottom: '20px',
              fontSize: '20px',
              fontWeight: '600'
            }}>相关企业</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {graphData.links.map((link, index) => (
                <div key={index} style={{
                  padding: '12px',
                  background: THEME.background,
                  borderRadius: '8px',
                  border: `1px solid ${THEME.border}`
                }}>
                  <div style={{ marginBottom: '4px', color: THEME.text.secondary }}>
                    {link.relation}
                  </div>
                  <div>
                    {link.source === companyId ? link.target : link.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail; 