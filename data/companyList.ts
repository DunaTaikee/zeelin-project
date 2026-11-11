export interface CompanyListItem {
  id: string;
  name: string;
  location: string;
  marketValue: number;
  currency: string;
  peRatio: number;
  revenue: number;
  revenueCurrency: string;
  netProfit: number;
  netProfitCurrency: string;
  comparableCompanies: string[];
  csrcCategory: string;
}

export const companyListData: CompanyListItem[] = [
  {
    id: "601398",
    name: "工商银行",
    location: "北京市西城区",
    marketValue: 24877.16,
    currency: "CNY",
    peRatio: 6.87,
    revenue: 8218.03,
    revenueCurrency: "CNY",
    netProfit: 3669.46,
    netProfitCurrency: "CNY",
    comparableCompanies: ["交通银行", "建设银行"],
    csrcCategory: "金融业 - 货币金融服务"
  },
  {
    id: "600941",
    name: "中国移动",
    location: "香港特别行政区",
    marketValue: 23238.18,
    currency: "CNY",
    peRatio: 17.51,
    revenue: 10407.59,
    revenueCurrency: "CNY",
    netProfit: 1385.26,
    netProfitCurrency: "CNY",
    comparableCompanies: ["中国联通", "中国电信"],
    csrcCategory: "信息技术 - 电信运营服务"
  },
  {
    id: "BJZX",
    name: "北京智芯科技",
    location: "北京市海淀区",
    marketValue: 15000.00,
    currency: "CNY",
    peRatio: 45.6,
    revenue: 2000.00,
    revenueCurrency: "CNY",
    netProfit: 500.00,
    netProfitCurrency: "CNY",
    comparableCompanies: ["智慧科技", "中科创新"],
    csrcCategory: "制造业 - 计算机、通信和其他电子设备制造业"
  },
  {
    id: "ZHKX",
    name: "智慧科技",
    location: "深圳市南山区",
    marketValue: 12000.00,
    currency: "CNY",
    peRatio: 42.3,
    revenue: 1500.00,
    revenueCurrency: "CNY",
    netProfit: 380.00,
    netProfitCurrency: "CNY",
    comparableCompanies: ["北京智芯科技", "中科创新"],
    csrcCategory: "制造业 - 计算机、通信和其他电子设备制造业"
  },
  {
    id: "ZKCX",
    name: "中科创新",
    location: "北京市海淀区",
    marketValue: 18000.00,
    currency: "CNY",
    peRatio: 35.2,
    revenue: 5000.00,
    revenueCurrency: "CNY",
    netProfit: 800.00,
    netProfitCurrency: "CNY",
    comparableCompanies: ["北京智芯科技", "智慧科技"],
    csrcCategory: "制造业 - 智能制造装备"
  },
  {
    id: "ZXGJ",
    name: "中芯国际",
    location: "上海市浦东新区",
    marketValue: 35000.00,
    currency: "CNY",
    peRatio: 28.4,
    revenue: 12000.00,
    revenueCurrency: "CNY",
    netProfit: 2200.00,
    netProfitCurrency: "CNY",
    comparableCompanies: ["华虹半导体", "长江存储"],
    csrcCategory: "制造业 - 集成电路制造"
  },
  {
    id: "CXTZ",
    name: "创芯投资",
    location: "北京市朝阳区",
    marketValue: 8000.00,
    currency: "CNY",
    peRatio: 22.1,
    revenue: 1200.00,
    revenueCurrency: "CNY",
    netProfit: 450.00,
    netProfitCurrency: "CNY",
    comparableCompanies: ["半导体产业基金", "集成电路基金"],
    csrcCategory: "金融业 - 创业投资"
  },
  {
    id: "ZXYJ",
    name: "智芯研究院",
    location: "北京市海淀区",
    marketValue: 3000.00,
    currency: "CNY",
    peRatio: 32.5,
    revenue: 500.00,
    revenueCurrency: "CNY",
    netProfit: 120.00,
    netProfitCurrency: "CNY",
    comparableCompanies: ["北京智芯科技", "中科创新"],
    csrcCategory: "科学研究和技术服务业 - 研究和试验发展"
  },
  {
    id: "ZXZZ",
    name: "智芯制造",
    location: "苏州工业园区",
    marketValue: 5000.00,
    currency: "CNY",
    peRatio: 25.8,
    revenue: 800.00,
    revenueCurrency: "CNY",
    netProfit: 180.00,
    netProfitCurrency: "CNY",
    comparableCompanies: ["中芯国际", "华虹半导体"],
    csrcCategory: "制造业 - 集成电路封装测试"
  },
  {
    id: "HHBD",
    name: "华虹半导体",
    location: "上海市张江高科技园区",
    marketValue: 28000.00,
    currency: "CNY",
    peRatio: 26.9,
    revenue: 9500.00,
    revenueCurrency: "CNY",
    netProfit: 1800.00,
    netProfitCurrency: "CNY",
    comparableCompanies: ["中芯国际", "长江存储"],
    csrcCategory: "制造业 - 集成电路制造"
  }
]; 