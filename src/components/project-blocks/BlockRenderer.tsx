'use client';

import { ProjectBlockContent } from '@/types/project';
import ProblemBlock from './ProblemBlock';
import DesignBlock from './DesignBlock';
import StackBlock from './StackBlock';
import AdminSystemBlock from './AdminSystemBlock';
import InfrastructureBlock from './InfrastructureBlock';

interface BlockRendererProps {
  blocks: ProjectBlockContent[];
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div className="flex flex-col gap-24 md:gap-32 w-full">
      {blocks.map((block) => {
        switch (block.type) {
          case 'problem_statement':
            return <ProblemBlock key={block.id} data={block} />;
          case 'strategy_design':
            return <DesignBlock key={block.id} data={block} />;
          case 'development_stack':
            return <StackBlock key={block.id} data={block} />;
          case 'management_system':
            return <AdminSystemBlock key={block.id} data={block} />;
          case 'infrastructure':
            return <InfrastructureBlock key={block.id} data={block} />;
          default:
            return null; // Unknown block type
        }
      })}
    </div>
  );
}
