import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";

import { Wrapper } from "./Wrapper";
import { EditMenu } from "./EditMenu";

import { CraftButton } from "../Craft/Button.craft";

import { CraftContainer } from "../Craft/Container.craft";
import { CraftForm } from "../Craft/Form.craft";

import { CraftList } from "../Craft/List.craft";
import { CraftListItem } from "../Craft/ListItem.craft";

import { CraftInput } from "../Craft/Input.craft";

import { CraftDiagram } from "../Craft/Diagram.craft";
import { CraftGrid } from "../Craft/Grid.craft";
import { CraftIcon } from "../Craft/Icon.craft";
import { CraftImage } from "../Craft/Image.craft";
import { CraftText } from "../Craft/Text.craft";
import { CraftVideo } from "../Craft/Video.craft";

export const Builder = ({ store }): JSX.Element => {
  return (
    <CraftEditor
      resolver={{
        CraftButton,

        CraftContainer,
        CraftForm,

        CraftList,
        CraftListItem,

        CraftInput,

        CraftDiagram,
        CraftGrid,
        CraftIcon,
        CraftImage,
        CraftText,
        CraftVideo,
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
