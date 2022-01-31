import { BaseBlock } from '../../../../lib/notion/types';

export type NotionComponentProps<T extends BaseBlock = BaseBlock> = { block: T };
