import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export type TypographyProps = {
  component?: ComponentType;
  variant?: VariantType;
  padding?: boolean;
} & AlignType &
  JSX.IntrinsicElements['div'];

export const Typography = ({ children, padding = true, className, ...props }: PropsWithChildren<TypographyProps>) => {
  const TagName = getTagName(props);
  const variatnType = getVariantStyles(props);
  const alignType = getAlignStyles(props);

  return (
    <TagName className={`${variatnType} ${alignType} ${padding ? styles.root : ''} ${className}`} {...props}>
      {children}
    </TagName>
  );
};

type VariantType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'subtitle'
  | 'body1'
  | 'body2'
  | 'caption';
type ComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div';
type AlignType = { align?: 'left' | 'center' | 'right' };
type GetComponentProps = Pick<TypographyProps, 'component'> & Pick<TypographyProps, 'variant'>;

const ComponentMap: { [key: string]: VariantType } = {
  h1: 'heading1',
  h2: 'heading2',
  h3: 'heading3',
  h4: 'heading4',
  h5: 'heading5',
  p: 'body1',
  span: 'body1',
  div: 'body1'
};

const VariantMap: { [key: string]: ComponentType } = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  caption: 'p'
};

const getVariantStyles = ({ variant, component = 'p' }: GetComponentProps) => {
  const styleName = variant || ComponentMap[component];
  return `${styles[styleName]}`;
};

const getTagName = ({ variant = 'body1', component }: GetComponentProps) => {
  return component || VariantMap[variant];
};

const getAlignStyles = ({ align }: AlignType) => {
  if (!align) return styles.left;

  return styles[align];
};
