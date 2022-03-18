import React, { createElement } from "react";
import { Element, useEditor } from "@craftjs/core";

import { Accordion } from "../../Accordion";

import { Button } from "../../Elements/Button/Button/Button";
import { Icon } from "../../Elements/Media/Icon/Icon";

import { CraftButton } from "../../Elements/Button/Button/Button.craft";
import { CraftLink } from "../../Elements/Button/Link/Link.craft";

import { CraftArticle } from "../../Elements/Container/Article/Article.craft";
import { CraftAside } from "../../Elements/Container/Aside/Aside.craft";
import { CraftDiv } from "../../Elements/Container/Div/Div.craft";
import { CraftFieldset } from "../../Elements/Container/Fieldset/Fieldset.craft";
import { CraftFooter } from "../../Elements/Container/Footer/Footer.craft";
import { CraftForm } from "../../Elements/Container/Form/Form.craft";
import { CraftHeader } from "../../Elements/Container/Header/Header.craft";
import { CraftMain } from "../../Elements/Container/Main/Main.craft";
import { CraftNav } from "../../Elements/Container/Nav/Nav.craft";
import { CraftSection } from "../../Elements/Container/Section/Section.craft";

import { CraftInput } from "../../Elements/Input/Input/Input.craft";
import { CraftSelect } from "../../Elements/Input/Select/Select.craft";
import { CraftTextarea } from "../../Elements/Input/Textarea/Textarea.craft";

import { CraftDiagram } from "../../Elements/Media/Diagram/Diagram.craft";
import { CraftGrid } from "../../Elements/Media/Grid/Grid.craft";
import { CraftIcon } from "../../Elements/Media/Icon/Icon.craft";
import { CraftImage } from "../../Elements/Media/Image/Image.craft";
import { CraftText } from "../../Elements/Media/Text/Text.craft";
import { CraftVideo } from "../../Elements/Media/Video/Video.craft";

import { components } from "../../../constants/components";

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
            className="bg-slate-700 text-white/75"
            headerClassName="uppercase bg-slate-800 hover:bg-slate-900 hover:text-white/100 p-2 flex justify-between text-xs cursor-pointer"
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
