import { FileBlock } from '../../../../lib/Notion/Types';
import { NotionComponentProps } from './NotionComponentProps';
import Link from 'next/link';

export const FileRender = ({ block }: NotionComponentProps<FileBlock>) => {
  return (
    <div className="flex bg-gray-200 p-4 text-sm rounded-lg" role="alert">
      <Link href={block.file.file.url}>
        <a className="w-5 h-5 inline mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
      <div>
        <Link href={block.file.file.url}>
          <a>ファイルをダウンロードする</a>
        </Link>
      </div>
    </div>
  );
};
