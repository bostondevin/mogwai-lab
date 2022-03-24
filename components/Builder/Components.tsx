import React, { createElement } from "react";
import { Element, useEditor } from "@craftjs/core";

import { Accordion } from "../Core/Accordion";

import { Button } from "../Core/Button";
import { Icon } from "../Core/Icon";

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

import { components } from "../components";
import { pro } from "../../constants/fontawesome-free";

export const ComponentsPanel = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const o = {
    Button: CraftButton,
    Link: CraftLink,

    Article: CraftArticle,
    Aside: CraftAside,
    Div: CraftDiv,
    Fieldset: CraftFieldset,
    Footer: CraftFooter,
    Form: CraftForm,
    Header: CraftHeader,
    Main: CraftMain,
    Nav: CraftNav,
    Section: CraftSection,

    OrderedList: CraftOrderedList,
    UnOrderedList: CraftUnOrderedList,
    ListItem: CraftListItem,

    Input: CraftInput,
    Select: CraftSelect,
    Textarea: CraftTextarea,

    Diagram: CraftDiagram,
    Grid: CraftGrid,
    Icon: CraftIcon,
    Image: CraftImage,
    Text: CraftText,
    Video: CraftVideo,
  };

  return (
    <>
      {components.map((panel, panelIndex) => {
        return (
          <Accordion
            key={"group_" + panelIndex}
            title={panel.label}
            className="dark:text-white/75"
            headerClassName="uppercase hover:bg-slate-200 dark:hover:bg-slate-800 p-2 flex justify-between text-xs cursor-pointer select-none"
            containerClassName="overflow-hidden transition-all duration-200"
          >
            {panel.items.map((item, componentIndex) => {
              return (
                <Button
                  key={"component_" + componentIndex}
                  className="p-2 inline-block cursor-grab"
                  tooltip={item.title}
                  ref={(ref: any) =>
                    create(
                      ref,
                      item.element.type === "Element" ? (
                        <Element
                          canvas
                          is={o[item.element.is]}
                          {...item.element.props}
                        ></Element>
                      ) : (
                        createElement(o[item.element.type], item.element.props)
                      )
                    )
                  }
                >
                  <Icon className={item.icon} />
                </Button>
              );
            })}
          </Accordion>
        );
      })}
    </>
  );
};
