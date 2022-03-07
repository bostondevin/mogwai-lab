import { useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
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
      ref={(ref) => create(ref, props.element)}
      className="m-2 p-2 inline-block cursor-move"
    >
      <Tooltip title={props.label} placement="right">
        <Icon className={props.icon} />
      </Tooltip>
    </div>
  );
};
