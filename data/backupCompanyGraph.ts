import { GraphData } from '../types/graph';

export const backupCompanyGraphData: { [key: string]: GraphData } = {
  "BK001": {
    nodes: [
      {
        id: "天风证券",
        category: "上市后备",
        industry: "金融业",
        relation: "总部",
        info: {
          revenue: "50亿",
          employees: "2000+",
          industry: "金融服务",
          description: "天风证券股份有限公司是湖北省属唯一一家金融服务类企业湖北金融控股集团有限公司控股的证券公司。"
        }
      },
      {
        id: "中信建投",
        category: "合作伙伴",
        industry: "金融业",
        relation: "战略合作",
        info: {
          revenue: "200亿",
          employees: "5000+",
          industry: "金融服务",
          description: "中信建投证券股份有限公司"
        }
      },
      {
        id: "湖北金控",
        category: "股东",
        industry: "金融业",
        relation: "控股股东",
        info: {
          revenue: "100亿",
          employees: "1000+",
          industry: "金融服务",
          description: "湖北金融控股集团有限公司"
        }
      },
      {
        id: "天风天睿",
        category: "子公司",
        industry: "金融业",
        relation: "全资子公司",
        info: {
          revenue: "10亿",
          employees: "200+",
          industry: "投资管理",
          description: "天风天睿投资股份有限公司"
        }
      }
    ],
    links: [
      {
        source: "天风证券",
        target: "中信建投",
        relation: "战略合作"
      },
      {
        source: "湖北金控",
        target: "天风证券",
        relation: "控股"
      },
      {
        source: "天风证券",
        target: "天风天睿",
        relation: "全资控股"
      }
    ],
    recommendations: []
  },
  "BK002": {
    nodes: [
      {
        id: "光科全息",
        category: "上市后备",
        industry: "信息技术",
        relation: "总部",
        info: {
          revenue: "15亿",
          employees: "300+",
          industry: "全息技术",
          description: "深圳市光科全息技术有限公司设立于2015年6月，是一家专注于全息显示技术研发和应用的高科技企业。"
        }
      },
      {
        id: "中科院光电所",
        category: "合作伙伴",
        industry: "科研机构",
        relation: "技术合作",
        info: {
          description: "中国科学院光电技术研究所"
        }
      },
      {
        id: "深创投",
        category: "股东",
        industry: "金融业",
        relation: "投资方",
        info: {
          description: "深圳市创新投资集团有限公司"
        }
      }
    ],
    links: [
      {
        source: "光科全息",
        target: "中科院光电所",
        relation: "技术合作"
      },
      {
        source: "深创投",
        target: "光科全息",
        relation: "投资"
      }
    ],
    recommendations: []
  },
  "BK003": {
    nodes: [
      {
        id: "恒信卫星",
        category: "上市后备",
        industry: "信息技术",
        relation: "总部",
        info: {
          revenue: "12亿",
          employees: "250+",
          industry: "卫星通信",
          description: "上海恒信卫星科技有限公司聚焦于卫星产业的投资及卫星通信服务。"
        }
      },
      {
        id: "中国航天科技集团",
        category: "合作伙伴",
        industry: "制造业",
        relation: "技术合作",
        info: {
          description: "中国航天科技集团有限公司"
        }
      },
      {
        id: "上海产业投资基金",
        category: "股东",
        industry: "金融业",
        relation: "投资方",
        info: {
          description: "上海市产业转型升级投资基金"
        }
      }
    ],
    links: [
      {
        source: "恒信卫星",
        target: "中国航天科技集团",
        relation: "技术合作"
      },
      {
        source: "上海产业投资基金",
        target: "恒信卫星",
        relation: "投资"
      }
    ],
    recommendations: []
  },
  "BK004": {
    nodes: [
      {
        id: "安宇科技",
        category: "上市后备",
        industry: "制造业",
        relation: "总部",
        info: {
          revenue: "20亿",
          employees: "450+",
          industry: "锂电池",
          description: "发行人2021年通过实施重大资产重组，使得公司从原有的传统制造业转型为新能源锂电池制造企业。"
        }
      },
      {
        id: "宁德时代",
        category: "合作伙伴",
        industry: "制造业",
        relation: "战略合作",
        info: {
          description: "宁德时代新能源科技股份有限公司"
        }
      },
      {
        id: "安徽省投资集团",
        category: "股东",
        industry: "金融业",
        relation: "控股股东",
        info: {
          description: "安徽省投资集团控股有限公司"
        }
      },
      {
        id: "安宇储能",
        category: "子公司",
        industry: "制造业",
        relation: "全资子公司",
        info: {
          description: "安宇储能科技有限公司"
        }
      }
    ],
    links: [
      {
        source: "安宇科技",
        target: "宁德时代",
        relation: "战略合作"
      },
      {
        source: "安徽省投资集团",
        target: "安宇科技",
        relation: "控股"
      },
      {
        source: "安宇科技",
        target: "安宇储能",
        relation: "全资控股"
      }
    ],
    recommendations: []
  },
  "BK005": {
    nodes: [
      {
        id: "诺声科技",
        category: "上市后备",
        industry: "信息技术",
        relation: "总部",
        info: {
          revenue: "8亿",
          employees: "180+",
          industry: "工业物联网",
          description: "诺声科技是一家声学AI技术服务商，专注于从事声学检测及智能语音交互解决方案的研发。"
        }
      },
      {
        id: "中国科学院声学研究所",
        category: "合作伙伴",
        industry: "科学研究",
        relation: "技术合作",
        info: {
          description: "中国科学院声学研究所"
        }
      },
      {
        id: "北京启迪创投",
        category: "股东",
        industry: "金融业",
        relation: "投资方",
        info: {
          description: "北京启迪创业投资有限公司"
        }
      }
    ],
    links: [
      {
        source: "诺声科技",
        target: "中国科学院声学研究所",
        relation: "技术合作"
      },
      {
        source: "北京启迪创投",
        target: "诺声科技",
        relation: "投资"
      }
    ],
    recommendations: []
  },
  "BK006": {
    nodes: [
      {
        id: "阳谷华泰",
        category: "上市后备",
        industry: "制造业",
        relation: "总部",
        info: {
          revenue: "32亿",
          employees: "1200+",
          industry: "企业服务",
          description: "公司是中国橡胶助剂行业骨干企业、中国橡胶工业协会副会长单位。"
        }
      },
      {
        id: "中国橡胶工业协会",
        category: "合作伙伴",
        industry: "社会团体",
        relation: "行业合作",
        info: {
          description: "中国橡胶工业协会"
        }
      },
      {
        id: "山东发展投资",
        category: "股东",
        industry: "金融业",
        relation: "战略投资",
        info: {
          description: "山东省发展投资有限公司"
        }
      }
    ],
    links: [
      {
        source: "阳谷华泰",
        target: "中国橡胶工业协会",
        relation: "行业合作"
      },
      {
        source: "山东发展投资",
        target: "阳谷华泰",
        relation: "战略投资"
      }
    ],
    recommendations: []
  },
  "BK007": {
    nodes: [
      {
        id: "俊来也",
        category: "上市后备",
        industry: "信息技术",
        relation: "总部",
        info: {
          revenue: "5亿",
          employees: "120+",
          industry: "教育培训",
          description: "俊来也是一家校园服务平台开发商及运营商，形成了以校园生活服务为核心的产品矩阵。"
        }
      },
      {
        id: "腾讯",
        category: "合作伙伴",
        industry: "信息技术",
        relation: "战略合作",
        info: {
          description: "腾讯科技（深圳）有限公司"
        }
      },
      {
        id: "红杉资本",
        category: "股东",
        industry: "金融业",
        relation: "投资方",
        info: {
          description: "红杉资本中国基金"
        }
      }
    ],
    links: [
      {
        source: "俊来也",
        target: "腾讯",
        relation: "战略合作"
      },
      {
        source: "红杉资本",
        target: "俊来也",
        relation: "投资"
      }
    ],
    recommendations: []
  },
  "BK008": {
    nodes: [
      {
        id: "云辅材",
        category: "上市后备",
        industry: "信息技术",
        relation: "总部",
        info: {
          revenue: "18亿",
          employees: "320+",
          industry: "房地产",
          description: "云辅材是一个高科技建材配送服务商，是全国建材配送行业领军企业。"
        }
      },
      {
        id: "万科",
        category: "合作伙伴",
        industry: "房地产",
        relation: "战略合作",
        info: {
          description: "万科企业股份有限公司"
        }
      },
      {
        id: "武汉产业基金",
        category: "股东",
        industry: "金融业",
        relation: "投资方",
        info: {
          description: "武汉市产业发展基金"
        }
      }
    ],
    links: [
      {
        source: "云辅材",
        target: "万科",
        relation: "战略合作"
      },
      {
        source: "武汉产业基金",
        target: "云辅材",
        relation: "投资"
      }
    ],
    recommendations: []
  },
  "BK009": {
    nodes: [
      {
        id: "彭立生物",
        category: "上市后备",
        industry: "制造业",
        relation: "总部",
        info: {
          revenue: "12亿",
          employees: "250+",
          industry: "医药健康",
          description: "彭立生物成立于2008年，是一家综合性的临床前CRO公司，专注于新药研发服务。"
        }
      },
      {
        id: "复旦大学医学院",
        category: "合作伙伴",
        industry: "科学研究",
        relation: "研发合作",
        info: {
          description: "复旦大学医学院"
        }
      },
      {
        id: "上海医药集团",
        category: "合作伙伴",
        industry: "医药健康",
        relation: "战略合作",
        info: {
          description: "上海医药集团股份有限公司"
        }
      },
      {
        id: "君联资本",
        category: "股东",
        industry: "金融业",
        relation: "投资方",
        info: {
          description: "北京君联资本管理有限公司"
        }
      }
    ],
    links: [
      {
        source: "彭立生物",
        target: "复旦大学医学院",
        relation: "研发合作"
      },
      {
        source: "彭立生物",
        target: "上海医药集团",
        relation: "战略合作"
      },
      {
        source: "君联资本",
        target: "彭立生物",
        relation: "投资"
      }
    ],
    recommendations: []
  },
  "BK010": {
    nodes: [
      {
        id: "友杰智新",
        category: "上市后备",
        industry: "信息技术",
        relation: "总部",
        info: {
          revenue: "7亿",
          employees: "150+",
          industry: "智能交通",
          description: "深圳市友杰智新科技有限公司扎根声学，服务AI创新产品研发，是智能交通领域的技术创新者。"
        }
      },
      {
        id: "华为",
        category: "合作伙伴",
        industry: "信息技术",
        relation: "技术合作",
        info: {
          description: "华为技术有限公司"
        }
      },
      {
        id: "深圳交通局",
        category: "客户",
        industry: "政府机构",
        relation: "服务客户",
        info: {
          description: "深圳市交通运输局"
        }
      },
      {
        id: "松禾资本",
        category: "股东",
        industry: "金融业",
        relation: "投资方",
        info: {
          description: "深圳市松禾资本管理有限公司"
        }
      }
    ],
    links: [
      {
        source: "友杰智新",
        target: "华为",
        relation: "技术合作"
      },
      {
        source: "友杰智新",
        target: "深圳交通局",
        relation: "服务提供"
      },
      {
        source: "松禾资本",
        target: "友杰智新",
        relation: "投资"
      }
    ],
    recommendations: []
  }
};

// Add more company graph data as needed 