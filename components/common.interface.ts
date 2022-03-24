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

const baseColors = {
  transparent: { label: "Transparent" },
  current: { label: "Current" },
  black: { label: "Black" },
  white: { label: "White" },
};

const colors = {
  slate: { label: "Slate" },
  gray: { label: "Gray" },
  zinc: { label: "Zinc" },
  neutral: { label: "Neutral" },
  stone: { label: "Stone" },
  red: { label: "Red" },
  orange: { label: "Orange" },
  amber: { label: "Amber" },
  yellow: { label: "Yellow" },
  lime: { label: "Lime" },
  green: { label: "Green" },
  emerald: { label: "Emerald" },
  teal: { label: "Teal" },
  cyan: { label: "Cyan" },
  sky: { label: "Sky" },
  blue: { label: "Blue" },
  indigo: { label: "Indigo" },
  violet: { label: "Violet" },
  purple: { label: "Purple" },
  fuchsia: { label: "Fuchsia" },
  pink: { label: "Pink" },
  rose: { label: "Rose" },
};

const colorIntensity = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const fontSizes = {
  "text-xs": { label: "X Small" },
  "text-sm": { label: "Small" },
  "text-base": { label: "Base" },
  "text-lg": { label: "Large" },
  "text-xl": { label: "XL" },
  "text-2xl": { label: "2XL" },
  "text-3xl": { label: "3XL" },
  "text-4xl": { label: "4XL" },
  "text-5xl": { label: "5XL" },
  "text-6xl": { label: "6XL" },
};

const leadingTypes = {
  "leading-none": { label: "None" },
  "leading-tight": { label: "Tight" },
  "leading-snug": { label: "Snug" },
  "leading-normal": { label: "Normal" },
  "leading-relaxed": { label: "Relaxed" },
  "leading-loose": { label: "Loose" },
  "leading-3": { label: "3" },
  "leading-4": { label: "4" },
  "leading-5": { label: "5" },
  "leading-6": { label: "6" },
  "leading-7": { label: "7" },
  "leading-8": { label: "8" },
  "leading-9": { label: "9" },
  "leading-10": { label: "10" },
};

const fontStyles = {
  "font-normal": { label: "Normal" },
  "font-bold": { label: "Bold" },
  "font-semibold": { label: "Semibold" },
  "font-extrabold": { label: "Extra bold" },
  "font-medium": { label: "Medium" },
  "font-light": { label: "Light" },
  "font-thin": { label: "Thin" },
  "font-hairline": { label: "Hairline" },
};

const textAlign = {
  "text-left": { label: "Left" },
  "text-right": { label: "Right" },
  "text-center": { label: "Center" },
  "text-justify": { label: "Justify" },
};

const textTracking = {
  "tracking-normal": { label: "Normal" },
  "tracking-tighter": { label: "Tighter" },
  "tracking-tight": { label: "Tight" },
  "tracking-wide": { label: "Wide" },
  "tracking-wider": { label: "Wider" },
  "tracking-widest": { label: "Widest" },
};

const lines = {
  underline: { label: "Underline" },
  "line-through": { label: "Line through" },
  "no-underline": { label: "None" },
};

const caseTypes = {
  "normal-case": { label: "Normal" },
  lowercase: { label: "Lowercase" },
  uppwercase: { label: "Uppercase" },
  capitalize: { label: "Capitalize" },
};

const shadows = {
  "shadow-none": { label: "None" },
  shadow: { label: "Normal" },
  "shadow-xs": { label: "X Small" },
  "shadow-sm": { label: "Small" },
  "shadow-md": { label: "Medium" },
  "shadow-lg": { label: "Large" },
  "shadow-xl": { label: "XL" },
  "shadow-2xl": { label: "2XL" },
  "shadow-inner": { label: "Inner" },
  "shadow-outline": { label: "Outline" },
};

const heights = {
  "h-full": { label: "Full" },
  "h-screen": { label: "Screen" },
  "h-auto": { label: "Auto" },
  "h-px": { label: "Px" },

  "h-0": { label: "0" },
  "h-1": { label: "1" },
  "h-2": { label: "2" },
  "h-3": { label: "3" },
  "h-4": { label: "4" },
  "h-5": { label: "5" },
  "h-6": { label: "6" },
  "h-8": { label: "8" },
  "h-10": { label: "10" },
  "h-12": { label: "12" },
  "h-20": { label: "20" },
  "h-24": { label: "24" },
  "h-32": { label: "32" },
  "h-40": { label: "40" },
  "h-48": { label: "48" },
  "h-56": { label: "56" },
  "h-64": { label: "64" },
};

