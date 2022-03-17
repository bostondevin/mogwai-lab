import React, { useState, useRef } from "react";
import { IconRaw } from "./Icon";

type AccordionProps = {
  title: string;
  className?: string;
  headerClassName?: string;
  containerClassName?: string;
  children?: any;
};

export const Accordion = (props: Partial<AccordionProps>) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  };

  return (
    <div onClick={HandleOpening} className={props.className}>
      <div className={props.headerClassName}>
        <IconRaw
          className={"mr-2 fas fa-chevron-" + (isOpened ? "down" : "right")}
        />
        <h4 className="w-full">{props.title}</h4>
      </div>

      <div
        ref={contentElement}
        style={{ height: height }}
        className={props.containerClassName}
      >
        {props.children}
      </div>
    </div>
  );
};

/*
      ref={connect}
<div
      ref={connect}
      className={enabled ? props.className + " outline-1" : props.className}
      style={props.children ? undefined : { height: "50px" }}
    >
      {props.children}
      {props.children ? (
        ""
      ) : (
        <div className="border-dashed border-2 border-black/20 h-full"></div>
      )}
    </div>
    */
