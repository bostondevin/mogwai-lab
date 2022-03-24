import React, { useEffect, useState } from "react";
import { useEditor } from "@craftjs/core";
import { DataForm } from "../Core/DataForm";
import { predicates } from "../../constants/components";
import lz from "lzutf8";

export const DataPanel = ({ store, path }) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dataProps, setDataProps] = useState({});

  useEffect(() => {
    store.path(("templates" + path).split("/")).once((d) => {
      let o = { ...d };
      delete o._;
      delete o.html;
      setDataProps(o);
    });
  }, []);

  const addDataItem = (e) => {
    console.log(e);
  };

  const changeDataItem = (e) => {
    console.log(e);
    console.log(path);
    const template = store.path(("templates" + path).split("/")).get(e.key);
    if (e.key === "html") {
      const condensedJson = encodeURIComponent(
        lz.encodeBase64(lz.compress(e.value))
      );
      template.put(condensedJson, () => {});
    } else {
      template.put(e.value, () => {});
    }
  };

  return (
    <DataForm
      onChange={changeDataItem}
      dataProps={dataProps}
      predicates={predicates}
      onClick={addDataItem}
    />
  );
};
