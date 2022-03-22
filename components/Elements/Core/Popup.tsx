import React from "react";
import {
  ContainerProps,
  CommonEvents,
} from "../../../interfaces/common.interface";
import ReactPopup from "reactjs-popup";
import { PopupPosition } from "reactjs-popup/dist/types";

export interface PopupProps extends ContainerProps, CommonEvents {
  children?: JSX.Element;
  menu?: JSX.Element;
  position?: PopupPosition;
}

const contentStyle = {
  background: "rgba(0,0,0,.9)",
  padding: 0,
  width: "100px",
};
const overlayStyle = {};
const arrowStyle = { color: "rgba(0,0,0,.9)" };

export const Popup = (props: Partial<PopupProps>) => {
  return (
    <ReactPopup
      closeOnDocumentClick={true}
      arrowStyle={arrowStyle}
      contentStyle={contentStyle}
      overlayStyle={overlayStyle}
      position={props.position}
      trigger={props.children}
    >
      {props.menu}
    </ReactPopup>
  );
};
