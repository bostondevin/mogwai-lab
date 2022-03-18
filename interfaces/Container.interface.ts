export type ContainerProps = {
  className?: string;
  style?: any;
  ariaLabel?: string;
  children?: React.ReactNode;
};

export type CommonEvents = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onPointerOver?: (event: React.MouseEvent<HTMLElement>) => void;
  onPointerOut?: (event: React.MouseEvent<HTMLElement>) => void;
};

export interface CommonContainerProps extends ContainerProps, CommonEvents {}

export type CommonInputProps = {
  id?: string;
  name?: string;
  value?: any;
  labelledby?: string;
  className?: string;
  style?: any;
  readOnly?: boolean;
  disabled?: boolean;
};
