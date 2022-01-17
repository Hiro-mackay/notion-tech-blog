import Client from './Client';
import { BaseBlock } from './types';

export const getBlocks = async (blockId: string, pageSize: number = 50) => {
  const res = await Client.blocks.children.list({
    block_id: blockId,
    page_size: pageSize,
  });

  return res.results as Array<BaseBlock>;
};
