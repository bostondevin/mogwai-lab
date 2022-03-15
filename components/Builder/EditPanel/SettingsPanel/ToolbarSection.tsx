import { useNode } from "@craftjs/core";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Divider,
} from "@mui/material";

import React from "react";

export const ToolbarSection = ({ title, props, summary, children }: any) => {
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res: any, key: any) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));

  return (
    <Accordion>
      <AccordionSummary>
        <div className="px-6 w-full">
          <h5 className="text-sm text-light-gray-1 text-left font-medium text-dark-gray">
            {title}
          </h5>
        </div>
      </AccordionSummary>
      <AccordionDetails style={{ padding: "0px 24px 20px" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
