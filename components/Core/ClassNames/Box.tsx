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

export const Box = (props: Partial<ClassNamesProps>) => {
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

  let fullColors = { ...baseColors };

  Object.keys(colors).forEach((c) => {
    colorIntensity.forEach((intensity) => {
      const lab = { ...colors[c] };
      lab.label = lab.label + " " + intensity;
      fullColors["bg-" + c + "-" + intensity] = lab;
    });
  });

  return (
    <Fieldset className="border p-2 m-2 border-slate-300 dark:border-slate-500 rounded grid grid-cols-2 gap-2">
      <Text
        className="px-2 uppercase"
        id="text-size"
        type="legend"
        text="Box"
      />

      <Div className="flex flex-col">
        <Text className="opacity-50" id="box-width" type="label" text="Width" />

        <Select aria-labeled-by="box-width" items={widths} tight={true} />
      </Div>

      <Div className="flex flex-col">
        <Text
          className="opacity-50"
          id="box-height"
          type="label"
          text="Height"
        />

        <Select aria-labeled-by="box-height" items={heights} tight={true} />
      </Div>

      <Div className="flex flex-col">
        <Text
          className="opacity-50"
          id="bg-color"
          type="label"
          text="Background"
        />
        <Select aria-labeled-by="bg-color" items={fullColors} tight={true} />
      </Div>

      <Div className="flex flex-col">
        <Text
          className="opacity-50"
          id="box-shadow"
          type="label"
          text="Shadow"
        />
        <Select aria-labeled-by="box-shadow" items={shadows} tight={true} />
      </Div>
    </Fieldset>
  );
};
