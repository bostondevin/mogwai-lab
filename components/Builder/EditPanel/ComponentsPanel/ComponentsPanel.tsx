import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Element, useEditor } from "@craftjs/core";

import { ComponentItem } from "./ComponentItem";

import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import { Container } from "../../../Container/Container";
import { Text } from "../../../Typography/Typography";
import { Video } from "../../../Video/Video";
import { Cards3D } from "../../../GoJs/GoJs";
import { TreeGraph } from "../../../TreeGraph/TreeGraph";

import ForceGraph from "../../../ForceGraph/ForceGraph";

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
      icon: "fas fa-square-dashed",
      element: <Element canvas is={Container}></Element>,
    },
    {
      title: "Text",
      icon: "fas fa-text",
      element: <Text text="Hi there" />,
    },
    {
      title: "Diagram",
      icon: "fas fa-diagram-project",
      element: <Cards3D />,
    },

    {
      title: "Button",
      icon: "fas fa-bullseye-pointer",
      element: <Button type="button" />,
    },

    {
      title: "Text Input",
      icon: "fas fa-input-pipe",
      element: <Input type="text" />,
    },

    {
      title: "Video",
      icon: "fab fa-youtube",
      element: <Video />,
    },

    {
      title: "ForceGraph",
      icon: "fas fa-sitemap",
      element: <ForceGraph />,
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
