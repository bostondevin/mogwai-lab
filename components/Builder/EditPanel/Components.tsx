import React, { createElement } from "react";
import { Element, useEditor } from "@craftjs/core";

import Tooltip from "@mui/material/Tooltip";

import { ButtonReusable } from "../../Button/Button";
import { Accordion } from "../../Accordion/Accordion";
import { AgGrid } from "../../AgGrid/AgGrid";
import { Input } from "../../Input/Input";
import { Select } from "../../Select/Select";
import { Field } from "../../Input/Field";
import { Container } from "../../Container/Container";
import { Text } from "../../Typography/Typography";
import { Video } from "../../Video/Video";
import { Cards3D } from "../../GoJs/GoJs";
import { Icon } from "../../Icon/Icon";

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
    Field: Field,
    Button: ButtonReusable,
    AgGrid: AgGrid,
    Input: Input,
    Select: Select,
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
            headerClassName="uppercase bg-slate-800 hover:bg-slate-900 hover:text-white/100 p-2 flex justify-between text-xs cursor-pointer"
            containerClassName="overflow-hidden transition-all duration-200"
          >
            {panel.items.map((item, componentIndex) => {
              return (
                <span
                  key={"component_" + componentIndex}
                  className="p-2 inline-block cursor-grab"
                >
                  <Tooltip title={item.title}>
                    <span
                      ref={(ref) =>
                        create(
                          ref,
                          createElement(
                            o[item.element.type],
                            item.element.props
                          )
                        )
                      }
                    >
                      <Icon className={item.icon} />
                    </span>
                  </Tooltip>
                </span>
              );
            })}
          </Accordion>
        );
      })}
    </>
  );
};
