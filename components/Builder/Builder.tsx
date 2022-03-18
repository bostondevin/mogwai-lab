import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";

import { Wrapper } from "./Wrapper";
import { EditMenu } from "./EditPanel/EditMenu";

import { Container } from "../Container";
import { Text } from "../Elements/Text";
import { ButtonReusable } from "../Elements/Button";
import { Input } from "../Elements/Input";
import { Select } from "../Elements/Select";
import { Video } from "../Elements/Video";
import { Cards3D } from "../GoJs";
import { AgGrid } from "../AgGrid";
import ForceGraph from "../ForceGraph/ForceGraph";

export const Builder = ({ store }): JSX.Element => {
  return (
    <CraftEditor
      resolver={{
        ButtonReusable,
        Container,
        Text,
        Input,
        Select,
        Video,
        ForceGraph,
        Cards3D,
        AgGrid,
      }}
      enabled={false}
      onRender={EditMenu}
    >
      <Wrapper store={store}>
        <Frame></Frame>
      </Wrapper>
    </CraftEditor>
  );
};
