import React from "react";
import { Editor as CraftEditor } from "@craftjs/core";

import { Builder } from "./Builder";
import { EditMenu } from "./EditPanel/EditMenu";

import { Container } from "./widgets/Container/Container";
import { Text } from "./widgets/Text/Text";
import { Button } from "./widgets/Button/Button";
import { Video } from "./widgets/Video/Video";
import { Custom1, OnlyButtons } from "./widgets/Custom1/Custom1";
import { Custom2, Custom2VideoDrop } from "./widgets/Custom2/Custom2";
import { Custom3, Custom3BtnDrop } from "./widgets/Custom3/Custom3";

function Editor() {
  return (
    <CraftEditor
      resolver={{
        Container,
        Text,
        Custom1,
        Custom2,
        Custom2VideoDrop,
        Custom3,
        Custom3BtnDrop,
        OnlyButtons,
        Button,
        Video,
      }}
      enabled={false}
      onRender={EditMenu}
    >
      <Builder />
    </CraftEditor>
  );
}

export default Editor;
