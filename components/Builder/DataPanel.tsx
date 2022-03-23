import React, { useEffect, useState } from "react";
import { useEditor } from "@craftjs/core";
import { DataForm } from "./DataForm";
import { predicates } from "../../constants/components";

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

  const addDataItem = (e) => {
    console.log(e);
  };

  return (
    <DataForm
      dataProps={dataProps}
      predicates={predicates}
      onClick={addDataItem}
    />
  );
};
