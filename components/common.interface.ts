type InputType =
  | "text"
  | "number"
  | "tel"
  | "color"
  | "email"
  | "date"
  | "datetime-local"
  | "time"
  | "checkbox"
  | "radio"
  | "range"
  | "file";

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

export interface CommonInputProps {
  id?: string;
  name?: string;
  value?: any;
  "aria-labeled-by"?: string;
  className?: string;
  placeholder?: string;
  style?: any;
  tight?: boolean;
  disabled?: boolean;
}

export interface InputProps extends CommonInputProps {
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: InputType;
}

export interface TextareaProps extends CommonInputProps {
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
}

export interface SelectProps extends CommonInputProps, DataListProps {
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface DataListProps {
  id?: string;
  items?: any;
}

export interface ClassNamesProps {
  className?: string;
}

const cClasses =
  "w-full bg-white border hover:border-black/25 dark:border-black/0 dark:hover:border-black/50 dark:bg-black/25 placeholder-gray-300 rounded appearance-none focus:outline-none";

export const regularInputClasses = "text-base " + cClasses;
export const smallInputClasses = "text-xs " + cClasses;
