import React, { useState, useEffect, useCallback } from "react";
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
  const [graphData, setGraphData] = useState([]);

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const fgRef = useCallback((node: ReactDiagram) => {
    if (node) {
      setGraphData([
        {
          key: 0,
          color: "red",
          everExpanded: false,
          id: "smith-household",
          accountValue: 2498452.98,
          accountNumber: "8374-9932",
          label: "Smith Family Household",
          type: "household",
        },
      ]);
    }
  }, []);

  function handleModelChange(changes) {
    // alert("GoJS model changed!");
  }

  function expandNode(node) {
    var diagram = node.diagram;

    function createSubTree(parentdata) {
      var numchildren = Math.floor(Math.random() * 10);

      if (diagram.nodes.count <= 1) {
        numchildren += 1; // make sure the root node has at least one child
      }

      // create several node data objects and add them to the model
      var model = diagram.model;
      var parent = diagram.findNodeForData(parentdata);

      var degrees = 1;
      var grandparent = parent.findTreeParentNode();
      while (grandparent) {
        degrees++;
        grandparent = grandparent.findTreeParentNode();
      }

      for (var i = 0; i < numchildren; i++) {
        var childdata = {
          key: model.nodeDataArray.length,
          parent: parentdata.key,
          rootdistance: degrees,
        };

        // add to model.nodeDataArray and create a Node
        model.addNodeData(childdata);
        // position the new child node close to the parent
        var child = diagram.findNodeForData(childdata);
        child.location = parent.location;
      }
      return numchildren;
    }

    diagram.startTransaction("CollapseExpandTree");
    // this behavior is specific to this incrementalTree sample:
    var data = node.data;
    if (!data.everExpanded) {
      // only create children once per node
      diagram.model.setDataProperty(data, "everExpanded", true);
      var numchildren = createSubTree(data);

      if (numchildren === 0) {
        // now known no children: don't need Button!
        node.findObject("TREEBUTTON").visible = false;
      }
    }
    // this behavior is generic for most expand/collapse tree buttons:
    if (node.isTreeExpanded) {
      diagram.commandHandler.collapseTree(node);
    } else {
      diagram.commandHandler.expandTree(node);
    }
    diagram.commitTransaction("CollapseExpandTree");
    diagram.zoomToFit();
  }

  function initDiagram() {
    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram = $(go.Diagram, {
      initialContentAlignment: go.Spot.Center,
      layout: $(go.ForceDirectedLayout),
      // moving and copying nodes also moves and copies their subtrees
      "commandHandler.copiesTree": true, // for the copy command
      "commandHandler.deletesTree": true, // for the delete command
      "draggingTool.dragsTree": true, // dragging for both move and copy
      "undoManager.isEnabled": true,
      model: new go.TreeModel(graphData),
    });

    diagram.nodeTemplate = $(
      go.Node,
      "Spot",
      {
        selectionObjectName: "PANEL",
        isTreeExpanded: false,
        isTreeLeaf: false,
        isShadowed: true,
        shadowVisible: true,
        shadowColor: "#555555",
        shadowOffset: new go.Point(2, 2),
      },
      // the node's outer shape, which will surround the text
      $(
        go.Panel,
        "Auto",
        { name: "PANEL" },
        $(
          go.Shape,
          "RoundedRectangle",
          {
            fill: "whitesmoke",
            stroke: "black",
            strokeWidth: 2,
            parameter1: 8, // set the rounded corner
            spot1: go.Spot.TopLeft,
            spot2: go.Spot.BottomRight, // make content go all the way to inside edges of rounded corners
          },
          new go.Binding("fill", "type", (v) => {
            let lightColor = "#EAA5F2";
            switch (v) {
              case "household":
                lightColor = "#95c7f3";
                break;
              case "client":
                lightColor = "#95c7f3";
                break;
            }
            return lightColor;
          }),
          new go.Binding("stroke", "type", (v) => {
            let darkColor = "#CD1FDE";
            switch (v) {
              case "household":
                darkColor = "#0071dc";
                break;
              case "client":
                darkColor = "#0071dc";
                break;
            }
            return darkColor;
          })
        ),

        $(go.Panel, {
          alignment: go.Spot.TopRight,
          background: "white",
          parameter1: 8, // set the rounded corner
          width: 155,
          height: 80,
          padding: 8,
          margin: 2,
        }),

        $(
          go.Panel,
          "Table",
          {
            defaultAlignment: go.Spot.Left,
            margin: go.Margin.parse("0 0 0 0"),
          },
          $(go.RowColumnDefinition, { column: 2 }),

          $(
            go.TextBlock,
            {
              text: "$",
              font: "10pt FontAwesome",
              row: 0,
              stroke: "black",
              column: 0,
              rowSpan: 3,
              margin: go.Margin.parse("0 8 0 8"),
              alignment: go.Spot.Center,
            },
            new go.Binding("text", "type", (v) => {
              let iconClass = "$";

              switch (v) {
                case "household":
                  iconClass = "\uf0c0";
                  break;
                case "client":
                  iconClass = "\uf007";
                  break;
              }

              return iconClass;
            }),
            new go.Binding("stroke", "type", (v) => {
              let darkColor = "#CD1FDE";
              switch (v) {
                case "household":
                  darkColor = "#0071dc";
                  break;
                case "client":
                  darkColor = "#0071dc";
                  break;
              }
              return darkColor;
            })
          ),

          $(
            go.TextBlock,
            { row: 0, column: 1, alignment: go.Spot.Left },
            {
              font: "normal 12px sans-serif",
              margin: go.Margin.parse("8 0 4 0"),
              opacity: 0.5,
            },
            new go.Binding("text", "accountNumber")
          ),

          $(
            go.TextBlock,
            {
              row: 1,
              column: 1,
              alignment: go.Spot.Left,
              font: "normal small sans-serif",
              margin: go.Margin.parse("0 8 4 0"),
            },
            new go.Binding("text", "label")
          ),

          $(
            go.TextBlock,
            {
              row: 2,
              column: 1,
              alignment: go.Spot.Left,
              font: "bold medium sans-serif",
              margin: go.Margin.parse("0 0 8 0"),
            },
            new go.Binding("text", "accountValue", (v) =>
              v.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            )
          )
        )
      ),

      $("TreeExpanderButton", {
        name: "TREEBUTTON",
        width: 20,
        height: 20,
        alignment: go.Spot.TopRight,
        alignmentFocus: go.Spot.Center,
        // customize the expander behavior to
        // create children if the node has never been expanded
        click: (e, obj) => {
          // OBJ is the Button
          var node = obj.part; // get the Node containing this Button
          if (node === null) return;
          e.handled = true;
          expandNode(node);
        },
      })
    );

    diagram.model = new go.TreeModel([
      {
        key: 0,
        everExpanded: false,
        accountValue: 2498452.98,
        accountNumber: "8374-9932",
        label: "Smith Family Household",
        type: "household",
      },
    ]);

    return diagram;
  }

  return (
    <div ref={connect}>
      <ReactDiagram
        ref={fgRef}
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={graphData}
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
