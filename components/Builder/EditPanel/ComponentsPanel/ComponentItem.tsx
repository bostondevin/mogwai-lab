import { useEditor } from "@craftjs/core";
import { Tooltip } from "@mui/material";
import { Icon } from "../../../Icon/Icon";

export type ComponentItemProps = {
  label: string;
  icon: string;
  element: JSX.Element;
};

export const ComponentItem = (props: ComponentItemProps) => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <div
      title={props.label}
      ref={(ref) => create(ref, props.element)}
      className="p-2 inline-block cursor-grab"
    >
      <Icon className={props.icon} />
    </div>
  );
};
