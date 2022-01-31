const boldStyle = 'font-bold';
const codeStyles = 'font-mono	p-2 bg-grey-600 rounded-md';
const italicStyle = 'italic';
const lineThroughStyle = 'line-through';
const underlineStyle = 'underline';

export type ParagraphStyleType = 'bold' | 'code' | 'italic' | 'strikethrough' | 'underline';

export const Styles = {
  bold: boldStyle,
  code: codeStyles,
  italic: italicStyle,
  strikethrough: lineThroughStyle,
  underline: underlineStyle,
};

export const getParagraphStyle = (style: ParagraphStyleType) => {
  return Styles[style];
};
