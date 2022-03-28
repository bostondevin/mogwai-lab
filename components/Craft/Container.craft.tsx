import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { DivContainer } from "../Core/Div";
import { Aside } from "../Core/Aside";
import { Nav } from "../Core/Nav";
import { Header } from "../Core/Header";
import { Footer } from "../Core/Footer";
import { Section } from "../Core/Section";
import { Article } from "../Core/Article";
import { Fieldset } from "../Core/Fieldset";
import { Main } from "../Core/Main";
import { Form, FormProps } from "../Core/Form";
import { CraftListItem } from "./ListItem.craft";
import { ContainerProps } from "../common.interface";

import { ContainerSettings } from "../Builder/toolbar/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/toolbar/craft.utils";

export const CraftContainer: UserComponent<ContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <>
      {props.type === "form" && (
        <Form
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}
          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </Form>
      )}

      {props.type === "div" && (
        <DivContainer
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </DivContainer>
      )}

      {props.type === "aside" && (
        <Aside
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </Aside>
      )}

      {props.type === "nav" && (
        <Nav
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </Nav>
      )}

      {props.type === "header" && (
        <Header
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </Header>
      )}

      {props.type === "footer" && (
        <Footer
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </Footer>
      )}

      {props.type === "section" && (
        <Section
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </Section>
      )}

      {props.type === "article" && (
        <Article
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </Article>
      )}

      {props.type === "fieldset" && (
        <Fieldset
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </Fieldset>
      )}

      {props.type === "main" && (
        <Main
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <DivContainer
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></DivContainer>
          )}
        </Main>
      )}
    </>
  );
};

CraftContainer.craft = {
  displayName: "Container",
  props: {},
  rules: {
    canDrag: () => true,
    canMoveIn: (nodes) => {
      return nodes.every((node) => node.data.type !== CraftListItem);
    },
  },
  related: {
    toolbar: ContainerSettings,
  },
};
