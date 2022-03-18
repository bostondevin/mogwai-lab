import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";
import { Diagram } from "./Diagram";
import { DiagramProps } from "gojs-react";
import { DiagramSettings } from "../../../Builder/toolbar/DiagramSettings";
import { nodeHook, editorHook } from "../../../Builder/toolbar/craft.utils";

export const CraftDiagram: UserComponent<DiagramProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const { enabled } = useEditor(editorHook);

  return <Diagram ref={connect} {...props} />;
};

CraftDiagram.craft = {
  displayName: "Diagram",
  props: {},
  rules: {
    canDrag: () => true,
    /*
    canMoveIn: (nodes) =>
      nodes.every((node) => node.data.type === Text || node.data.type === Icon),
      */
  },
  related: {
    toolbar: DiagramSettings,
  },
};
