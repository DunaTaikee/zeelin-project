import React, { useState } from 'react';

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

// Mock data for featured projects
const featuredProjects = [
  {
    id: '1',
    title: '智能芯片设计项目',
    tags: ['半导体/芯片', 'AI'],
    description: [
      '项目简介：基于国产架构的AI芯片设计',
      '融资阶段：A轮',
      '融资金额：5000万',
      '所在地区：北京',
    ],
    featured: true,
  },
  {
    id: '2',
    title: '新型诊断试剂研发',
    tags: ['诊断试剂', '医疗健康'],
    description: [
      '项目简介：新冠病毒快速检测试剂盒',
      '融资阶段：B轮',
      '融资金额：1亿',
      '所在地区：上海',
    ],
    featured: true,
  },
  {
    id: '3',
    title: '工业机器人控制系统',
    tags: ['机器人', '智能制造'],
    description: [
      '项目简介：高精度工业机器人控制系统',
      '融资阶段：天使轮',
      '融资金额：2000万',
      '所在地区：深圳',
    ],
    featured: true,
  },
  {
    id: '4',
    title: '新能源汽车电池管理系统',
    tags: ['新能源', '汽车电子'],
    description: [
      '项目简介：高效能电池管理系统',
      '融资阶段：C轮',
      '融资金额：3亿',
      '所在地区：合肥',
    ],
    featured: false,
  }
];

// Mock data for bidding announcements
const biddingAnnouncements = [
  {
    id: '1',
    title: '智能交通系统设备采购项目',
    company: '深圳市交通运输局',
    date: '2024-05-15',
    amount: '489.00',
    type: '招标公告',
  },
  {
    id: '2',
    title: '医疗设备采购项目',
    company: '上海市第一人民医院',
    date: '2024-05-10',
    amount: '1200.00',
    type: '中标公示',
  },
  {
    id: '3',
    title: '智慧校园建设项目',
    company: '北京大学',
    date: '2024-05-08',
    amount: '850.00',
    type: '招标公告',
  },
];

