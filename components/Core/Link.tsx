import React from "react";
import NextLink from "next/link";

export interface LinkProps {
  href: string;
  className?: string;
  "aria-label"?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | number
    | boolean
    | null
    | undefined;
}

export const Link = React.forwardRef((props: LinkProps, ref: any) => (
  <NextLink href={props.href}>
    <a
      ref={ref}
      onClick={() => props.onClick}
      className={props.className}
      arial-label={props["aria-label"] ? props["aria-label"] : undefined}
    >
      {props.children}

      {!props.children && "Hyperlink Text"}
    </a>
  </NextLink>
));
