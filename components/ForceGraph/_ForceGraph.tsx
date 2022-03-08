import React, { useCallback, useRef, useEffect, useState } from "react";
import { UserComponent, useNode, NodeElement } from "@craftjs/core";
import * as d3 from "d3";
import ForceGraph3D, { ForceGraphMethods } from "react-force-graph-3d";
import { sampleData } from "./forceGraphUtils";
import ContainerDimensions from "react-container-dimensions";
import SpriteText from "three-spritetext";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import { Vector2 } from "three";

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
  // const fgRef = useRef<ForceGraphMethods>();
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  const fgRef = useCallback((node: ForceGraphMethods) => {
    if (node) {
      // node.zoomToFit(100, 20);

      const newVector = new Vector2(1000, 400);
      const bloomPass = new UnrealBloomPass(newVector, 0.3, 0.4, 0.2);
      //node.postProcessingComposer().addPass(bloomPass);

      node.d3Force("link").distance(2);
      node.d3Force("collide", d3.forceCollide(50));
      node.d3ReheatSimulation();

      setGraphData(sampleData);
    }
  }, []);

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
    return "transparent";
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

    const sprite = new SpriteText(node.label);
    sprite.material.depthWrite = false; // make sprite background transparent
    sprite.color = darkColor;
    sprite.textHeight = 6;
    sprite.borderRadius = 5;
    sprite.backgroundColor = "#ffffff";
    sprite.fontFace = "Arial";
    sprite.fontSize = 70;
    sprite.fontWeight = "normal";
    sprite.padding = 8;
    sprite.borderWidth = 2;
    sprite.borderColor = darkColor;
    return sprite;

    /*
    

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
    */
  };

  useEffect(() => {
    if (fgRef && fgRef.current) {
      const fg = fgRef.current;

      //fg.d3Force("center", null);
      //fg.d3Force("charge", null);

      // fgRef.current.d3Force("collision", d3.forceCollide(500));
      //fgRef.current.d3Force("collide", d3.forceCollide(4));

      //const LINK_LENGTH_CONSTANT = 123;
      //fg.d3Force("link").distance((link) => 300);

      // fg.d3Force("link").distance((link) => 300);
      // fgRef.numDimensions(3);

      //fg.d3Force("collide", d3.forceCollide(4));

      //fgRef.current.zoomToFit(100);
    }
  }, []);

  const stopEngine = () => {
    //fgRef.current.d3Force("collision", d3.forceCollide(0.2));
    // fgRef.current.d3Force("link").distance(100);
    //fgRef.current.zoomToFit(400);
  };

  const handleClick = useCallback(
    (node) => {
      const distance = 80;
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
            graphData={graphData}
            width={width}
            height={400}
            onNodeClick={handleClick}
            linkDirectionalParticles={2}
            linkDirectionalParticleWidth={1.4}
            linkColor={linkColor}
            linkOpacity={0.8}
            linkWidth={0.3}
            nodeColor={nodeColor}
            nodeThreeObject={nodeThreeObject}
            onEngineStop={stopEngine}
            warmUpTicks={500}
            cooldownTicks={500}
          />
        )}
      </ContainerDimensions>
    </div>
  );
};

export default ForceGraphBase;
