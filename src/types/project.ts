export type BlockType = 
  | 'problem_statement'
  | 'strategy_design'
  | 'development_stack'
  | 'management_system'
  | 'infrastructure';

export interface BaseBlock {
  id: string;
  type: BlockType;
}

export interface ProblemStatementBlock extends BaseBlock {
  type: 'problem_statement';
  title: string;
  problem: string;
  impact?: string;
}

export interface StrategyDesignBlock extends BaseBlock {
  type: 'strategy_design';
  title: string;
  description: string;
  solutionText: string;
  assets: { src: string; alt: string; caption?: string }[];
}

export interface StackTechnology {
  name: string;
  iconName: string; // e.g. "FaReact", "SiNextdotjs" mapped in frontend
  reason: string;
}

export interface DevelopmentStackBlock extends BaseBlock {
  type: 'development_stack';
  title: string;
  description: string;
  architectureDescription: string;
  websiteUrl?: string;
  technologies: StackTechnology[];
  analytics?: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    loadTime: string;
  };
}

export interface ManagementSystemBlock extends BaseBlock {
  type: 'management_system';
  title: string;
  description: string;
  modules: { name: string; description: string; icon?: string }[];
  screenshots: { src: string; caption: string }[];
}

export interface InfrastructureBlock extends BaseBlock {
  type: 'infrastructure';
  title: string;
  description: string;
  tools: { name: string; description: string }[];
  metrics: { label: string; value: string; }[];
}

export type ProjectBlockContent =
  | ProblemStatementBlock
  | StrategyDesignBlock
  | DevelopmentStackBlock
  | ManagementSystemBlock
  | InfrastructureBlock;

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  client?: string;
  year: string;
  summary: string;
  blocks: ProjectBlockContent[];
}
