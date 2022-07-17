import { ContentEditableEvent } from "react-contenteditable";

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
  textarea: { label: "Text Area" },
  number: { label: "Number" },
  tel: { label: "Phone" },
  password: { label: "Password" },
  color: { label: "Color" },
  email: { label: "Email" },
  date: { label: "Date" },
  "datetime-local": { label: "Date/Time" },
  time: { label: "Time" },
  checkbox: { label: "Checkbox" },
  radio: { label: "Radio" },
  range: { label: "Range" },
  file: { label: "File" },
  select: { label: "Select" },
};

export const ContainerTypes = {
  div: { label: "Div" },
  fieldset: { label: "Fieldset" },
  article: { label: "Article" },
  section: { label: "Section" },
  header: { label: "Header" },
  nav: { label: "Nav" },
  aside: { label: "Aside" },
  main: { label: "Main" },
  footer: { label: "Footer" },
};

export const ButtonTypes = {
  button: { label: "Button" },
  submit: { label: "Submit" },
  reset: { label: "Reset" },
};

export const ListTypes = {
  ul: { label: "Unordered" },
  ol: { label: "Ordered" },
};

export const ActionButtonTypes = {
  button: { label: "Button" },
  a: { label: "Link" },
};

export type CommonProps = {
  id?: string;
  className?: string;
  style?: any;
  "aria-label"?: string;
  children?: any;
};

export type CommonEvents = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onPointerOver?: (event: React.MouseEvent<HTMLElement>) => void;
  onPointerOut?: (event: React.MouseEvent<HTMLElement>) => void;
};

export interface TextProps extends CommonProps, CommonEvents {
  onChange?: (event: ContentEditableEvent) => void;
  type:
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
  text?: string;
  disabled?: boolean;
}

export interface IconProps extends CommonProps, CommonEvents {
  "aria-hidden"?: boolean;
}

export interface ImageProps extends CommonProps, CommonEvents {
  src?: string;
  alt?: string;
}

export interface VideoProps extends CommonProps, CommonEvents {
  videoId?: string;
}

export interface FormProps extends CommonProps, CommonEvents {
  onSubmit?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface ContainerProps extends CommonProps, CommonEvents {
  type?:
    | "div"
    | "header"
    | "nav"
    | "main"
    | "aside"
    | "footer"
    | "fieldset"
    | "section"
    | "article";
}

export interface ListProps extends CommonProps, CommonEvents {
  type?: "ol" | "ul";
}

export interface ButtonProps extends CommonProps, CommonEvents {
  type?: "button" | "a";
  buttonType?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
}

export interface CommonInputProps extends CommonProps, CommonEvents {
  name?: string;
  value?: any;
  placeholder?: string;
  tight?: boolean;
  disabled?: boolean;
}

export interface InputProps extends CommonInputProps {
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  type:
    | "text"
    | "textarea"
    | "select"
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

const cClasses =
  "w-full bg-white border hover:border-black/25 dark:border-black/0 dark:hover:border-black/50 dark:bg-black/25 placeholder-gray-300 rounded appearance-none focus:outline-none";

export const regularInputClasses = "text-base " + cClasses;
export const smallInputClasses = "text-xs " + cClasses;
export const formClasses = "grid grid-cols-3 gap-1 p-2";

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

const sizes = {
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
};

export const tailwindSchema = {
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
  rounded: {
    xs: { label: "X Small" },
    sm: { label: "Small" },
    md: { label: "Medium" },
    lg: { label: "Large" },
    xl: { label: "XL" },
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
  p: sizes,
  px: sizes,
  py: sizes,
  pt: sizes,
  pr: sizes,
  pb: sizes,
  pl: sizes,
  m: sizes,
  mx: sizes,
  my: sizes,
  mt: sizes,
  mr: sizes,
  mb: sizes,
  ml: sizes,
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

  fa: {
    solid: { label: "Solid" },
    thin: { label: "Thin" },
    regular: { label: "Regular" },
    light: { label: "Light" },
    brand: { label: "Brand" },
  },
};

export const outerClassName = "flex text-xs w-full mb-1 flex-col";
export const labelClassName = "flex text-xs opacity-50 mb-1";
export const inputClassName =
  "w-full break-all outline-none border dark:border-black/25 p-1 rounded break-all";

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

export const tailwindClassForm = {
  "className:display": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.display,
      label: "Display",
    },
  },

