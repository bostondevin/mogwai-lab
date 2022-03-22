import { Button } from "./Button";
import { Icon } from "./Icon";
import { Div } from "./Div";

type InputWrapperProps = {
  buttonIcon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | number
    | boolean
    | null
    | undefined;
};

export const InputWrapper = (props: Partial<InputWrapperProps>) => {
  const clickButton = (e) => {
    props.onClick(e);
  };

  return (
    <Div className="relative">
      {props.children}
      {props.buttonIcon && (
        <Button
          onClick={clickButton}
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-2 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700"
        >
          <Icon className={props.buttonIcon} />
        </Button>
      )}
    </Div>
  );
};
