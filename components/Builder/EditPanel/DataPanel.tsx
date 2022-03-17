import React, { createElement, useEffect, useState } from "react";

import { Element, useEditor } from "@craftjs/core";

import { ButtonReusable, Button } from "../../Button";
import { Container } from "../../Container";
import { Accordion } from "../../Accordion";
import { AgGrid } from "../../AgGrid";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { Text } from "../../Text";
import { Video } from "../../Video";
import { Cards3D } from "../../GoJs";
import { Icon } from "../../Icon";

import { components } from "../../../constants/components";

export const DataPanel = ({ store, path }) => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dataProps, setDataProps] = useState({});

  useEffect(() => {
    const d = store.path(("templates" + path).split("/"));
    d.once((d) => {
      let o = { ...d };
      delete o._;
      setDataProps(o);
    });
  }, []);

  const o = {
    Container: Container,
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
    <Accordion
      title={"Data"}
      className="bg-slate-700 text-white/75"
      headerClassName="uppercase bg-slate-800 hover:bg-slate-900 hover:text-white/100 p-2 flex justify-between text-xs cursor-pointer"
      containerClassName="flex w-full"
    >
      <div className="flex w-full text-xs gap-2">
        {dataProps &&
          Object.keys(dataProps).map((item, componentIndex) => {
            return (
              <div
                key={"component_" + componentIndex}
                className="flex w-full gap-2 mb-2"
              >
                <div className="flex pl-2">{item}</div>
                <div className="flex break-all pr-2 pb-2">
                  {dataProps[item]}
                </div>
              </div>
            );
          })}
      </div>
    </Accordion>
  );
};
