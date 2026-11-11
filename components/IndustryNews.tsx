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
  tag: {
    bg: '#EBF8FF',
    bgHover: '#BEE3F8',
    text: '#3182CE'
  },
  status: {
    upcoming: {
      bg: '#E6FFFA',
      text: '#319795'
    },
    ended: {
      bg: '#EDF2F7',
      text: '#718096'
    }
  },
  button: {
    primary: '#3182CE',
    primaryHover: '#4299E1'
  }
};

// Sample data for roadshow events
const roadshowEvents = [
  {
    id: '1',
    title: '智芯科技2024年度投资者交流会',
    company: '北京智芯科技',
    date: '2024-05-15',
    time: '14:00-16:00',
    location: '线上会议',
    status: 'upcoming',
    description: '公司管理层将就2024年一季度经营情况及未来发展战略与投资者进行深入交流。'
  },
  {
    id: '2',
    title: '中芯国际产能扩张计划说明会',
    company: '中芯国际',
    date: '2024-05-10',
    time: '10:00-11:30',
    location: '线上会议',
    status: 'ended',
    description: '详细介绍公司新一轮产能扩张计划，包括14nm和28nm制程产线建设进展。'
  },
  {
    id: '3',
    title: '智慧科技新品发布会',
    company: '智慧科技',
    date: '2024-05-20',
    time: '15:00-17:00',
    location: '北京国际会议中心',
    status: 'upcoming',
    description: '发布新一代边缘计算AI芯片，展示在物联网领域的最新技术突破。'
  }
];

// Sample data for industry news
const newsData = [
  {
    id: '1',
    title: '小米 Mi-BRAG 智能引擎亮相: 用 AI 问答代替产品说明书',
    time: '9 分钟前',
    source: '网易号-IT之家',
    summary: '小米官方今日介绍了Mi-BRAG知识库问答框架，该框架通过四大核心技术体系重构知识处理范式，已在公司多个场景中落地应用，包括小爱同学的个人信息问答、汽车问答助手、商品问答等。增强特定领域知识的准确性：大模型基于互联网公开数据，难以适配特点领域或者企业私有知识。RAG 技术...',
    tags: ['汽车', 'IT', '数据库']
  },
  {
    id: '2',
    title: '"闭源" 13个月后，Redis再开源，开发者怒了：一回生二回熟，真当我们忘了？',
    time: '12 分钟前',
    source: '36氪-科技',
    summary: '开源多年后又无反顾地走向"闭源"，如今辗转一年后又重拾开源大旗。作为主流的实时数据平台Redis的最新动态再次撬动技术圈，引发了不少关注。事实证明，Redis 公司低估了社区的反弹，许多开发者感觉到被"背刺"，尤其是那些曾为 Redis 贡献代码的人。虽然 Redis 最终选择了 SSPL，...',
    tags: ['开源', '开源软件', 'AWS']
  },
  {
    id: '3',
    title: '调研速递|小熊电器接受国联民生证券等61家机构调研 聚焦净利率恢复及未来增长要点',
    time: '13 分钟前',
    source: '新浪网-手机财经',
    summary: '5月6日，小熊电器股份有限公司通过电话会议形式，接受了国联民生证券、中信证券、华夏基金、东方基金等61家机构的调研。公司董事长、总经理李一峰，副总经理、董事会秘书宋钊，财务总监陈敏出席会议，就公司2025年一季度净利率恢复原因、未来增长策略等问题进行交流。公司未来几年在...',
    tags: ['电器', 'AI', '代工']
  }
];

