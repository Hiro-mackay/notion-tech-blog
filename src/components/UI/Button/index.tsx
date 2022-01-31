import Link from 'next/link';
import { forwardRef, PropsWithChildren } from 'react';

export type ButtonProps = {
  href?: string;
  variant?: 'text' | 'contained' | 'outlined';
} & Omit<JSX.IntrinsicElements['button'], 'ref'>;

export const Button = ({ children, href, variant, ...props }: PropsWithChildren<ButtonProps>) => {
  if (href) {
    return (
      <LinkButton href={href} {...props}>
        {children}
      </LinkButton>
    );
  }
  return <PureButton {...props}>{children}</PureButton>;
};

const LinkButton = ({
  children,
  href,
  ...props
}: PropsWithChildren<Required<Pick<ButtonProps, 'href'>> & Omit<ButtonProps, 'href'>>) => {
  return (
    <Link href={href} passHref>
      <PureButton {...props}>{children}</PureButton>
    </Link>
  );
};

export const PureButton = forwardRef<HTMLButtonElement, PropsWithChildren<Omit<ButtonProps, 'href'>>>((props, ref) => {
  return (
    <button ref={ref} {...props}>
      {props.children}
    </button>
  );
});
