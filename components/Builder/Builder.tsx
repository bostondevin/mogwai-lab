import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";

import { Wrapper } from "./Wrapper";
import { EditMenu } from "./EditPanel/EditMenu";

import { CraftButton } from "../Elements/Button/Button/Button.craft";
import { CraftLink } from "../Elements/Button/Link/Link.craft";

import { CraftArticle } from "../Elements/Container/Article/Article.craft";
import { CraftAside } from "../Elements/Container/Aside/Aside.craft";
import { CraftDiv } from "../Elements/Container/Div/Div.craft";
import { CraftFieldset } from "../Elements/Container/Fieldset/Fieldset.craft";
import { CraftFooter } from "../Elements/Container/Footer/Footer.craft";
import { CraftForm } from "../Elements/Container/Form/Form.craft";
import { CraftHeader } from "../Elements/Container/Header/Header.craft";
import { CraftMain } from "../Elements/Container/Main/Main.craft";
import { CraftNav } from "../Elements/Container/Nav/Nav.craft";
import { CraftSection } from "../Elements/Container/Section/Section.craft";

import { CraftOrderedList } from "../Elements/Container/OrderedList/OrderedList.craft";
import { CraftUnOrderedList } from "../Elements/Container/UnOrderedList/UnOrderedList.craft";
import { CraftListItem } from "../Elements/Container/ListItem/ListItem.craft";

import { CraftInput } from "../Elements/Input/Input/Input.craft";
import { CraftSelect } from "../Elements/Input/Select/Select.craft";
import { CraftTextarea } from "../Elements/Input/Textarea/Textarea.craft";

import { CraftDiagram } from "../Elements/Media/Diagram/Diagram.craft";
import { CraftGrid } from "../Elements/Media/Grid/Grid.craft";
import { CraftIcon } from "../Elements/Media/Icon/Icon.craft";
import { CraftImage } from "../Elements/Media/Image/Image.craft";
import { CraftText } from "../Elements/Media/Text/Text.craft";
import { CraftVideo } from "../Elements/Media/Video/Video.craft";

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
