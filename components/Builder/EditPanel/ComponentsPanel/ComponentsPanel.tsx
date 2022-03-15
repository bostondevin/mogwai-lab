import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Element, useEditor } from "@craftjs/core";

import { ComponentItem } from "./ComponentItem";

import { Button } from "../../../Button/Button";
import { AgGrid } from "../../../AgGrid/AgGrid";
import { Input } from "../../../Input/Input";
import { Select } from "../../../Select/Select";
import { Field } from "../../../Input/Field";
import { Container } from "../../../Container/Container";
import { Text } from "../../../Typography/Typography";
import { Video } from "../../../Video/Video";
import { Cards3D } from "../../../GoJs/GoJs";

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
      key: "containers",
      label: "Containers",
      items: [
        {
          title: "Container",
          icon: "fas fa-square-dashed",
          element: <Element canvas is={Container}></Element>,
        },
      ],
    },
    {
      key: "typography",
      label: "Typography",
      items: [
        {
          title: "Regular",
          icon: "fas fa-text",
          element: <Text type="span" text="Lorem ipsum dolor" />,
        },
        {
          title: "Small",
          icon: "fas fa-text",
          shrink: true,
          element: (
            <Text type="span" className="text-xs" text="Lorem ipsum dolor" />
          ),
        },
        {
          title: "Small Light",
          icon: "fas fa-text opacity-50",
          shrink: true,
          element: (
            <Text
              type="span"
              className="text-xs opacity-50"
              text="Lorem ipsum dolor"
            />
          ),
        },

        {
          title: "Paragraph",
          icon: "fas fa-paragraph",
          element: (
            <Text
              type="p"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              className="text-base font-light leading-relaxed mt-0 mb-4"
            />
          ),
        },

        {
          title: "Lead",
          icon: "fas fa-paragraph",
          element: (
            <Text
              type="p"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              className="text-lg font-light leading-relaxed mt-6 mb-4"
            />
          ),
        },

        {
          title: "Small",
          icon: "fas fa-paragraph",
          element: (
            <Text
              type="small"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              className="font-normal leading-normal"
            />
          ),
        },

        {
          title: "H1",
          icon: "fas fa-h1",
          element: (
            <Text
              type="h1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              className="text-6xl font-normal leading-normal mt-0 mb-2"
            />
          ),
        },
        {
          title: "H2",
          icon: "fas fa-h2",
          element: (
            <Text
              type="h2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              className="text-5xl font-normal leading-normal mt-0 mb-2"
            />
          ),
        },
        {
          title: "H3",
          icon: "fas fa-h3",
          element: (
            <Text
              type="h3"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              className="text-4xl font-normal leading-normal mt-0 mb-2"
            />
          ),
        },

        {
          title: "H4",
          icon: "fas fa-h4",
          element: (
            <Text
              type="h4"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              className="text-3xl font-normal leading-normal mt-0 mb-2"
            />
          ),
        },

        {
          title: "H5",
          icon: "fas fa-h5",
          element: (
            <Text
              type="h5"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              className="text-2xl font-normal leading-normal mt-0 mb-2"
            />
          ),
        },

        {
          title: "H6",
          icon: "fas fa-h6",
          element: (
            <Text
              type="h6"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              className="text-xl font-normal leading-normal mt-0 mb-2"
            />
          ),
        },
      ],
    },
    {
      key: "navigation",
      label: "Navigation",
      items: [
        {
          title: "Diagram",
          icon: "fas fa-diagram-project",
          element: <Cards3D />,
        },

        {
          title: "Grid",
          icon: "fas fa-table",
          element: <AgGrid className="w-full" dataSource="templates/test333" />,
        },

        {
          title: "Video",
          icon: "fab fa-youtube",
          element: <Video />,
        },
      ],
    },
    {
      key: "form",
      label: "Form",
      items: [
        {
          title: "Text Input",
          icon: "fas fa-input-pipe",
          element: <Input type="text" />,
        },

        {
          title: "Select",
          icon: "fas fa-list-dropdown",
          element: (
            <Select id="lissssst" placeholder="- Choose -" className="w-full" />
          ),
        },
        {
          title: "Text Input",
          icon: "fab fa-table-columns",
          element: <Field />,
        },
      ],
    },
    {
      key: "buttons",
      label: "Buttons",
      items: [
        {
          title: "Button",
          icon: "fas fa-bullseye-pointer",
          element: <Element canvas is={Button}></Element>,
        },
      ],
    },
    { key: "icons", label: "Icons", items: [] },
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
