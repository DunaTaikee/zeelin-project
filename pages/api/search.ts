import { NextApiRequest, NextApiResponse } from 'next';
import graphData from '../../data/graph.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prompt } = req.body;

  // Simple demo response based on the graph data
  const response = `基于图谱分析结果：\n\n`;
  const companies = graphData.nodes
    .filter(node => node.category === '上市公司')
    .map(node => node.id)
    .join('、');
  
  const suppliers = graphData.nodes
    .filter(node => node.category === '供应商')
    .map(node => node.id)
    .join('、');

  const executives = graphData.nodes
    .filter(node => node.category === '高管')
    .map(node => node.id)
    .join('、');

  const text = `${response}
发现的上市公司：${companies}
相关供应商：${suppliers}
关键高管：${executives}

查询内容："${prompt}"`;

  res.status(200).json({ text });
}
