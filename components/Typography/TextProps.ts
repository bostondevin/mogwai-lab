type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "small"
  | "legend"
  | "label";

/* eslint-disable-next-line */
export interface TextProps {
  type: TextType;
  text?: string;
  id?: string;
  className?: string;
  //  children?: JSX.Element | JSX.Element[] | string | number | boolean | null | undefined
}
