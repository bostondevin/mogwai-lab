import React, { useEffect, useState } from "react";
import { useEditor } from "@craftjs/core";

export const DataPanel = ({ store, path }) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dataProps, setDataProps] = useState({});

  useEffect(() => {
    store.path(("templates" + path).split("/")).once((d) => {
      let o = { ...d };
      delete o._;
      setDataProps(o);
    });
  }, []);

  return (
    <div className="flex w-full text-xs gap-2">
      {dataProps &&
        Object.keys(dataProps).map((item, componentIndex) => {
          return (
            <div
              key={"component_" + componentIndex}
              className="flex w-full gap-2 mb-2"
            >
              <div className="flex pl-2">{item}</div>
              <div className="flex break-all pr-2 pb-2">{dataProps[item]}</div>
            </div>
          );
        })}
    </div>
  );
};
