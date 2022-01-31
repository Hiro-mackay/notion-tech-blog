import { BaseBlock } from '../../../../lib/Notion/Types';

export type NotionComponentProps<T extends BaseBlock = BaseBlock> = { block: T };
