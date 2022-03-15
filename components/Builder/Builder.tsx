import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";

import { Wrapper } from "./Wrapper";
import { EditMenu } from "./EditPanel/EditMenu";

import { Container } from "../Container/Container";
import { Text } from "../Typography/Typography";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Field } from "../Input/Field";
import { Select } from "../Select/Select";
import { Video } from "../Video/Video";
import { Cards3D } from "../GoJs/GoJs";
import { AgGrid } from "../AgGrid/AgGrid";
import ForceGraph from "../ForceGraph/ForceGraph";
import { Custom1, OnlyButtons } from "../Custom1/Custom1";
import { Custom2, Custom2VideoDrop } from "../Custom2/Custom2";
import { Custom3, Custom3BtnDrop } from "../Custom3/Custom3";

export const Builder = ({ store }): JSX.Element => {
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
        Input,
        Select,
        Field,
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
