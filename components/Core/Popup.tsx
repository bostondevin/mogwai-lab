import React from "react";
import { ContainerProps, CommonEvents } from "../common.interface";
import ReactPopup from "reactjs-popup";
import { PopupPosition } from "reactjs-popup/dist/types";

export interface PopupProps extends ContainerProps, CommonEvents {
  children?: JSX.Element;
  menu?: JSX.Element;
  position?: PopupPosition;
  bgColor: string;
  width: number;
}

export const Popup = (props: Partial<PopupProps>) => {
  const contentStyle = {
    background: props.bgColor,
    padding: 0,
    width: props.width + "px",
  };
  const overlayStyle = {};
  const arrowStyle = { color: props.bgColor };

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
