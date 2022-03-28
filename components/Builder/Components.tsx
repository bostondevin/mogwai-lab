import React, { createElement } from "react";
import { Element, useEditor } from "@craftjs/core";

import { Accordion } from "../Core/Accordion";

import { Button } from "../Core/Button";
import { Icon } from "../Core/Icon";

import { CraftButton } from "../Craft/Button.craft";

import { CraftContainer } from "../Craft/Container.craft";

import { CraftList } from "../Craft/List.craft";
import { CraftListItem } from "../Craft/ListItem.craft";

import { CraftInput } from "../Craft/Input.craft";

import { CraftDiagram } from "../Craft/Diagram.craft";
import { CraftGrid } from "../Craft/Grid.craft";
import { CraftIcon } from "../Craft/Icon.craft";
import { CraftImage } from "../Craft/Image.craft";
import { CraftText } from "../Craft/Text.craft";
import { CraftVideo } from "../Craft/Video.craft";

import { baseComponents } from "../components";

export const ComponentsPanel = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const o = {
    Button: CraftButton,

    Container: CraftContainer,

    List: CraftList,
    ListItem: CraftListItem,

    Input: CraftInput,

    Diagram: CraftDiagram,
    Grid: CraftGrid,
    Icon: CraftIcon,
    Image: CraftImage,
    Text: CraftText,
    Video: CraftVideo,
  };

  return (
    <div className="flex flex-wrap flex-row">
      {baseComponents.map((item, componentIndex) => {
        return (
          <Button
            key={"component_" + componentIndex}
            className="p-2 inline-block cursor-grab"
            tooltip={item.title}
            ref={(ref: any) =>
              create(
                ref,
                item.element.type === "Element" ? (
                  <Element
                    canvas
                    is={o[item.element.is]}
                    {...item.element.props}
                  ></Element>
                ) : (
                  createElement(o[item.element.type], item.element.props)
                )
              )
            }
          >
            <Icon className={item.icon} />
          </Button>
        );
      })}
    </div>
  );
};
