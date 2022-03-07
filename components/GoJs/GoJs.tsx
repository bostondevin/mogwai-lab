import React from "react";
import { UserComponent, useNode } from "@craftjs/core";
import * as go from "gojs";
import { ReactDiagram } from "gojs-react";

export interface CardProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | number
    | boolean
    | null
    | undefined;
}

export const Cards3D: UserComponent<CardProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  function handleModelChange(changes) {
    // alert("GoJS model changed!");
  }

  function initDiagram() {
    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram = $(go.Diagram, {
      "undoManager.isEnabled": true, // must be set to allow for model change listening
      // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
      "clickCreatingTool.archetypeNodeData": {
        text: "new node",
        color: "lightblue",
      },
      model: new go.GraphLinksModel({
        linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
      }),
    });

    // define a simple Node template
    diagram.nodeTemplate = $(
      go.Node,
      "Auto", // the Shape will go around the TextBlock
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(
        go.Shape,
        "RoundedRectangle",
        { name: "SHAPE", fill: "white", strokeWidth: 0 },
        // Shape.fill is bound to Node.data.color
        new go.Binding("fill", "color")
      ),
      $(
        go.TextBlock,
        { margin: 8, editable: true }, // some room around the text
        new go.Binding("text").makeTwoWay()
      )
    );

    return diagram;
  }

  return (
    <div ref={connect}>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={[
          { key: 0, text: "Alpha", color: "lightblue", loc: "0 0" },
          { key: 1, text: "Beta", color: "orange", loc: "150 0" },
          { key: 2, text: "Gamma", color: "lightgreen", loc: "0 150" },
          { key: 3, text: "Delta", color: "pink", loc: "150 150" },
        ]}
        linkDataArray={[
          { key: -1, from: 0, to: 1 },
          { key: -2, from: 0, to: 2 },
          { key: -3, from: 1, to: 1 },
          { key: -4, from: 2, to: 3 },
          { key: -5, from: 3, to: 0 },
        ]}
        onModelChange={handleModelChange}
      />
    </div>
  );
};

const Card3DConfig = () => {
  return <React.Fragment></React.Fragment>;
};

Cards3D.craft = {
  displayName: "3D Card",
  props: {
    className: "w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg",
  },
  related: {
    toolbar: Card3DConfig,
  },
};
