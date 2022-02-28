import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Element, useEditor } from "@craftjs/core";

import { ComponentItem } from "./ComponentItem";

import { Button } from "../widgets/Button/Button";
import { Container } from "../widgets/Container/Container";
import { Text } from "../widgets/Typography/Typography";
import { Video } from "../widgets/Video/Video";

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : "")}
  ${(props) => (!props.enabled ? `opacity: 0;` : "")}
`;

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const components = [
    {
      title: "Container",
      icon: "faSquare",
      element: (
        <Element
          canvas
          is={Container}
          background={{ r: 78, g: 78, b: 78, a: 1 }}
          color={{ r: 0, g: 0, b: 0, a: 1 }}
          height="300px"
          width="300px"
        ></Element>
      ),
    },
    {
      title: "Text",
      icon: "faText",
      element: <Text text="Hi there" />,
    },

    {
      title: "Button",
      icon: "faButton",
      element: <Button type="button" />,
    },

    {
      title: "Video",
      icon: "faVideo",
      element: <Video />,
    },
  ];

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition flex"
    >
      <div className="flex flex-1 flex-wrap pt-3 text-sm">
        {components.map((item, index) => {
          return (
            <ComponentItem
              key={index}
              icon={item.icon}
              label={item.title}
              element={item.element}
            />
          );
        })}
      </div>
    </ToolboxDiv>
  );
};
