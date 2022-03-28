import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { CraftListItem } from "./ListItem.craft";
import { ContainerProps } from "../common.interface";

import { ContainerSettings } from "../Builder/settings/ContainerSettings";
import {
  nodeHook,
  editorHook,
  emptyContainerClass,
  emptyContainerStyle,
  editorEnabledAppend,
} from "../Builder/settings/craft.utils";

export const CraftContainer: UserComponent<ContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return (
    <>
      {props.type === "div" && (
        <div
          ref={connect}
          {...props}
          className={props.className + (enabled ? editorEnabledAppend : "")}
        >
          {props.children}

          {!props.children && enabled && (
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
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
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
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
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
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
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
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
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
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
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
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
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
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
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
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
            <div
              className={emptyContainerClass}
              style={emptyContainerStyle}
            ></div>
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