  "className:w": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.w,
      label: "Width",
    },
  },
  "className:h": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.h,
      label: "Height",
    },
  },

  "className:bg-color": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.bg.color,
      label: "Bg Color",
    },
  },
  "className:bg-intensity": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.bg.intensity,
      label: "Bg Intensity",
    },
  },
  "className:bg-opacity": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.bg.opacity,
      label: "Bg Opacity",
    },
  },

  "className:rounded": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.rounded,
      label: "Rounded",
    },
  },

  "className:shadow": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.shadow,
      label: "Shadow",
    },
  },

  "className:m": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.m,
      label: "Margin",
    },
  },

  "className:mx": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.px,
      label: "Margin X",
    },
  },

  "className:my": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.py,
      label: "Margin Y",
    },
  },

  "className:mt": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.pt,
      label: "Margin Top",
    },
  },

  "className:mb": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.pb,
      label: "Margin Bottom",
    },
  },

  "className:ml": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.py,
      label: "Margin Left",
    },
  },

  "className:mr": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.py,
      label: "Margin Right",
    },
  },

  "className:p": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.p,
      label: "Padding",
    },
  },

  "className:px": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.px,
      label: "Pad X",
    },
  },

  "className:py": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.py,
      label: "Pad Y",
    },
  },

  "className:pt": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.pt,
      label: "Pad Top",
    },
  },

  "className:pb": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.pb,
      label: "Pad Bottom",
    },
  },

  "className:pl": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.py,
      label: "Pad Left",
    },
  },

  "className:pr": {
    type: "Input",
    // options: { validators: Validators.required },
    meta: {
      type: "select",
      items: tailwindSchema.py,
      label: "Pad Right",
    },
  },

  "className:text-color": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.text.color,
      label: "Text Color",
    },
  },
  "className:text-intensity": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.text.intensity,
      label: "Text Intensity",
    },
  },
  "className:text-opacity": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.text.opacity,
      label: "Text Opacity",
    },
  },
  "className:font": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.font.style,
      label: "Font Style",
    },
  },
  "className:text-size": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.text.size,
      label: "Text Size",
    },
  },
  "className:text-align": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.text.align,
      label: "Text Align",
    },
  },
  "className:tracking": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.tracking,
      label: "Letter Space",
    },
  },
  "className:leading": {
    type: "Input",
    meta: {
      type: "select",
      items: tailwindSchema.leading,
      label: "Line Space",
    },
  },
};

export const formatColorProp = (prop, newClasses) => {
  if (prop + "-color" in newClasses) {
    if (prop + "-intensity" in newClasses) {
      newClasses[prop + "-color"] =
        newClasses[prop + "-color"] + "-" + newClasses[prop + "-intensity"];
      delete newClasses[prop + "-intensity"];
    }
    if (prop + "-opacity" in newClasses) {
      newClasses[prop + "-color"] =
        newClasses[prop + "-color"] + "/" + newClasses[prop + "-opacity"];
      delete newClasses[prop + "-opacity"];
    }
  } else {
    delete newClasses[prop + "-opacity"];
    delete newClasses[prop + "-intensity"];
  }
};

const setFormValue = (config, val, key, kParts) => {
  if (val in tailwindSchema[kParts[0]][kParts[1]]) {
    config.controls[key].formState = val;
  }
};

export const saveFormChanges = (value, setProp) => {
  {
    let newClasses = {};
    console.log(value);

    Object.keys(value).forEach((key) => {
      if (key.indexOf("className:") !== 0) {
        setProp((props) => (props[key] = value[key]), 100);
      } else {
        if (value[key]) newClasses[key.replace("className:", "")] = value[key];
      }
    });

    formatColorProp("text", newClasses);
    formatColorProp("bg", newClasses);

    const arr = [];

    Object.keys(newClasses).forEach((key) => {
      if (key.indexOf("-") > -1) {
        arr.push(key.split("-")[0] + "-" + newClasses[key]);
      } else {
        if (key === "display") {
          arr.push(newClasses[key]);
        } else {
          arr.push(key + "-" + newClasses[key]);
        }
      }
    });

    setProp((props) => (props.className = arr.join(" ")), 100);
  }
};

export const tailwindFormConfig = (customItems, o, propValue) => {
  const config = {
    controls: { ...customItems, ...tailwindClassForm },
  };

  Object.keys(config.controls).forEach((key) => {
    config.controls[key].render = o[config.controls[key].type];
    config.controls[key].formState = null;
  });

  console.log(config.controls);

  Object.keys(config.controls).forEach((key) => {
    if (key in propValue && key.indexOf("className:") === -1) {
      config.controls[key].formState = propValue[key]; // ["", Validators.required],
    }

    if (key.indexOf("className:") === 0 && "className" in propValue) {
      const k = key.replace("className:", ""); // dictionary class
      const c = propValue["className"].split(" "); // existing classes

      if (k.indexOf("-") === -1) {
        if (k === "icon") {
          const filterVal = c.find((d) => d.indexOf("icon-") === 0);
          if (filterVal) {
            config.controls[key].formState = filterVal.replace("icon-", "");
          }
        } else {
          const filterVal = c.find((d) => d.indexOf(k + "-") === 0);

          if (filterVal) {
            if (filterVal.indexOf("-") > -1) {
              config.controls[key].formState = filterVal.split("-")[1];
            } else {
              config.controls[key].formState = filterVal;
            }
          } else {
            if (k === "display") {
              const m = c.find((d) => d in tailwindSchema[k]);
              config.controls[key].formState = m;
            }
          }
        }
      } else {
        const kParts = k.split("-");

        const filterVal = c
          .filter((d) => d.indexOf(kParts[0] + "-") === 0)
          .map((d) => d.replace(kParts[0] + "-", ""));

        filterVal.forEach((d) => {
          // Color Intensity
          if (d.indexOf("-") > -1) {
            let val = d.split("-")[1]; // Get intensity
            if (val.indexOf("/") > -1) val = val.split("/")[0];
            setFormValue(config, val, key, kParts);
          }

          // Color Opacity
          if (d.indexOf("/") > -1) {
            let val = d.split("/")[1]; // Get opacity
            setFormValue(config, val, key, kParts);
          }

          let val = d;
          if (val.indexOf("-") > -1) val = val.split("-")[0]; // Strip intensity
          if (val.indexOf("/") > -1) val = val.split("/")[0]; // Strip opacity
          setFormValue(config, val, key, kParts);
        });
      }
    }
  });

  return config;
};
