import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

function StyledRadio(props) {
  return <Radio disableRipple color="default" {...props} />;
}

export const ToolbarRadio = ({ value, label }: any) => {
  return (
    <FormControlLabel value={value} control={<StyledRadio />} label={label} />
  );
};
