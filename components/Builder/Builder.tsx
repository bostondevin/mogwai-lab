import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";

import { Wrapper } from "./Wrapper";
import { EditMenu } from "./EditPanel/EditMenu";

import { Container } from "../Container";
import { Text } from "../Text";
import { Button } from "../Button";
import { Input } from "../Input";
import { Video } from "../Video";
import { Cards3D } from "../GoJs";
import { AgGrid } from "../AgGrid";
import ForceGraph from "../ForceGraph/ForceGraph";

export const Builder = ({ store }): JSX.Element => {
  return (
    <CraftEditor
      resolver={{
        Button,
        Container,
        Text,
        Input,
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
