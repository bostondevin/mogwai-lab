import React, { useState, useCallback } from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";

import { nodeHook, editorHook } from "../Builder/toolbar/craft.utils";
import { ReactDiagram, DiagramProps } from "gojs-react";

import * as go from "gojs";

export const CraftDiagram: UserComponent<DiagramProps> = () => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [breadCrumbs, setBreadCrumbs] = useState([]);

  const widthIcon = 30,
    heightContent = 80;

  const { enabled } = useEditor(editorHook);
  const {
    connectors: { connect },
  } = useNode(nodeHook);

  const fgRef = useCallback((node: ReactDiagram) => {
    if (node) {
    }
  }, []);

  const clickBreadCrumb = (item) => {
    console.log(item);
  };

  function handleModelChange() {}

  function expandNode(node) {
    var diagram = node.diagram;

    diagram.startTransaction("CollapseExpandTree");

    var data = node.data;

    const newBreadcrumbs = breadCrumbs.filter(
      (d) => d.rootdistance < data.rootdistance
    );
    setBreadCrumbs([...newBreadcrumbs, ...[data]]);

    if (!data.everExpanded) {
      diagram.model.setDataProperty(data, "everExpanded", true);
    }

    //const immediateChildren = graphData.filter((d) => d.parent === data.key);

    //node.findObject("TREEBUTTON").visible = immediateChildren.length > 0;

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
      "commandHandler.copiesTree": true,
      "commandHandler.deletesTree": true,
      "draggingTool.dragsTree": false,
      "undoManager.isEnabled": true,
      allowZoom: true,
      minScale: 0.5,
      maxScale: 3,
    });

    diagram.linkTemplate = $(
      go.Link,
      $(
        go.Shape,
        new go.Binding("stroke", "color"),
        new go.Binding("strokeWidth", "width"),
        new go.Binding("strokeDashArray", "dash")
      ),
      $(
        go.Panel,
        "Auto",
        $(
          go.Shape,
          "RoundedRectangle",
          {
            fill: "black",
            width: 40,
          },
          new go.Binding("visible", "showLabel")
        ),
        $(
          go.TextBlock,
          { margin: 3, text: "Joint", stroke: "white" },
          new go.Binding("text", "label"),
          new go.Binding("visible", "showLabel")
        )
      )
    );

    diagram.nodeTemplate = $(
      go.Node,
      "Spot",
      {
        selectionObjectName: "PANEL",
        selectionAdorned: false,
        isTreeExpanded: false,
        isTreeLeaf: false,
        isShadowed: true,
        shadowVisible: true,
        shadowColor: "white",
        shadowOffset: new go.Point(0, 0),
        shadowBlur: 10,
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
            fill: "white",
            stroke: "black",
            strokeWidth: 2,
            parameter1: 8, // set the rounded corner
            spot1: go.Spot.TopLeft,
            spot2: go.Spot.BottomRight, // make content go all the way to inside edges of rounded corners
          },
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
        // new Spot(x?: number, y?: number, offx?: number, offy?: number)

        $(
          go.Shape,
          "RoundedRectangle",
          {
            alignment: new go.Spot(0, 0, 1, 1),
            fill: "white",
            width: widthIcon,
            height: heightContent,
            strokeWidth: 2,
            stroke: "transparent",
            parameter1: 8,
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
          })
        ),

        $(
          go.Shape,
          "Rectangle",
          {
            alignment: new go.Spot(0, 0, 22, 2),
            fill: "white",
            width: 10,
            height: 10,
            strokeWidth: 0,
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
          })
        ),

        $(
          go.Shape,
          "Rectangle",
          {
            alignment: new go.Spot(0, 0, 22, heightContent - 8),
            fill: "white",
            width: 10,
            height: 10,
            strokeWidth: 0,
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
          })
        ),

        $(
          go.Panel,
          "Table",
          {
            defaultAlignment: go.Spot.Left,
            margin: go.Margin.parse("0 10 0 0"),
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
              margin: go.Margin.parse("0 16 0 8"),
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
              overflow: go.TextBlock.OverflowEllipsis,
              maxLines: 2,
              width: 130,
            },
            new go.Binding("text", "label"),
            new go.Binding("width", "label", (v) => (v.length > 40 ? 250 : 110))
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

      $(
        "TreeExpanderButton",
        {
          name: "TREEBUTTON",
          width: 20,
          height: 20,
          alignment: go.Spot.TopRight,
          alignmentFocus: go.Spot.Center,
          visible: false,
          click: (e, obj) => {
            const node = obj.part;
            if (node === null) return;
            e.handled = true;
            expandNode(node);
          },
        },
        new go.Binding("visible", "hasChildren")
      )
    );

    const nodes = [
      {
        key: "Franklin-household",
        accountNumber: "8374-9932",
        label:
          "Franklin Family Household Wrapping Really Very Incredibly Amazingly Long Name",
        accountValue: 2498452.98,
        type: "household",
        hasChildren: true,
      },
      {
        key: "Franklin-betty-client",
        accountNumber: "8374-9932",
        accountValue: 2431760.36,
        label: "Betty Franklin",
        type: "client",
        hasChildren: true,
      },
      {
        key: "Franklin-fred-client",
        accountNumber: "8374-9932",
        accountValue: 1000000.0,
        label: "Fred Franklin",
        type: "client",
        hasChildren: true,
      },

      {
        key: "Franklin-wilma-client",
        accountNumber: "8374-9932",
        accountValue: 1000000.0,
        label: "Wilma Franklin",
        type: "client",
        hasChildren: false,
      },

      {
        key: "Franklin-betty-account-ira",
        accountNumber: "8374-9932",
        accountValue: 1231.55,
        label: "Betty Smith's IRA",
        type: "account",
        hasChildren: false,
      },
      {
        key: "Franklin-betty-account-401k",
        accountNumber: "8374-9932",
        accountValue: 1431760.36,
        label: "Betty Smith's 401k",
        type: "account",
        hasChildren: false,
      },

      {
        key: "Franklin-fred-account-ira",
        accountNumber: "8374-9932",
        accountValue: 4832.61,
        label: "Fred Smith's IRA",
        type: "account",
        hasChildren: false,
      },
      {
        key: "Franklin-fred-account-401k",
        accountNumber: "8374-9932",
        accountValue: 61862.21,
        label: "Fred Smith's 401k",
        type: "account",
        hasChildren: false,
      },
    ];

    const links = [
      {
        from: "Franklin-household",
        to: "Franklin-betty-client",
        showLabel: false,
        color: "white",
      },
      {
        from: "Franklin-household",
        to: "Franklin-fred-client",
        showLabel: false,
        color: "white",
      },
      {
        from: "Franklin-household",
        to: "Franklin-wilma-client",
        showLabel: false,
        color: "white",
      },

      {
        from: "Franklin-betty-client",
        to: "Franklin-betty-account-ira",
        showLabel: false,
        color: "white",
      },
      {
        from: "Franklin-betty-client",
        to: "Franklin-betty-account-401k",
        showLabel: false,
        color: "white",
      },
      {
        from: "Franklin-betty-client",
        to: "Franklin-fred-account-401k",
        showLabel: true,
        color: "white",
        dash: [5, 5],
      },

      {
        from: "Franklin-fred-client",
        to: "Franklin-fred-account-ira",
        showLabel: false,
        color: "white",
      },
      {
        from: "Franklin-fred-client",
        to: "Franklin-fred-account-401k",
        showLabel: false,
        color: "white",
      },
    ];

    setGraphData({ nodes, links });

    const diagramModel = (diagram.model = new go.GraphLinksModel(nodes, links));
    diagramModel.linkKeyProperty = "key";

    return diagram;
  }

  return (
    <div ref={connect} className="gradientDark">
      <ReactDiagram
        ref={fgRef}
        initDiagram={initDiagram}
        divClassName="h-full w-full"
        nodeDataArray={graphData.nodes}
        onModelChange={handleModelChange}
      />
    </div>
  );
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
  related: {},
};
