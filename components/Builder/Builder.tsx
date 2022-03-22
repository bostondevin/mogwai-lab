import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";

import { Wrapper } from "./Wrapper";
import { EditMenu } from "./EditPanel/EditMenu";

import { CraftButton } from "../Elements/Button.craft";
import { CraftLink } from "../Elements/Link.craft";

import { CraftArticle } from "../Elements/Article.craft";
import { CraftAside } from "../Elements/Aside.craft";
import { CraftDiv } from "../Elements/Div.craft";
import { CraftFieldset } from "../Elements/Fieldset.craft";
import { CraftFooter } from "../Elements/Footer.craft";
import { CraftForm } from "../Elements/Form.craft";
import { CraftHeader } from "../Elements/Header.craft";
import { CraftMain } from "../Elements/Main.craft";
import { CraftNav } from "../Elements/Nav.craft";
import { CraftSection } from "../Elements/Section.craft";

import { CraftOrderedList } from "../Elements/OrderedList.craft";
import { CraftUnOrderedList } from "../Elements/UnOrderedList.craft";
import { CraftListItem } from "../Elements/ListItem.craft";

import { CraftInput } from "../Elements/Input.craft";
import { CraftSelect } from "../Elements/Select.craft";
import { CraftTextarea } from "../Elements/Textarea.craft";

import { CraftDiagram } from "../Elements/Diagram.craft";
import { CraftGrid } from "../Elements/Grid.craft";
import { CraftIcon } from "../Elements/Icon.craft";
import { CraftImage } from "../Elements/Image.craft";
import { CraftText } from "../Elements/Text.craft";
import { CraftVideo } from "../Elements/Video.craft";

export const Builder = ({ store }): JSX.Element => {
  return (
    <CraftEditor
      resolver={{
        CraftButton,
        CraftLink,

        CraftArticle,
        CraftAside,
        CraftDiv,
        CraftFieldset,
        CraftFooter,
        CraftForm,
        CraftHeader,
        CraftMain,
        CraftNav,
        CraftSection,

        CraftOrderedList,
        CraftUnOrderedList,
        CraftListItem,

        CraftInput,
        CraftSelect,
        CraftTextarea,

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
