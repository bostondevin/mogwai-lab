export type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export const Icon = (props: Partial<IconProps>) => {
  return <i {...props}></i>;
};
