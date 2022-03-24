import React from "react";
import { ClassNamesProps } from "../../common.interface";
import { BackgroundColor } from "./BackgroundColor";
import { Border } from "./Border";
import { Display } from "./Display";
import { Font } from "./Font";
import { Height } from "./Height";
import { Margin } from "./Margin";
import { Overflow } from "./Overflow";
import { Padding } from "./Padding";
import { Rounded } from "./Rounded";
import { Shadow } from "./Shadow";
import { TextColor } from "./TextColor";
import { Visibility } from "./Visibility";
import { Width } from "./Width";

export const ClassNames = (props: Partial<ClassNamesProps>) => {
  return (
    <div>
      <Font className={props.className} />
      <Display className={props.className} />
      <BackgroundColor className={props.className} />
      <Border className={props.className} />
      <Margin className={props.className} />
      <Padding className={props.className} />
      <Overflow className={props.className} />
      <Shadow className={props.className} />
      <Height className={props.className} />
      <Width className={props.className} />
      <Rounded className={props.className} />
      <TextColor className={props.className} />
      <Visibility className={props.className} />
    </div>
  );
};
