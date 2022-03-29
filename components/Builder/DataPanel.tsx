import React, { useEffect, useState } from "react";
import { useEditor } from "@craftjs/core";
import { Input } from "../Core/Input";
import lz from "lzutf8";
import { FormGenerator } from "react-reactive-form";
import {
  outerClassName,
  labelClassName,
  saveFormChanges,
  inputClassName,
} from "../common.interface";

export const DataPanel = ({ store, path }) => {
  const {
    enabled,
    connectors,
    actions: { deserialize },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [formProps, setFormProps] = useState({});

  useEffect(() => {
    store.path(("templates" + path).split("/")).once((d) => {
      let o = { ...d };
      delete o._;
      // delete o.html;
      console.log(o);

      const newItems = {};

      Object.keys(o).forEach((d) => {
        const dataType = typeof o[d];
        const dataLength = dataType.length;

        let type;

        if (dataType === "string" && dataLength > 50) type = "textarea";
        if (dataType === "number") type = "number";
        if (dataType === "boolean") type = "checkbox";

        newItems[d] = {
          render: Input,
          meta: {
            type: "textarea",
            label: "Structure",
            tight: true,
            rows: 5,
            className: "flex text-xs gap-1 w-full",
            labelClassName: "opacity-50 w-1/5",
            inputClassName: "w-full break-all outline-none border p-1 rounded",
          },
        };

        if (d === "html" && o[d]) {
          const json = lz.decompress(lz.decodeBase64(decodeURIComponent(o[d])));
          if (json) deserialize(json);
          newItems[d].formState = json;
        } else {
          newItems[d].formState = o[d];
        }
      });

      setFormProps(() => newItems);
    });
  }, []);

  const changeDataItem = () => {
    /*
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
    */
  };

  const mountForm = (f) => {
    f.valueChanges.subscribe((value) => {
      console.log(value);
    });
  };

  return (
    <form className="p-2">
      <FormGenerator
        onMount={mountForm}
        fieldConfig={{
          controls: formProps,
        }}
      />
    </form>
  );
};
