import React, { createElement } from "react";
import { Element, useEditor } from "@craftjs/core";

import { Accordion } from "../../Elements/Core/Accordion";

import { Button } from "../../Elements/Core/Button";
import { Icon } from "../../Elements/Core/Icon";

import { CraftButton } from "../../Elements/Button.craft";
import { CraftLink } from "../../Elements/Link.craft";

import { CraftArticle } from "../../Elements/Article.craft";
import { CraftAside } from "../../Elements/Aside.craft";
import { CraftDiv } from "../../Elements/Div.craft";
import { CraftFieldset } from "../../Elements/Fieldset.craft";
import { CraftFooter } from "../../Elements/Footer.craft";
import { CraftForm } from "../../Elements/Form.craft";
import { CraftHeader } from "../../Elements/Header.craft";
import { CraftMain } from "../../Elements/Main.craft";
import { CraftNav } from "../../Elements/Nav.craft";
import { CraftSection } from "../../Elements/Section.craft";

import { CraftOrderedList } from "../../Elements/OrderedList.craft";
import { CraftUnOrderedList } from "../../Elements/UnOrderedList.craft";
import { CraftListItem } from "../../Elements/ListItem.craft";

import { CraftInput } from "../../Elements/Input.craft";
import { CraftSelect } from "../../Elements/Select.craft";
import { CraftTextarea } from "../../Elements/Textarea.craft";

import { CraftDiagram } from "../../Elements/Diagram.craft";
import { CraftGrid } from "../../Elements/Grid.craft";
import { CraftIcon } from "../../Elements/Icon.craft";
import { CraftImage } from "../../Elements/Image.craft";
import { CraftText } from "../../Elements/Text.craft";
import { CraftVideo } from "../../Elements/Video.craft";

import { components } from "../../../constants/components";
import { pro } from "../../../constants/fontawesome-free";

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