const IndustryNews: React.FC = () => {
  return (
    <div style={{
      maxWidth: '960px',
      margin: '0 auto',
      padding: '24px',
      color: THEME.text.primary
    }}>
      {/* Roadshow Hall Section */}
      <section>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '32px',
          color: THEME.text.primary
        }}>
          路演大厅
        </h1>

        {/* Featured Event */}
        <div style={{
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: THEME.text.primary
          }}>
            近期重点活动
          </h2>
          <div style={{
            padding: '24px',
            backgroundColor: THEME.cardBg,
            borderRadius: '12px',
            border: `1px solid ${THEME.border}`,
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = THEME.button.primary;
            e.currentTarget.style.boxShadow = `0 0 10px rgba(58, 109, 240, 0.15)`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = THEME.border;
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '16px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: THEME.text.primary
                }}>
                  {roadshowEvents[0].title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: THEME.text.secondary,
                  marginBottom: '8px'
                }}>
                  {roadshowEvents[0].company}
                </p>
              </div>
              <div style={{
                padding: '4px 12px',
                backgroundColor: THEME.status.upcoming.bg,
                color: THEME.status.upcoming.text,
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                即将开始
              </div>
            </div>
            <div style={{
              fontSize: '14px',
              color: THEME.text.tertiary,
              marginBottom: '16px'
            }}>
              <div>时间：{roadshowEvents[0].date} {roadshowEvents[0].time}</div>
              <div>地点：{roadshowEvents[0].location}</div>
            </div>
            <p style={{
              fontSize: '15px',
              color: THEME.text.secondary,
              lineHeight: 1.5
            }}>
              {roadshowEvents[0].description}
            </p>
          </div>
        </div>

        {/* Event List */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: THEME.text.primary
          }}>
            全部活动
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {roadshowEvents.slice(1).map((event) => (
              <div
                key={event.id}
                style={{
                  padding: '16px',
                  backgroundColor: THEME.cardBg,
                  borderRadius: '8px',
                  border: `1px solid ${THEME.border}`,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = THEME.button.primary;
                  e.currentTarget.style.boxShadow = `0 0 10px rgba(58, 109, 240, 0.15)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = THEME.border;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginBottom: '4px',
                      color: THEME.text.primary
                    }}>
                      {event.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: THEME.text.secondary
                    }}>
                      {event.company}
                    </p>
                  </div>
                  <div style={{
                    padding: '4px 12px',
                    backgroundColor: event.status === 'upcoming' ? THEME.status.upcoming.bg : THEME.status.ended.bg,
                    color: event.status === 'upcoming' ? THEME.status.upcoming.text : THEME.status.ended.text,
                    borderRadius: '4px',
                    fontSize: '13px'
                  }}>
                    {event.status === 'upcoming' ? '即将开始' : '已结束'}
                  </div>
                </div>
                <div style={{
                  fontSize: '13px',
                  color: THEME.text.tertiary,
                  marginBottom: '8px'
                }}>
                  <div>时间：{event.date} {event.time}</div>
                  <div>地点：{event.location}</div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: THEME.text.secondary,
                  lineHeight: 1.5
                }}>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry News Section */}
      <section>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '32px',
          color: THEME.text.primary,
          borderTop: `1px solid ${THEME.border}`,
          paddingTop: '40px'
        }}>
          行业快讯专区
        </h1>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {newsData.map((news) => (
            <div
              key={news.id}
              style={{
                padding: '16px',
                backgroundColor: THEME.cardBg,
                borderRadius: '8px',
                border: `1px solid ${THEME.border}`,
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = THEME.button.primary;
                e.currentTarget.style.boxShadow = `0 0 10px rgba(58, 109, 240, 0.15)`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = THEME.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Title Section */}
              <div style={{ marginBottom: '12px' }}>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: THEME.text.primary,
                  marginBottom: '8px'
                }}>
                  {news.title}
                </h2>
                <div style={{
                  fontSize: '14px',
                  color: THEME.text.tertiary
                }}>
                  {news.time} | 来源：{news.source}
                </div>
              </div>

              {/* Summary Section */}
              <p style={{
                fontSize: '15px',
                color: THEME.text.secondary,
                marginBottom: '16px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: 1.5
              }}>
                {news.summary}
              </p>

              {/* Tags Section */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {news.tags.map((tag, index) => (
                  <button
                    key={index}
                    style={{
                      padding: '4px 12px',
                      backgroundColor: THEME.tag.bg,
                      color: THEME.tag.text,
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = THEME.tag.bgHover;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = THEME.tag.bg;
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustryNews; 