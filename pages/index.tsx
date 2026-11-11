import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Search from '../components/Search';
import CompanyDetail from '../components/CompanyDetail';
import CompanyList from '../components/CompanyList';
import { companyListData } from '../data/companyList';
import { GraphNode, GraphLink, GraphData, ForceGraphNode } from '../types/graph';
import IndustryNews from '../components/IndustryNews';
import BackupCompanyList from '../components/BackupCompanyList';
import BackupCompanyDetail from '../components/BackupCompanyDetail';
import { backupCompanyListData } from '../data/backupCompanyList';
import MergerAcquisition from '../components/MergerAcquisition';

// Dynamically import ForceGraph2D
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false
});

// Color theme constants
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

// Import JSON data
const graphData = {
  "nodes": [
    {
      "id": "工商银行",
      "category": "上市公司",
      "industry": "金融业",
      "relation": "总部",
      "info": {
        "revenue": "8218亿",
        "employees": "10000+",
        "industry": "金融业",
        "description": "中国工商银行，全球领先的大型商业银行。",
        "relatedNews": ["1"]
      }
    },
    {
      "id": "中国移动",
      "category": "上市公司",
      "industry": "信息技术",
      "relation": "总部",
      "info": {
        "revenue": "10407亿",
        "employees": "20000+",
        "industry": "信息技术",
        "description": "中国移动是中国最大的移动通信运营商。",
        "relatedNews": ["2"]
      }
    },
    {
      "id": "北京智芯科技",
      "category": "上市公司",
      "industry": "制造业",
      "relation": "总部",
      "info": {
        "revenue": "2000亿",
        "employees": "500+",
        "industry": "芯片设计",
        "description": "北京智芯科技是一家领先的AI芯片设计公司。",
        "relatedNews": ["1", "2", "3"]
      }
    },
    {
      "id": "中科创新",
      "category": "上市公司",
      "industry": "制造业",
      "relation": "合作伙伴",
      "info": {
        "revenue": "5000亿",
        "employees": "2000+",
        "industry": "智能制造",
        "description": "中科创新是国内领先的智能制造解决方案提供商。",
        "relatedNews": ["1", "3", "7"]
      }
    },
    {
      "id": "中芯国际",
      "category": "上市公司",
      "industry": "制造业",
      "relation": "供应商",
      "info": {
        "revenue": "12000亿",
        "employees": "10000+",
        "industry": "芯片制造",
        "description": "中芯国际是全球领先的集成电路晶圆代工企业。",
        "relatedNews": ["2", "5", "6"]
      }
    },
    {
      "id": "智慧科技",
      "category": "上市公司",
      "industry": "制造业",
      "relation": "竞争对手",
      "info": {
        "revenue": "1500亿",
        "employees": "300+",
        "industry": "AI芯片",
        "description": "智慧科技专注于边缘计算AI芯片的研发和生产。",
        "relatedNews": ["4", "8"]
      }
    },
    {
      "id": "创芯投资",
      "category": "上市公司",
      "industry": "金融业",
      "relation": "投资方",
      "info": {
        "revenue": "1200亿",
        "employees": "50+",
        "industry": "风险投资",
        "description": "创芯投资是专注于半导体和人工智能领域的风险投资机构。",
        "relatedNews": ["9", "10"]
      }
    },
    {
      "id": "智芯研究院",
      "category": "上市公司",
      "industry": "科学研究",
      "relation": "研发中心",
      "info": {
        "revenue": "500亿",
        "employees": "100+",
        "industry": "研发",
        "description": "智芯研究院是公司的核心研发机构。",
        "relatedNews": ["11", "12"]
      }
    },
    {
      "id": "智芯制造",
      "category": "上市公司",
      "industry": "制造业",
      "relation": "生产基地",
      "info": {
        "revenue": "800亿",
        "employees": "200+",
        "industry": "制造",
        "description": "智芯制造负责公司芯片的封装测试和部分生产工作。",
        "relatedNews": ["13"]
      }
    },
    {
      "id": "华虹半导体",
      "category": "上市公司",
      "industry": "制造业",
      "relation": "竞争对手",
      "info": {
        "revenue": "9500亿",
        "employees": "8000+",
        "industry": "芯片制造",
        "description": "华虹半导体是中国领先的特色工艺集成电路制造企业。",
        "relatedNews": ["14"]
      }
    }
  ],
  "links": [
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
  ],
  "recommendations": [
    {
      "query": "帮我找三家潜在并购标的",
      "response": {
        "text": "基于您的需求，我为您推荐以下三家潜在并购标的：\n\n1. 智慧科技\n- 主营业务：边缘计算AI芯片\n- 优势：在物联网领域有技术积累\n- 协同效应：扩展产品线\n\n2. 智芯制造\n- 主营业务：芯片封装测试\n- 优势：拥有自动化生产线\n- 协同效应：产业链整合\n\n3. 中科创新\n- 主营业务：智能制造解决方案\n- 优势：较强的下游客户资源\n- 协同效应：拓展应用场景",
        "highlighted_nodes": ["智慧科技", "智芯制造", "中科创新"]
      }
    }
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

const Home = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'graph' | 'roadshow-news' | 'backup' | 'merger'>('list');
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });
  const [highlightNodes, setHighlightNodes] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<GraphData | null>(null);
  const [isBackupCompany, setIsBackupCompany] = useState(false);
  const [mergerSubTab, setMergerSubTab] = useState<'matchmaking' | 'business'>('business');

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth * 0.7,
        height: window.innerHeight - 200
      });
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleSearchResult = (text: string) => {
    const typedGraphData = graphData as GraphData;
    const recommendationMatch = typedGraphData.recommendations?.find(
      rec => rec.query === text
    );

    if (recommendationMatch) {
      setHighlightNodes(recommendationMatch.response.highlighted_nodes);
      
      const relatedLinks = (typedGraphData.links as GraphLink[]).filter(link => 
        recommendationMatch.response.highlighted_nodes.includes(link.source) ||
        recommendationMatch.response.highlighted_nodes.includes(link.target)
      );
      
      const relatedNodeIds = new Set([
        ...recommendationMatch.response.highlighted_nodes,
        ...relatedLinks.map(link => [link.source, link.target]).flat()
      ]);
      
      setSearchResults({
        nodes: (typedGraphData.nodes as GraphNode[]).filter(node => relatedNodeIds.has(node.id)),
        links: relatedLinks,
        recommendations: typedGraphData.recommendations
      });
    }
  };

  const handleNodeClick = (node: any) => {
    const graphNode = node as ForceGraphNode;
    setSelectedCompany(graphNode.id);
  };

  const handleCompanySelect = (companyName: string) => {
    setSelectedCompany(companyName);
    setIsBackupCompany(activeTab === 'backup');
  };

  const handleBack = () => {
    setSelectedCompany(null);
    setIsBackupCompany(false);
  };

  const handleTabChange = (tab: 'list' | 'graph' | 'roadshow-news' | 'backup' | 'merger') => {
    setActiveTab(tab);
    setSelectedCompany(null);
    setIsBackupCompany(false);
  };

  const currentGraphData = searchResults || (graphData as GraphData);

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
      {/* Tab Navigation */}
      <div style={{
        padding: '20px',
        borderBottom: `1px solid ${THEME.border}`,
        display: 'flex',
        gap: '20px',
        backgroundColor: THEME.background
      }}>
        <button
          onClick={() => handleTabChange('list')}
          style={{
            padding: '8px 16px',
            backgroundColor: activeTab === 'list' ? THEME.cardBg : 'transparent',
            border: `1px solid ${THEME.border}`,
            borderRadius: '8px',
            color: THEME.text.primary,
            cursor: 'pointer'
          }}
        >
          上市公司列表
        </button>
        <button
          onClick={() => handleTabChange('graph')}
          style={{
            padding: '8px 16px',
            backgroundColor: activeTab === 'graph' ? THEME.cardBg : 'transparent',
            border: `1px solid ${THEME.border}`,
            borderRadius: '8px',
            color: THEME.text.primary,
            cursor: 'pointer'
          }}
        >
          关系图谱
        </button>
        <button
          onClick={() => handleTabChange('roadshow-news')}
          style={{
            padding: '8px 16px',
            backgroundColor: activeTab === 'roadshow-news' ? THEME.cardBg : 'transparent',
            border: `1px solid ${THEME.border}`,
            borderRadius: '8px',
            color: THEME.text.primary,
            cursor: 'pointer'
          }}
        >
          路演大厅与行业快讯
        </button>
        <button
          onClick={() => handleTabChange('backup')}
          style={{
            padding: '8px 16px',
            backgroundColor: activeTab === 'backup' ? THEME.cardBg : 'transparent',
            border: `1px solid ${THEME.border}`,
            borderRadius: '8px',
            color: THEME.text.primary,
            cursor: 'pointer'
          }}
        >
          上市后备企业专区
        </button>
        <button
          onClick={() => handleTabChange('merger')}
          style={{
            padding: '8px 16px',
            backgroundColor: activeTab === 'merger' ? THEME.cardBg : 'transparent',
            border: `1px solid ${THEME.border}`,
            borderRadius: '8px',
            color: THEME.text.primary,
            cursor: 'pointer'
          }}
        >
          投融并购促进专区
        </button>
      </div>

      {/* Content Area */}
      <div style={{
        flex: 1,
        overflow: 'hidden',
        position: 'relative'
      }}>
        {selectedCompany ? (
          isBackupCompany ? (
            <BackupCompanyDetail companyId={selectedCompany} onBack={handleBack} />
          ) : (
            <CompanyDetail companyId={selectedCompany} onBack={handleBack} />
          )
        ) : (
          <>
            {activeTab === 'list' && (
              <div style={{
                height: '100%',
                overflow: 'auto',
                backgroundColor: THEME.background
              }}>
                <CompanyList companies={companyListData} onCompanySelect={handleCompanySelect} />
              </div>
            )}
            {activeTab === 'backup' && (
              <div style={{
                height: '100%',
                overflow: 'auto',
                backgroundColor: THEME.background
              }}>
                <BackupCompanyList companies={backupCompanyListData} onCompanySelect={handleCompanySelect} />
              </div>
            )}
            {activeTab === 'merger' && (
              <div style={{
                height: '100%',
                overflow: 'auto',
                backgroundColor: THEME.background
              }}>
                <MergerAcquisition activeSubTab={mergerSubTab} onChangeSubTab={setMergerSubTab} />
              </div>
            )}
            {activeTab === 'graph' && (
              <div style={{ 
                display: 'flex', 
                height: '100%',
                backgroundColor: THEME.background
              }}>
                {/* Main Graph Area */}
                <div style={{ 
                  flex: '1', 
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  overflow: 'auto',
                  position: 'relative'
                }}>
                  <div style={{
                    background: THEME.cardBg,
                    padding: '24px',
                    borderRadius: '12px'
                  }}>
                    <h1 style={{ 
                      marginBottom: '24px',
                      fontSize: '28px',
                      fontWeight: '600',
                      color: THEME.text.primary
                    }}>企业关系图谱查询</h1>
                    <Search onResult={handleSearchResult} />
                  </div>
                  
                  <div style={{
                    background: THEME.cardBg,
                    padding: '24px',
                    borderRadius: '12px',
                    flex: 1,
                    position: 'relative'
                  }}>
                    <ForceGraph2D
                      graphData={currentGraphData}
                      nodeLabel="id"
                      backgroundColor={THEME.background}
                      linkLabel="relation"
                      width={windowSize.width}
                      height={windowSize.height}
                      onNodeClick={handleNodeClick}
                      nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                        const graphNode = node as ForceGraphNode & { industry?: string };
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

                    {/* Industry Legend */}
                    <div style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      background: `${THEME.cardBg}99`,
                      padding: '8px',
                      borderRadius: '6px',
                      border: `1px solid ${THEME.border}`,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      fontSize: '11px',
                      maxWidth: '120px'
                    }}>
                      <div style={{ fontWeight: '600', color: THEME.text.primary, marginBottom: '2px', fontSize: '11px' }}>
                        行业分类
                      </div>
                      {Object.entries({
                        '金融业': THEME.industry.finance,
                        '信息技术': THEME.industry.tech,
                        '制造业': THEME.industry.manufacturing,
                        '科学研究': THEME.industry.research
                      }).map(([industry, color]) => (
                        <div key={industry} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: color
                          }} />
                          <span style={{ color: THEME.text.secondary, fontSize: '10px' }}>{industry}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* News Sidebar */}
                <div style={{ 
                  width: '30%',
                  borderLeft: `1px solid ${THEME.border}`,
                  backgroundColor: THEME.cardBg,
                  overflow: 'auto',
                  height: '100%'
                }}>
                  <div style={{
                    padding: '24px',
                    borderBottom: `1px solid ${THEME.border}`,
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                    background: THEME.cardBg
                  }}>
                    <h2 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: THEME.text.primary,
                      margin: 0
                    }}>相关新闻</h2>
                  </div>
                  
                  <div style={{ 
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                  }}>
                    {newsData.news.map((news) => (
                      <div
                        key={news.id}
                        style={{
                          padding: '20px',
                          background: THEME.background,
                          borderRadius: '12px',
                          border: `1px solid ${THEME.border}`,
                          transition: 'all 0.2s ease',
                          cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = THEME.button.primary;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = THEME.border;
                        }}
                      >
                        <h3 style={{ 
                          marginBottom: '12px',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: THEME.text.primary,
                          lineHeight: '1.4'
                        }}>{news.title}</h3>
                        <div style={{ 
                          color: THEME.text.tertiary,
                          fontSize: '13px',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <span>{news.date}</span>
                          <span>•</span>
                          <span style={{
                            padding: '2px 8px',
                            background: THEME.cardBg,
                            borderRadius: '4px',
                            border: `1px solid ${THEME.border}`
                          }}>{news.category}</span>
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
            )}
            {activeTab === 'roadshow-news' && (
              <div style={{
                height: '100%',
                overflow: 'auto',
                backgroundColor: THEME.background
              }}>
                <IndustryNews />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
