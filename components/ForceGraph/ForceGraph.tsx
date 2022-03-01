import { UserComponent, useNode, NodeElement } from "@craftjs/core";
import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ContainerDimensions from "react-container-dimensions";

import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";
// import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
// import SVGLoader from "three/examples/jsm/loaders/SVGLoader";
// import BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils";
// import SpriteText from "three-spritetext";
import "d3-quadtree";
import "d3-force";

const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
});

import { sampleData } from "./forceGraphUtils";

export type ForceGraphProps = {
  className?: string;
  dataSource?: string;
};

export const ForceGraph: UserComponent<ForceGraphProps> = () => {
  const fgRef = useRef();
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const extraRenderers = [new CSS2DRenderer()];

  /*
useEffect(() => { 
fgRef.current.d3Force('link').distance((link) => link.source[params.distance] 
}, [params.distance])

  useEffect(() => {
    const newVector = { x: 1, y: 1 };
    const bloomPass = new UnrealBloomPass();
    bloomPass.strength = 3;
    bloomPass.radius = 1;
    bloomPass.threshold = 0.1;
    if (fgRef && fgRef.current) {
      fgRef.current.postProcessingComposer().addPass(bloomPass);
    }
  }, []);
  */

  useEffect(() => {
    const fg = fgRef.current;

    /*
    console.log("FORCCCEEEEEE");
    fg.d3Force(
      "link",
      d3.forceLink().distance((d) => d.distance)
    );
    fg.d3Force("charge", d3.forceManyBody().theta(0.5).strength(-1));
    */

    setGraphData(sampleData);
  }, []);

  const linkColor = (node) => {
    return node.joint ? "lime" : "white";
  };

  const nodeColor = (node) => {
    return undefined;
  };

  const nodeClick = (node) => {
    const distance = 40;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

    const fg = fgRef.current;
    fg.centerAt(node.x, node.y, 1000);
    fg.zoom(8, 2000);
  };

  const nodeThreeObject = (node) => {
    let iconClass = "fas fa-dollar-sign";
    let lightColor = "#EAA5F2";
    let darkColor = "#CD1FDE";

    switch (node.type) {
      case "household":
        iconClass = "fas fa-users";
        lightColor = "#95c7f3";
        darkColor = "#0071dc";
        break;
      case "client":
        iconClass = "fas fa-user";
        lightColor = "#95c7f3";
        darkColor = "#0071dc";
        break;
    }

    const nodeEl = document.createElement("div");
    nodeEl.style.width = "180px";
    nodeEl.style.borderColor = darkColor;
    nodeEl.style.backgroundColor = lightColor;
    nodeEl.className = "shadow rounded-lg border-2 flex";

    const iconContainer = document.createElement("div");
    iconContainer.className = "grid place-items-center";
    iconContainer.style.width = "50px";
    iconContainer.style.borderRight = "solid 2px " + darkColor;

    const icon = document.createElement("i");

    icon.className = iconClass + " text-white";
    icon.style.color = darkColor;

    iconContainer.appendChild(icon);
    nodeEl.appendChild(iconContainer);

    const infoContainer = document.createElement("div");
    infoContainer.className = "p-2 bg-white w-full";

    const accountNumber = document.createElement("div");
    accountNumber.className = "text-xs opacity-50";
    accountNumber.textContent = node.accountNumber;

    const nodeTitle = document.createElement("div");
    nodeTitle.className = "text-xs opacity-80 bold";
    nodeTitle.textContent = node.label;

    const nodeValue = document.createElement("div");
    nodeValue.className = "text-md";
    nodeValue.textContent = node.accountValue.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    infoContainer.appendChild(accountNumber);
    infoContainer.appendChild(nodeTitle);
    infoContainer.appendChild(nodeValue);

    nodeEl.appendChild(infoContainer);

    return new CSS2DObject(nodeEl);
  };

  return (
    <div className="h-full w-full" ref={connect}>
      <ContainerDimensions>
        {({ width }) => (
          <ForceGraph3D
            ref={fgRef}
            graphData={graphData}
            extraRenderers={extraRenderers}
            nodeColor={nodeColor}
            linkColor={linkColor}
            linkOpacity={0.8}
            linkWidth={0.3}
            onNodeClick={nodeClick}
            nodeThreeObject={nodeThreeObject}
            nodeThreeObjectExtend={true}
            linkDirectionalParticles={2}
            linkDirectionalParticleWidth={1.4}
            width={width}
            height={550}
          />
        )}
      </ContainerDimensions>
    </div>
  );
};

ForceGraph.craft = {
  displayName: "Force Graph",
  props: {
    dataSource: "/sampleData",
    className: "h-full w-full",
  },
  related: {
    // toolbar: ButtonConfig,
  },
};
