import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { DivContainer } from "../Core/Div";
import { Form } from "../Core/Form";
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
        <div
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
        </div>
      )}

      {props.type === "aside" && (
        <aside
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
        </aside>
      )}

      {props.type === "nav" && (
        <nav
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
        </nav>
      )}

      {props.type === "header" && (
        <header
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
        </header>
      )}

      {props.type === "footer" && (
        <footer
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
        </footer>
      )}

      {props.type === "section" && (
        <section
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
        </section>
      )}

      {props.type === "article" && (
        <article
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
        </article>
      )}

      {props.type === "fieldset" && (
        <fieldset
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
        </fieldset>
      )}

      {props.type === "main" && (
        <main
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
        </main>
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
