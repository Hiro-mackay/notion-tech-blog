import { BaseBlock } from '../../types';

export type NotionComponentProps<T extends BaseBlock = BaseBlock> = { block: T };
