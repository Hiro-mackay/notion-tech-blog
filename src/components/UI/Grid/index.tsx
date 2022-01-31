import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export type GridType = LayoutType & JustifyType & AlignType & GapType & ColumnType;

export const Grid = ({ children, ...props }: PropsWithChildren<GridType>) => {
  const layout = getLayoutType(props);
  const justifyType = getJustifyType(props);
  const alignType = getAlignType(props);
  const gap = getGridGap(props);
  const column = getColumn(props);

  return <div className={`${layout} ${justifyType} ${alignType} ${gap} ${column}`}>{children}</div>;
};

type LayoutType = { flex?: boolean };

const getLayoutType = ({ flex }: LayoutType) => {
  if (flex) {
    return styles.flex;
  }

  return styles.grid;
};

type JustifyType = {
  justify?: 'left' | 'center' | 'right';
};

const getJustifyType = ({ justify }: JustifyType): string => {
  if (justify) {
    return styles[`justify-${justify}`];
  }

  return styles['justify-left'];
};

type AlignType = {
  align?: 'top' | 'center' | 'end' | 'stretch';
};

const getAlignType = ({ align }: AlignType): string => {
  if (align) {
    return styles[`align-${align}`];
  }

  return styles['align-top'];
};

type GapType = {
  gap?: number;
};

const getGridGap = ({ gap }: GapType): string => {
  if (gap && 0 < gap && gap <= 20) {
    return styles[`gap-${gap}`];
  }

  return '';
};

/**
 * xs: 0px <
 * sm: 600px <
 * md: 900px <
 * lg: 1280px <
 * xl: 1536px <
 */
type ColumnType = { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };

const getColumn = (columns: ColumnType): string => {
  const xs = getColumnStyles('xs', columns.xs);
  const sm = getColumnStyles('sm', columns.sm);
  const md = getColumnStyles('md', columns.md);
  const lg = getColumnStyles('lg', columns.lg);
  const xl = getColumnStyles('xl', columns.xl);

  return xs + sm + md + lg + xl;
};

const getColumnStyles = (screen: string, col: number | undefined): string => {
  if (col && checkColumnRange(col)) {
    return `${styles[`${screen}-${col}`]} `;
  }

  return '';
};

const checkColumnRange = (col: number): boolean => {
  return 0 < col && col <= 12;
};
