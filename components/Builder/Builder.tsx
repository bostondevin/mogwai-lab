import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";

import { Wrapper } from "./Wrapper";
import { EditMenu } from "./EditMenu";

import { CraftButton } from "../Craft/Button.craft";
import { CraftLink } from "../Craft/Link.craft";

import { CraftArticle } from "../Craft/Article.craft";
import { CraftAside } from "../Craft/Aside.craft";
import { CraftDiv } from "../Craft/Div.craft";
import { CraftFieldset } from "../Craft/Fieldset.craft";
import { CraftFooter } from "../Craft/Footer.craft";
import { CraftForm } from "../Craft/Form.craft";
import { CraftHeader } from "../Craft/Header.craft";
import { CraftMain } from "../Craft/Main.craft";
import { CraftNav } from "../Craft/Nav.craft";
import { CraftSection } from "../Craft/Section.craft";

import { CraftOrderedList } from "../Craft/OrderedList.craft";
import { CraftUnOrderedList } from "../Craft/UnOrderedList.craft";
import { CraftListItem } from "../Craft/ListItem.craft";

import { CraftInput } from "../Craft/Input.craft";
import { CraftSelect } from "../Craft/Select.craft";
import { CraftTextarea } from "../Craft/Textarea.craft";

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
