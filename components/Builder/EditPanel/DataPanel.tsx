import React, { useEffect, useState } from "react";

import { useEditor } from "@craftjs/core";

import { Accordion } from "../../Accordion";
import { InputRaw } from "../../Input";

export const DataPanel = ({ store, path }) => {
  const [dataProps, setDataProps] = useState({});

  useEffect(() => {
    const d = store.path(("templates" + path).split("/"));
    d.once((d) => {
      let o = { ...d };
      delete o._;
      setDataProps(o);
    });
  }, []);

  const changeValue = (event, item) => {
    console.log(item);
    console.log(event.target.value);
  };

  return (
    <Accordion
      title={"Data"}
      className="bg-slate-700 text-white/75"
      headerClassName="uppercase select-none bg-slate-800 hover:bg-slate-900 hover:text-white/100 p-2 flex justify-between text-xs cursor-pointer"
      containerClassName="w-full"
    >
      <div className="text-xs p-1">
        <div className="flex w-full gap-2">
          <div className="flex">
            <InputRaw
              type="select"
              placeholder="Choose..."
              className="w-full rounded px-2 py-1 bg-white/10"
            />
          </div>
          <div className="flex">New</div>
        </div>

        {dataProps &&
          Object.keys(dataProps).map((item, componentIndex) => {
            return (
              <div
                key={"component_" + componentIndex}
                className="flex w-full gap-2"
              >
                <div className="flex">{item}</div>
                <div className="flex w-full break-all">
                  {typeof dataProps[item] === "boolean" && (
                    <InputRaw
                      type="checkbox"
                      onChange={(e) => changeValue(e, item)}
                    />
                  )}

                  {typeof dataProps[item] === "string" && (
                    <InputRaw
                      type={dataProps[item].length > 50 ? "textarea" : "text"}
                      value={dataProps[item]}
                      className="w-full flex rounded px-2 py-1 bg-white/10"
                      onChange={(e) => changeValue(e, item)}
                    />
                  )}

                  {typeof dataProps[item] === "number" && (
                    <InputRaw
                      type="number"
                      className="text-black w-full flex p-1"
                      value={dataProps[item]}
                      onChange={(e) => changeValue(e, item)}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </Accordion>
  );
};
