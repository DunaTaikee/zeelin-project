export interface NodeInfo {
  revenue?: string;
  employees?: string;
  industry?: string;
  description: string;
  relatedNews?: string[];
  position?: string;
  education?: string;
  focus?: string;
  location?: string;
  capacity?: string;
  process?: string;
  orderValue?: string;
}

export interface GraphNode {
  id: string;
  category: string;
  relation: string;
  industry: string;
  info: NodeInfo;
}

export interface ForceGraphNode extends GraphNode {
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number;
  fy?: number;
  [key: string]: any;
}

export interface GraphLink {
  source: string;
  target: string;
  relation: string;
}

export interface Recommendation {
  query: string;
  response: {
    text: string;
    highlighted_nodes: string[];
  };
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
  recommendations: Recommendation[];
} 