const BusinessCooperation: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('精选');
  const [searchParams, setSearchParams] = useState({
    name: '',
    company: '',
    location: '',
    industry: '',
    amountMin: '',
    amountMax: '',
    dateStart: '',
    dateEnd: '',
  });

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSearchParamChange = (key: string, value: string) => {
    setSearchParams(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    console.log('Searching with params:', searchParams);
    // Here you would typically fetch data based on the search params
  };

  const handleReset = () => {
    setSearchParams({
      name: '',
      company: '',
      location: '',
      industry: '',
      amountMin: '',
      amountMax: '',
      dateStart: '',
      dateEnd: '',
    });
  };

  return (
    <div>
      <h1 style={{ 
        fontSize: '28px', 
        fontWeight: 'bold', 
        marginBottom: '24px',
        color: THEME.text.primary
      }}>
        商业合作
      </h1>

      {/* Featured Projects Section */}
      <div style={{ marginBottom: '40px' }}>
        {/* Filter tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          marginBottom: '24px',
          overflowX: 'auto',
          paddingBottom: '8px'
        }}>
          {['精选', '推荐', '热门', '特色筛选', '团队优秀', '精确对接', '全阶段融资'].map(filter => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              style={{
                padding: '6px 16px',
                backgroundColor: activeFilter === filter ? THEME.button.primary : THEME.cardBg,
                color: activeFilter === filter ? '#FFFFFF' : THEME.text.secondary,
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {featuredProjects.map(project => (
            <div 
              key={project.id}
              style={{
                backgroundColor: THEME.cardBg,
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  backgroundColor: '#FF9800',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  fontSize: '12px',
                  borderBottomLeftRadius: '8px'
                }}>
                  精选项目
                </div>
              )}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  color: THEME.text.primary
                }}>
                  {project.title}
                </h3>
                <div style={{ 
                  display: 'flex', 
                  gap: '8px',
                  marginBottom: '16px',
                  flexWrap: 'wrap'
                }}>
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      style={{
                        backgroundColor: THEME.background,
                        color: THEME.text.secondary,
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ marginBottom: '20px' }}>
                  {project.description.map((line, index) => (
                    <p 
                      key={index}
                      style={{
                        margin: '8px 0',
                        color: THEME.text.secondary,
                        fontSize: '14px',
                        lineHeight: '1.5'
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <button style={{
                  backgroundColor: THEME.button.primary,
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = THEME.button.primaryHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = THEME.button.primary;
                }}
                >
                  查看详情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bidding Section */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        alignItems: 'start'
      }}>
        {/* Bidding results */}
        <div style={{ minWidth: 0 }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: THEME.text.primary
          }}>
            招投标信息
          </h2>
          <div style={{ 
            backgroundColor: THEME.cardBg,
            borderRadius: '8px',
            overflow: 'hidden',
            width: '100%'
          }}>
            {biddingAnnouncements.map((announcement, index) => (
              <div 
                key={announcement.id}
                style={{
                  padding: '16px 24px',
                  borderBottom: index < biddingAnnouncements.length - 1 ? `1px solid ${THEME.border}` : 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'background-color 0.2s ease',
                  cursor: 'pointer',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = THEME.background;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ flex: 1, overflow: 'hidden', minWidth: 0 }}>
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: THEME.text.primary,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {announcement.title}
                  </h3>
                  <div style={{ 
                    display: 'flex', 
                    gap: '16px',
                    color: THEME.text.tertiary,
                    fontSize: '14px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{ whiteSpace: 'nowrap' }}>{announcement.company}</span>
                    <span style={{ whiteSpace: 'nowrap' }}>{announcement.date}</span>
                    <span style={{ whiteSpace: 'nowrap' }}>{announcement.amount} 万</span>
                  </div>
                </div>
                <div style={{
                  backgroundColor: THEME.background,
                  color: THEME.button.primary,
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  border: `1px solid ${THEME.button.primary}`,
                  whiteSpace: 'nowrap',
                  marginLeft: '16px',
                  flexShrink: 0
                }}>
                  {announcement.type}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search filters */}
        <div style={{ 
          backgroundColor: THEME.cardBg,
          borderRadius: '8px',
          padding: '24px',
          width: '100%',
          boxSizing: 'border-box',
          maxWidth: '100%'
        }}>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: 'bold',
            marginBottom: '16px',
            color: THEME.text.primary
          }}>
            招投标筛选
          </h3>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                color: THEME.text.secondary,
                fontSize: '14px'
              }}>
                公告名称
              </label>
              <input 
                type="text"
                value={searchParams.name}
                onChange={(e) => handleSearchParamChange('name', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  backgroundColor: THEME.background,
                  border: `1px solid ${THEME.border}`,
                  borderRadius: '4px',
                  color: THEME.text.primary,
                  boxSizing: 'border-box'
                }}
                placeholder="输入关键词"
              />
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                color: THEME.text.secondary,
                fontSize: '14px'
              }}>
                招标单位
              </label>
              <input 
                type="text"
                value={searchParams.company}
                onChange={(e) => handleSearchParamChange('company', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  backgroundColor: THEME.background,
                  border: `1px solid ${THEME.border}`,
                  borderRadius: '4px',
                  color: THEME.text.primary,
                  boxSizing: 'border-box'
                }}
                placeholder="输入单位名称"
              />
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                color: THEME.text.secondary,
                fontSize: '14px'
              }}>
                项目所在地
              </label>
              <select
                value={searchParams.location}
                onChange={(e) => handleSearchParamChange('location', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  backgroundColor: THEME.background,
                  border: `1px solid ${THEME.border}`,
                  borderRadius: '4px',
                  color: THEME.text.primary,
                  boxSizing: 'border-box'
                }}
              >
                <option value="">全部地区</option>
                <option value="北京">北京</option>
                <option value="上海">上海</option>
                <option value="深圳">深圳</option>
                <option value="广州">广州</option>
              </select>
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                color: THEME.text.secondary,
                fontSize: '14px'
              }}>
                行业分类
              </label>
              <select
                value={searchParams.industry}
                onChange={(e) => handleSearchParamChange('industry', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  backgroundColor: THEME.background,
                  border: `1px solid ${THEME.border}`,
                  borderRadius: '4px',
                  color: THEME.text.primary,
                  boxSizing: 'border-box'
                }}
              >
                <option value="">全部行业</option>
                <option value="信息技术">信息技术</option>
                <option value="医疗健康">医疗健康</option>
                <option value="智能制造">智能制造</option>
                <option value="新能源">新能源</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  color: THEME.text.secondary,
                  fontSize: '14px'
                }}>
                  金额下限
                </label>
                <input 
                  type="text"
                  value={searchParams.amountMin}
                  onChange={(e) => handleSearchParamChange('amountMin', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    backgroundColor: THEME.background,
                    border: `1px solid ${THEME.border}`,
                    borderRadius: '4px',
                    color: THEME.text.primary,
                    boxSizing: 'border-box'
                  }}
                  placeholder="最小金额"
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  color: THEME.text.secondary,
                  fontSize: '14px'
                }}>
                  金额上限
                </label>
                <input 
                  type="text"
                  value={searchParams.amountMax}
                  onChange={(e) => handleSearchParamChange('amountMax', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    backgroundColor: THEME.background,
                    border: `1px solid ${THEME.border}`,
                    borderRadius: '4px',
                    color: THEME.text.primary,
                    boxSizing: 'border-box'
                  }}
                  placeholder="最大金额"
                />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  color: THEME.text.secondary,
                  fontSize: '14px'
                }}>
                  开始日期
                </label>
                <input 
                  type="date"
                  value={searchParams.dateStart}
                  onChange={(e) => handleSearchParamChange('dateStart', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    backgroundColor: THEME.background,
                    border: `1px solid ${THEME.border}`,
                    borderRadius: '4px',
                    color: THEME.text.primary,
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  color: THEME.text.secondary,
                  fontSize: '14px'
                }}>
                  结束日期
                </label>
                <input 
                  type="date"
                  value={searchParams.dateEnd}
                  onChange={(e) => handleSearchParamChange('dateEnd', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    backgroundColor: THEME.background,
                    border: `1px solid ${THEME.border}`,
                    borderRadius: '4px',
                    color: THEME.text.primary,
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              gap: '12px',
              marginTop: '8px'
            }}>
              <button
                onClick={handleSearch}
                style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: THEME.button.primary,
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = THEME.button.primaryHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = THEME.button.primary;
                }}
              >
                立即筛选
              </button>
              <button
                onClick={handleReset}
                style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: 'transparent',
                  color: THEME.text.secondary,
                  border: `1px solid ${THEME.border}`,
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                重置条件
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCooperation; 