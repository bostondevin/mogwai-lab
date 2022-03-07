import React, { useCallback, useRef, useEffect } from "react";
import { UserComponent, useNode, NodeElement } from "@craftjs/core";
import * as d3 from "d3";
import ForceGraph3D, { ForceGraphMethods } from "react-force-graph-3d";
import { sampleData } from "./forceGraphUtils";
import ContainerDimensions from "react-container-dimensions";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";

// const _ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
// ssr: false
// });
/*
const ForwardGraph3D = forwardRef(
  (props: ForceGraphProps, ref: MutableRefObject<ForceGraphMethods>) => (
    <ForceGraph3D {...props} ref={ref} />
  )
);
*/
const ForceGraphBase = () => {
  const fgRef = useRef<ForceGraphMethods>();
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const extraRenderers = [new CSS2DRenderer()];

  const linkColor = (node) => {
    return node.joint ? "lime" : "white";
  };

  const nodeColor = (node) => {
    return undefined;
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

  useEffect(() => {
    if (fgRef && fgRef.current) {
      const fg = fgRef.current;
      // const newVector = { x: 1, y: 1 };
      // const bloomPass = new UnrealBloomPass(newVector, 3, 1, 0.1);
      // fgRef.current.postProcessingComposer().addPass(bloomPass);

      //const LINK_LENGTH_CONSTANT = 123;
      //fg.d3Force("link").distance((link) => 300);

      //fg.d3Force("collide", d3.forceCollide(4));
    }
  }, []);

  const stopEngine = () => {
    //fgRef.current.d3Force("link").distance((link) => 300);
    //fgRef.current.zoomToFit(400);
  };

  const handleClick = useCallback(
    (node) => {
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      if (fgRef.current) {
        console.log(fgRef.current);
        fgRef.current.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio,
          },
          node,
          1000
        );
      }
    },
    [fgRef]
  );

  return (
    <div className="h-full w-full" ref={connect}>
      <ContainerDimensions>
        {({ width }) => (
          <ForceGraph3D
            ref={fgRef}
            width={width}
            height={400}
            graphData={sampleData}
            nodeLabel="label"
            onNodeClick={handleClick}
            linkDirectionalParticles={2}
            linkDirectionalParticleWidth={1.4}
            linkColor={linkColor}
            linkOpacity={0.8}
            linkWidth={0.3}
            nodeColor={nodeColor}
            extraRenderers={extraRenderers}
            nodeThreeObject={nodeThreeObject}
            nodeThreeObjectExtend={true}
            cooldownTicks={100}
            onEngineStop={stopEngine}
          />
        )}
      </ContainerDimensions>
    </div>
  );
};

export default ForceGraphBase;
