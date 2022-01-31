import Client from './Client';
import { BaseBlock } from './types';

export const getBlocks = async (blockId: string, pageSize: number = 50) => {
  const res = await Client.blocks.children.list({
    block_id: blockId
  });

  return res.results as Array<BaseBlock>;
};
