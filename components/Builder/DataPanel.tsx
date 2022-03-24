import React, { useEffect, useState } from "react";
import { useEditor } from "@craftjs/core";
import { Form } from "../Core/Form";
import { predicates } from "../components";
import lz from "lzutf8";
import { FormItems } from "components/Core/FormItems";

export const DataPanel = ({ store, path }) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dataProps, setDataProps] = useState({});

  useEffect(() => {
    store.path(("templates" + path).split("/")).once((d) => {
      let o = { ...d };
      delete o._;
      // delete o.html;
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
    <Form onChange={changeDataItem} onClick={addDataItem}>
      <FormItems
        data={dataProps}
        className="flex w-full gap-1 mb-2"
        labelClassName="flex pl-2"
      />
    </Form>
  );
};
