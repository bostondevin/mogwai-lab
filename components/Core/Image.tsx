import React from "react";

export interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
  style?: any;
}

export const Image = React.forwardRef((props: ImageProps, ref: any) => (
  <picture ref={ref} className={props.className} style={props.style}>
    <img {...props} />
  </picture>
));
