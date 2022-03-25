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

export const TextTypes = {
  span: { label: "Span" },
  p: { label: "Paragraph" },
  legend: { label: "Legend" },
  label: { label: "Label" },
  h1: { label: "H1" },
  h2: { label: "H2" },
  h3: { label: "H3" },
  h4: { label: "H4" },
  h5: { label: "H5" },
  h6: { label: "H6" },
};

export const InputTypes = {
  text: { label: "Text" },
  number: { label: "Number" },
  tel: { label: "Phone" },
  color: { label: "Color" },
  email: { label: "Email" },
  date: { label: "Date" },
  "datetime-local": { label: "Date/Time" },
  time: { label: "Time" },
  checkbox: { label: "Checkbox" },
  radio: { label: "Radio" },
  range: { label: "Range" },
  file: { label: "Slate" },
};

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
  },
  colors = {
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
  },
  colorIntensity = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontSizes = {
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
  },
  leadingTypes = {
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
  },
  fontStyles = {
    "font-normal": { label: "Normal" },
    "font-bold": { label: "Bold" },
    "font-semibold": { label: "Semibold" },
    "font-extrabold": { label: "Extra bold" },
    "font-medium": { label: "Medium" },
    "font-light": { label: "Light" },
    "font-thin": { label: "Thin" },
    "font-hairline": { label: "Hairline" },
  },
  textAlign = {
    "text-left": { label: "Left" },
    "text-right": { label: "Right" },
    "text-center": { label: "Center" },
    "text-justify": { label: "Justify" },
  },
  textTracking = {
    "tracking-normal": { label: "Normal" },
    "tracking-tighter": { label: "Tighter" },
    "tracking-tight": { label: "Tight" },
    "tracking-wide": { label: "Wide" },
    "tracking-wider": { label: "Wider" },
    "tracking-widest": { label: "Widest" },
  },
  lines = {
    underline: { label: "Underline" },
    "line-through": { label: "Line through" },
    "no-underline": { label: "None" },
  },
  caseTypes = {
    "normal-case": { label: "Normal" },
    lowercase: { label: "Lowercase" },
    uppwercase: { label: "Uppercase" },
    capitalize: { label: "Capitalize" },
  },
  shadows = {
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
  },
  heights = {
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
  },
  displayTypes = {
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
  },
  gridColumns = {
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
  },
  widths = {
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

export const outerClassName = "flex w-full gap-1 mb-2 flex-col";
export const labelClassName = "flex text-xs opacity-50";
export const inputClassName = "relative";

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

export const boxClasses = {
  "className:display": {
    type: "Select",
    meta: {
      items: displayTypes,
      label: "Display",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:bg-color": {
    type: "Select",
    meta: {
      items: bgColors,
      label: "Background Color",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:width": {
    type: "Select",
    meta: {
      items: widths,
      label: "Width",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:height": {
    type: "Select",
    meta: {
      items: heights,
      label: "Height",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:shadow": {
    type: "Select",
    // options: { validators: Validators.required },
    meta: {
      items: shadows,
      label: "Shadow",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
};

export const textClasses = {
  type: {
    type: "Select",
    meta: {
      items: TextTypes,
      label: "Text Type",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:text-color": {
    type: "Select",
    meta: {
      items: textColors,
      label: "Text Color",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:text-style": {
    type: "Select",
    meta: {
      items: fontStyles,
      label: "Text Style",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:text-size": {
    type: "Select",
    meta: {
      items: fontSizes,
      label: "Text Size",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:text-align": {
    type: "Select",
    meta: {
      items: textAlign,
      label: "Text Align",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:text-tracking": {
    type: "Select",
    meta: {
      items: textTracking,
      label: "Letter Spacing",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:text-leading": {
    type: "Select",
    meta: {
      items: leadingTypes,
      label: "Line Spacing",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
};
