import React from "react";
import {
  ClassNamesProps,
  baseColors,
  colors,
  colorIntensity,
} from "../../common.interface";

import { Select } from "../Select";
import { Text } from "../Text";
import { Div } from "../Div";
import { Input } from "../Input";
import { Fieldset } from "../Fieldset";

export const Font = (props: Partial<ClassNamesProps>) => {
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

  //const c = props.className.split(" ");
  //console.log(c);

  let fullColors = { ...baseColors };

  Object.keys(colors).forEach((c) => {
    colorIntensity.forEach((intensity) => {
      const lab = { ...colors[c] };
      lab.label = lab.label + " " + intensity;
      fullColors["text-" + c + "-" + intensity] = lab;
    });
  });

  return (
    <Fieldset className="border p-2 m-2 border-slate-300 dark:border-slate-500 rounded grid grid-cols-2 gap-2">
      <Text
        className="px-2 uppercase"
        id="text-size"
        type="legend"
        text="Text"
      />

      <Div className="flex flex-col">
        <Text
          className="opacity-50"
          id="text-color"
          type="label"
          text="Color"
        />
        <Select aria-labeled-by="text-color" items={fullColors} tight={true} />
      </Div>

      <Div className="flex flex-col">
        <Text
          className="opacity-50"
          id="text-style"
          type="label"
          text="Style"
        />

        <Select aria-labeled-by="text-style" items={fontStyles} tight={true} />
      </Div>

      <Div className="flex flex-col">
        <Text className="opacity-50" id="text-size" type="label" text="Size" />
        <Select aria-labeled-by="text-size" items={fontSizes} tight={true} />
      </Div>

      <Div className="flex flex-col">
        <Text
          className="opacity-50"
          id="text-align"
          type="label"
          text="Align"
        />
        <Select aria-labeled-by="text-align" items={textAlign} tight={true} />
      </Div>

      <Div className="flex flex-col">
        <Text
          className="opacity-50"
          id="tracking-size"
          type="label"
          text="Letter Spacing"
        />
        <Select
          aria-labeled-by="tracking-size"
          items={textTracking}
          tight={true}
        />
      </Div>

      <Div className="flex flex-col">
        <Text
          className="opacity-50"
          id="leading-size"
          type="label"
          text="Line Spacing"
        />
        <Select
          aria-labeled-by="leading-size"
          items={leadingTypes}
          tight={true}
        />
      </Div>
    </Fieldset>
  );
};
