import React from "react";
import { UserComponent, useNode } from "@craftjs/core";
import ContainerDimensions from "react-container-dimensions";
import Tree from "react-d3-tree";
import TreeNode from "./Node";

export interface TreeGraphProps {
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

export const TreeGraph: UserComponent<TreeGraphProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const data = {
    id: "smith-household",
    accountValue: 2498452.98,
    accountNumber: "8374-9932",
    label: "Smith Family Household",
    type: "household",
    up: true,
    children: [
      {
        id: "smith-betty-client",
        accountNumber: "8374-9932",
        accountValue: 2431760.36,
        label: "Betty Smith",
        type: "client",
        children: [
          {
            id: "smith-betty-account-ira",
            accountNumber: "8374-9932",
            accountValue: 1231.55,
            label: "Betty Smith's IRA",
            type: "account",
          },
          {
            id: "smith-betty-account-401k",
            accountNumber: "8374-9932",
            accountValue: 1431760.36,
            label: "Betty Smith's 401k",
            type: "account",
          },
          {
            id: "smith-betty-account-529",
            accountNumber: "8374-9932",
            accountValue: 1431760.36,
            label: "Betty Smith's 529",
            type: "account",
          },
        ],
      },
      {
        id: "smith-fred-client",
        accountNumber: "8374-9932",
        accountValue: 1000000.0,
        label: "Fred Smith",
        type: "client",
        children: [
          {
            id: "smith-fred-account-ira",
            accountNumber: "8374-9932",
            accountValue: 4832.61,
            label: "Fred Smith's IRA",
            type: "account",
          },
          {
            id: "smith-fred-account-401k",
            accountNumber: "8374-9932",
            accountValue: 61862.21,
            label: "Fred Smith's 401k",
            type: "account",
          },
        ],
      },
    ],
  };

  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <TreeNode
      nodeData={nodeDatum}
      triggerNodeToggle={toggleNode}
      foreignObjectProps={{
        style: {
          width: "300px",
          height: "100px",
          display: "block",
          x: 0,
          y: -40,
        },
      }}
    />
  );

  return (
    <div
      ref={connect}
      id="treeWrapper"
      className="w-full"
      style={{ height: "300px" }}
    >
      <ContainerDimensions>
        {({ width, height }) => (
          <Tree
            hasInteractiveNodes
            data={data}
            depthFactor={0}
            renderCustomNodeElement={renderRectSvgNode}
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"
            collapsible={true}
            zoomable={true}
            shouldCollapseNeighborNodes={true}
            initialDepth={1}
            zoom={1}
            nodeSize={{ x: 200, y: 120 }}
            translate={{ x: width / 2.8, y: height / 2 }}
            dimensions={{ width: width, height: height }}
            enableLegacyTransitions={true}
            transitionDuration={300}
            orientation={"horizontal"}
            scaleExtent={{ min: 0.1, max: 2 }}
            separation={{ siblings: 1, nonSiblings: 2 }}
          />
        )}
      </ContainerDimensions>
    </div>
  );
};

const TreeGraphConfig = () => {
  return <React.Fragment></React.Fragment>;
};

TreeGraph.craft = {
  displayName: "Go.js Diagrap",
  props: {
    className: "w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg",
  },
  related: {
    toolbar: TreeGraphConfig,
  },
};
