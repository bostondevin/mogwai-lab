export const nodeHook = (node) => ({
  selected: node.events.selected,
});

export const editorHook = (state) => ({
  enabled: state.options.enabled,
});

export const editorEnabledAppend = " outline-1";
export const emptyContainerClass =
  "border-dashed border-4 border-black/10 hover:border-black/30 h-full w-full flex";
export const emptyContainerStyle = { minHeight: "50px" };