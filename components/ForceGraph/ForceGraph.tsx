import dynamic from "next/dynamic";

const ForceGraph = dynamic(() => import("./_ForceGraph"), {
  ssr: false,
});

export default ForceGraph;
