import { BaseBlock } from '../../../../lib/notion/types';
import { Block } from '../Block';

export type RendererProps = {
  blocks: Array<BaseBlock>;
};

export const Renderer = ({ blocks }: RendererProps) => {
  return (
    <>
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </>
  );
};
