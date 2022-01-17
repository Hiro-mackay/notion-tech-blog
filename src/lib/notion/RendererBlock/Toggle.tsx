import { useCallback, useState } from 'react';
import { renderer } from '../Render';
import { ToggleBlock } from '../types';
import { NotionComponentProps } from './Utiles/NotionComponentProps';
import { richTextRender } from './Utiles/richTextRender';

export const NotionToggle = ({ block }: NotionComponentProps<ToggleBlock>) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <div className="bg-white my-2 shadow-lg" x-data="accordion(1)">
      <div className="flex p-3 items-center font-semibold">
        <div className=" rounded-full border border-yellow-600 h-6 w-6" onClick={toggleHandle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-current cursor-pointer text-yellow-600 h-full w-full transform transition-transform duration-300 ${toggle && 'rotate-90'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="ml-4">{richTextRender(block.toggle.text)}</p>
      </div>
      <div className="border-l-2 border-purple-600 pl-2 overflow-hidden max-h-0 duration-500 transition-all">
        <div className="p-3">{renderer(block.toggle.children)}</div>
      </div>
    </div>
  );
};
