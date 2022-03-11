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

export const Cards3D: UserComponent<CardProps> = () => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [breadCrumbs, setBreadCrumbs] = useState([]);

  const widthIcon = 30,
    heightContent = 80;

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const fgRef = useCallback((node: ReactDiagram) => {
    if (node) {
    }
  }, []);

  const clickBreadCrumb = (item) => {
    console.log(item);
  };

  function handleModelChange() {
    // alert("GoJS model changed!");
  }

  function expandNode(node) {
    var diagram = node.diagram;

    diagram.startTransaction("CollapseExpandTree");
    // this behavior is specific to this incrementalTree sample:
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
      "commandHandler.copiesTree": true, // for the copy command
      "commandHandler.deletesTree": true, // for the delete command
      "draggingTool.dragsTree": false, // dragging for both move and copy
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
        isTreeExpanded: false,
        isTreeLeaf: false,
        //        isShadowed: true,
        //        shadowVisible: true,
        //        shadowColor: "#555555",
        //        shadowOffset: new go.Point(2, 2),
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

        /*
        $(go.Panel, {
          alignment: go.Spot.TopRight,
          background: "white",
          width: widthIcon,
          height: heightContent,
          padding: 8,
          margin: 2,
        }),
*/
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
          // customize the expander behavior to
          // create children if the node has never been expanded
          visible: false,
          click: (e, obj) => {
            // OBJ is the Button
            var node = obj.part; // get the Node containing this Button
            if (node === null) return;
            e.handled = true;
            expandNode(node);
          },
        },
        new go.Binding("visible", "children", (v) => v.length > 0)
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
      },
      {
        key: "Franklin-betty-client",
        accountNumber: "8374-9932",
        accountValue: 2431760.36,
        label: "Betty Franklin",
        type: "client",
      },
      {
        key: "Franklin-fred-client",
        accountNumber: "8374-9932",
        accountValue: 1000000.0,
        label: "Fred Franklin",
        type: "client",
      },

      {
        key: "Franklin-wilma-client",
        accountNumber: "8374-9932",
        accountValue: 1000000.0,
        label: "Wilma Franklin",
        type: "client",
      },

      {
        key: "Franklin-betty-account-ira",
        accountNumber: "8374-9932",
        accountValue: 1231.55,
        label: "Betty Smith's IRA",
        type: "account",
      },
      {
        key: "Franklin-betty-account-401k",
        accountNumber: "8374-9932",
        accountValue: 1431760.36,
        label: "Betty Smith's 401k",
        type: "account",
      },

      {
        key: "Franklin-fred-account-ira",
        accountNumber: "8374-9932",
        accountValue: 4832.61,
        label: "Fred Smith's IRA",
        type: "account",
      },
      {
        key: "Franklin-fred-account-401k",
        accountNumber: "8374-9932",
        accountValue: 61862.21,
        label: "Fred Smith's 401k",
        type: "account",
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
      <div>
        {breadCrumbs.map((item) => {
          return (
            <span key={item.key} className="mr-2">
              <button onClick={clickBreadCrumb}>{item.label}</button> &gt;
            </span>
          );
        })}
      </div>

      <ReactDiagram
        ref={fgRef}
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={graphData.nodes}
        onModelChange={handleModelChange}
      />
    </div>
  );
};

const Card3DConfig = () => {
  return <React.Fragment></React.Fragment>;
};

Cards3D.craft = {
  displayName: "Diagram",
  props: {
    className: "w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg",
  },
  related: {
    toolbar: Card3DConfig,
  },
};
