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

const colorIntensity = {
  "50": { label: "50" },
  "100": { label: "100" },
  "200": { label: "200" },
  "300": { label: "300" },
  "400": { label: "400" },
  "500": { label: "500" },
  "600": { label: "600" },
  "700": { label: "700" },
  "800": { label: "800" },
  "900": { label: "900" },
};

const colorOpacity = {
  "0": { label: "0" },
  "25": { label: "25" },
  "50": { label: "50" },
  "75": { label: "75" },
  "100": { label: "100" },
};

const colors = {
  transparent: { label: "Transparent" },
  current: { label: "Current" },
  black: { label: "Black" },
  white: { label: "White" },
  gray: { label: "Gray" },
  neutral: { label: "Neutral" },
  slate: { label: "Slate" },
  zinc: { label: "Zinc" },
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

const tailwindSchema = {
  text: {
    color: colors,
    intensity: colorIntensity,
    opacity: colorOpacity,
    size: {
      xs: { label: "X Small" },
      sm: { label: "Small" },
      base: { label: "Base" },
      lg: { label: "Large" },
      xl: { label: "XL" },
      "2xl": { label: "2XL" },
      "3xl": { label: "3XL" },
      "4xl": { label: "4XL" },
      "5xl": { label: "5XL" },
      "6xl": { label: "6XL" },
    },
    align: {
      left: { label: "Left" },
      right: { label: "Right" },
      center: { label: "Center" },
      justify: { label: "Justify" },
    },
  },
  font: {
    style: {
      normal: { label: "Normal" },
      bold: { label: "Bold" },
      semibold: { label: "Semibold" },
      extrabold: { label: "Extra bold" },
      medium: { label: "Medium" },
      light: { label: "Light" },
      thin: { label: "Thin" },
      "font-hairline": { label: "Hairline" },
    },
  },
  bg: {
    color: colors,
    intensity: colorIntensity,
    opacity: colorOpacity,
  },
  border: {
    size: {
      "0": { label: "0" },
      "1": { label: "1" },
      "2": { label: "2" },
      "4": { label: "4" },
      "8": { label: "8" },
    },
    color: colors,
    intensity: colorIntensity,
    opacity: colorOpacity,
  },
  outline: {
    size: {
      "0": { label: "0" },
      "1": { label: "1" },
      "2": { label: "2" },
      "4": { label: "4" },
      "8": { label: "8" },
    },
    color: colors,
    intensity: colorIntensity,
    opacity: colorOpacity,
  },
  tracking: {
    normal: { label: "Normal" },
    tighter: { label: "Tighter" },
    tight: { label: "Tight" },
    wide: { label: "Wide" },
    wider: { label: "Wider" },
    widest: { label: "Widest" },
  },
  leading: {
    none: { label: "None" },
    tight: { label: "Tight" },
    snug: { label: "Snug" },
    normal: { label: "Normal" },
    relaxed: { label: "Relaxed" },
    loose: { label: "Loose" },
    "3": { label: "3" },
    "4": { label: "4" },
    "5": { label: "5" },
    "6": { label: "6" },
    "7": { label: "7" },
    "8": { label: "8" },
    "9": { label: "9" },
    "10": { label: "10" },
  },
  shadow: {
    none: { label: "None" },
    shadow: { label: "Normal" },
    xs: { label: "X Small" },
    sm: { label: "Small" },
    md: { label: "Medium" },
    lg: { label: "Large" },
    xl: { label: "XL" },
    "2xl": { label: "2XL" },
    inner: { label: "Inner" },
    outline: { label: "Outline" },
  },
  h: {
    full: { label: "Full" },
    screen: { label: "Screen" },
    auto: { label: "Auto" },
    px: { label: "Px" },
    "0": { label: "0" },
    "1": { label: "1" },
    "2": { label: "2" },
    "3": { label: "3" },
    "4": { label: "4" },
    "5": { label: "5" },
    "6": { label: "6" },
    "8": { label: "8" },
    "10": { label: "10" },
    "12": { label: "12" },
    "20": { label: "20" },
    "24": { label: "24" },
    "32": { label: "32" },
    "40": { label: "40" },
    "48": { label: "48" },
    "56": { label: "56" },
    "64": { label: "64" },
  },
  w: {
    full: { label: "Full" },
    screen: { label: "Screen" },
    auto: { label: "Auto" },
    px: { label: "Px" },

    "1/2": { label: "1/2" },
    "1/3": { label: "1/3" },
    "2/3": { label: "2/3" },
    "1/4": { label: "1/4" },
    "2/4": { label: "2/4" },
    "3/4": { label: "3/4" },
    "1/5": { label: "1/5" },
    "2/5": { label: "2/5" },
    "3/5": { label: "3/5" },
    "4/5": { label: "4/5" },
    "1/6": { label: "1/6" },
    "2/6": { label: "2/6" },
    "3/6": { label: "3/6" },
    "4/6": { label: "4/6" },
    "5/6": { label: "5/6" },
    "1/12": { label: "1/12" },
    "2/12": { label: "2/12" },
    "3/12": { label: "3/12" },
    "4/12": { label: "4/12" },
    "5/12": { label: "5/12" },
    "6/12": { label: "6/12" },
    "7/12": { label: "7/12" },
    "8/12": { label: "8/12" },
    "9/12": { label: "9/12" },
    "10/12": { label: "10/12" },
    "11/12": { label: "11/12" },

    "0": { label: "0" },
    "1": { label: "1" },
    "2": { label: "2" },
    "3": { label: "3" },
    "4": { label: "4" },
    "5": { label: "5" },
    "6": { label: "6" },
    "8": { label: "8" },
    "10": { label: "10" },
    "12": { label: "12" },
    "16": { label: "16" },
    "20": { label: "20" },
    "24": { label: "24" },
    "32": { label: "32" },
    "40": { label: "40" },
    "48": { label: "48" },
    "56": { label: "56" },
    "64": { label: "64" },
  },
  "grid-cols": {
    none: { label: "None" },
    "1": { label: "1" },
    "2": { label: "2" },
    "3": { label: "3" },
    "4": { label: "4" },
    "5": { label: "5" },
    "6": { label: "6" },
    "7": { label: "7" },
    "8": { label: "8" },
    "9": { label: "9" },
    "10": { label: "10" },
    "11": { label: "11" },
    "12": { label: "12" },
  },

  lines: {
    underline: { label: "Underline" },
    "line-through": { label: "Line through" },
    "no-underline": { label: "None" },
  },
  caseTypes: {
    "normal-case": { label: "Normal" },
    lowercase: { label: "Lowercase" },
    uppercase: { label: "Uppercase" },
    capitalize: { label: "Capitalize" },
  },

  display: {
    flex: { label: "Flex" },
    grid: { label: "Grid" },
    block: { label: "Block" },
    inline: { label: "Inline" },
    "inline-block": { label: "Inline Block" },
    absolute: { label: "Absolute" },
    relative: { label: "Relative" },
    fixed: { label: "Fixed" },
    static: { label: "Static" },
    none: { label: "None" },
  },
};

export const outerClassName = "flex w-full gap-1 mb-2 flex-col";
export const labelClassName = "flex text-xs opacity-50";
export const inputClassName = "relative";

/*
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
*/

export const boxClasses = {
  "className:display": {
    type: "Select",
    meta: {
      items: tailwindSchema.display,
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
      items: tailwindSchema.bg.color,
      label: "Background Color",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:w": {
    type: "Select",
    meta: {
      items: tailwindSchema.w,
      label: "Width",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:h": {
    type: "Select",
    meta: {
      items: tailwindSchema.h,
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
      items: tailwindSchema.shadow,
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
      items: tailwindSchema.text.color,
      label: "Text Color",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:text-intensity": {
    type: "Select",
    meta: {
      items: tailwindSchema.text.intensity,
      label: "Text Color Intensity",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:text-opacity": {
    type: "Select",
    meta: {
      items: tailwindSchema.text.opacity,
      label: "Text Color Opacity",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:font-style": {
    type: "Select",
    meta: {
      items: tailwindSchema.font.style,
      label: "Font Style",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:text-size": {
    type: "Select",
    meta: {
      items: tailwindSchema.text.size,
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
      items: tailwindSchema.text.align,
      label: "Text Align",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:tracking": {
    type: "Select",
    meta: {
      items: tailwindSchema.tracking,
      label: "Letter Spacing",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
  "className:leading": {
    type: "Select",
    meta: {
      items: tailwindSchema.leading,
      label: "Line Spacing",
      tight: true,
      className: outerClassName,
      labelClassName: labelClassName,
      inputClassName: inputClassName,
    },
  },
};

export const getClassNames = (value) => {
  /*
  const newClassNames = Object.keys(value).reduce((acc, key) => {
    const _acc = acc;
    if (value[key] !== undefined && key.indexOf("className:") === 0)
      _acc[key] = value[key];
    return _acc;
  }, {});
  */

  const newClassArr = [];

  Object.keys(value).forEach((d) => {
    console.log(d);
    console.log(value[d]);
    // newClassArr.push(newClassNames[d]);
  });

  console.log(newClassArr);

  return newClassArr.join(" ");
};
