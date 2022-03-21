import React from "react";
import {
  ContainerProps,
  CommonEvents,
} from "../../../../interfaces/Container.interface";
import ReactPopup from "reactjs-popup";
import { PopupPosition } from "reactjs-popup/dist/types";

export interface PopupProps extends ContainerProps, CommonEvents {
  children?: JSX.Element;
  menu?: JSX.Element;
  position?: PopupPosition;
}

const contentStyle = { background: "#000" };
const overlayStyle = {};
const arrowStyle = { color: "#000" };

export const Popup = (props: Partial<PopupProps>) => {
  return (
    <ReactPopup
      className={"bg-slate-700 bla"}
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
