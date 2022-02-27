export type IconProps = {
  className: string;
};

export const Icon = (props: Partial<IconProps>) => {
  return <i className={props.className}></i>;
};