const displayTypes = {
  relative: { label: "Relative" },
  absolute: { label: "Absolute" },
  flex: { label: "Flex" },
  grid: { label: "Grid" },
  block: { label: "Block" },
  inline: { label: "Inline" },
  "inline-block": { label: "Inline Block" },
  static: { label: "Static" },
  fixed: { label: "Fixed" },
  none: { label: "None" },
};

const gridColumns = {
  "grid-cols-none": { label: "None" },
  "grid-cols-1": { label: "1" },
  "grid-cols-2": { label: "2" },
  "grid-cols-3": { label: "3" },
  "grid-cols-4": { label: "4" },
  "grid-cols-5": { label: "5" },
  "grid-cols-6": { label: "6" },
  "grid-cols-7": { label: "7" },
  "grid-cols-8": { label: "8" },
  "grid-cols-9": { label: "9" },
  "grid-cols-10": { label: "10" },
  "grid-cols-11": { label: "11" },
  "grid-cols-12": { label: "12" },
};

const widths = {
  "w-full": { label: "Full" },
  "w-screen": { label: "Screen" },
  "w-auto": { label: "Auto" },
  "w-px": { label: "Px" },

  "w-1/2": { label: "1/2" },
  "w-1/3": { label: "1/3" },
  "w-2/3": { label: "2/3" },
  "w-1/4": { label: "1/4" },
  "w-2/4": { label: "2/4" },
  "w-3/4": { label: "3/4" },
  "w-1/5": { label: "1/5" },
  "w-2/5": { label: "2/5" },
  "w-3/5": { label: "3/5" },
  "w-4/5": { label: "4/5" },
  "w-1/6": { label: "1/6" },
  "w-2/6": { label: "2/6" },
  "w-3/6": { label: "3/6" },
  "w-4/6": { label: "4/6" },
  "w-5/6": { label: "5/6" },
  "w-1/12": { label: "1/12" },
  "w-2/12": { label: "2/12" },
  "w-3/12": { label: "3/12" },
  "w-4/12": { label: "4/12" },
  "w-5/12": { label: "5/12" },
  "w-6/12": { label: "6/12" },
  "w-7/12": { label: "7/12" },
  "w-8/12": { label: "8/12" },
  "w-9/12": { label: "9/12" },
  "w-10/12": { label: "10/12" },
  "w-11/12": { label: "11/12" },

  "w-0": { label: "0" },
  "w-1": { label: "1" },
  "w-2": { label: "2" },
  "w-3": { label: "3" },
  "w-4": { label: "4" },
  "w-5": { label: "5" },
  "w-6": { label: "6" },
  "w-8": { label: "8" },
  "w-10": { label: "10" },
  "w-12": { label: "12" },
  "w-16": { label: "16" },
  "w-20": { label: "20" },
  "w-24": { label: "24" },
  "w-32": { label: "32" },
  "w-40": { label: "40" },
  "w-48": { label: "48" },
  "w-56": { label: "56" },
  "w-64": { label: "64" },
};

//const c = props.className.split(" ");
//console.log(c);

let textColors = { ...baseColors };
let bgColors = { ...baseColors };
let borderColors = { ...baseColors };
let outlineColors = { ...baseColors };

Object.keys(colors).forEach((c) => {
  colorIntensity.forEach((intensity) => {
    const lab = { ...colors[c] };
    lab.label = lab.label + " " + intensity;
    textColors["text-" + c + "-" + intensity] = lab;
    bgColors["bg-" + c + "-" + intensity] = lab;
    borderColors["border-" + c + "-" + intensity] = lab;
    outlineColors["outline-" + c + "-" + intensity] = lab;
  });
});

export const TailwindClasses = {
  text: { type: "Textarea", props: { label: "Text", tight: true } },
  textColor: {
    type: "Select",
    props: { items: textColors, label: "Text Color", tight: true },
  },
  textStyle: {
    type: "Select",
    props: { items: fontStyles, label: "Text Style", tight: true },
  },
  textSize: {
    type: "Select",
    props: { items: fontSizes, label: "Text Size", tight: true },
  },
  "text-align": {
    type: "Select",
    props: { items: textAlign, label: "Text Align", tight: true },
  },
  "text-tracking": {
    type: "Select",
    props: { items: textTracking, label: "Letter Spacing", tight: true },
  },
  "text-leading": {
    type: "Select",
    props: { items: leadingTypes, label: "Line Spacing", tight: true },
  },
  display: {
    type: "Select",
    props: { items: displayTypes, label: "Display", tight: true },
  },
  "bg-color": {
    type: "Select",
    props: { items: bgColors, label: "Background Color", tight: true },
  },
  width: {
    type: "Select",
    props: { items: widths, label: "Width", tight: true },
  },
  height: {
    type: "Select",
    props: { items: heights, label: "Height", tight: true },
  },
  shadow: {
    type: "Select",
    props: { items: shadows, label: "Shadow", tight: true },
  },
};
