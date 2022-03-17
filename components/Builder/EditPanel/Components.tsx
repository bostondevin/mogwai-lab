import React, { createElement } from "react";
import { Element, useEditor } from "@craftjs/core";

import Tooltip from "@mui/material/Tooltip";

import { ButtonRaw, Button } from "../../Button";
import { Container } from "../../Container";
import { Accordion } from "../../Accordion";
import { AgGrid } from "../../AgGrid";
import { Input } from "../../Input";
import { Text } from "../../Text";
import { Video } from "../../Video";
import { Cards3D } from "../../GoJs";
import { Icon } from "../../Icon";

import { components } from "../../../constants/components";

export const ComponentsPanel = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const o = {
    Container: Container,
    Button: Button,
    AgGrid: AgGrid,
    Input: Input,
    Text: Text,
    Video: Video,
    Icon: Icon,
    Cards3D: Cards3D,
    Element: Element,
  };

  return (
    <>
      {components.map((panel, panelIndex) => {
        return (
          <Accordion
            key={"group_" + panelIndex}
            title={panel.label}
            className="bg-slate-700 text-white/75"
            headerClassName="uppercase select-none bg-slate-800 hover:bg-slate-900 hover:text-white/100 p-2 flex justify-between text-xs cursor-pointer"
            containerClassName="overflow-hidden transition-all duration-200"
          >
            {panel.items.map((item, componentIndex) => {
              return (
                <ButtonRaw
                  type="button"
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
                </ButtonRaw>
              );
            })}
          </Accordion>
        );
      })}
    </>
  );
};
