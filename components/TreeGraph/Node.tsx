import React from "react";

const TreeNode = ({
  nodeData = {},
  triggerNodeToggle,
  foreignObjectProps = {},
}) => {
  const formatCurrency = (v) => {
    return v
      ? v.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      : "0.00";
  };

  let iconClass = "fas fa-dollar-sign";
  let lightColor = "#EAA5F2";
  let darkColor = "#CD1FDE";

  switch (nodeData.type) {
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

  return (
    <React.Fragment>
      <foreignObject {...foreignObjectProps}>
        <div
          className="relative"
          style={{ width: "175px" }}
          onPointerUp={triggerNodeToggle}
        >
          {nodeData.children && (
            <button
              type="button"
              style={{ right: "2px", top: "2px" }}
              title={
                !nodeData.__rd3t.collapsed
                  ? "Collapse"
                  : "Expand " + nodeData.children.length
              }
              className={
                nodeData.__rd3t.collapsed
                  ? "absolute rounded-full text-sm p-1 text-center inline-flex items-center opacity-50"
                  : "absolute rounded-full text-sm p-1 text-center inline-flex items-center opacity-20"
              }
            >
              <i
                className={
                  nodeData.__rd3t.collapsed ? "fas fa-plus" : "fas fa-minus"
                }
              />
            </button>
          )}

          <div
            className="rounded bg-white shadow-lg border flex"
            style={{
              backgroundColor: lightColor,
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: darkColor,
            }}
          >
            <div
              className="grid place-items-center px-1.5"
              style={{
                backgroundColor: lightColor,
                borderRightStyle: "solid",
                borderRightWidth: 2,
                borderRightColor: darkColor,
              }}
            >
              <i className={iconClass} style={{ color: darkColor }}></i>
            </div>

            <div className="p-2 bg-white w-full">
              <div className="text-xs opacity-50">{nodeData.accountNumber}</div>
              <div className="text-xs opacity-80 bold">
                {nodeData.label}{" "}
                {nodeData.children && (
                  <span className="opacity-50">
                    ({nodeData.children.length})
                  </span>
                )}
              </div>
              <div className="text-medium">
                {formatCurrency(nodeData.accountValue)}

                <i
                  className={
                    nodeData.up
                      ? "fas fa-arrow-up text-green-500 ml-2 absolute rounded-lg"
                      : "fas fa-arrow-down text-red ml-2 absolute"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </foreignObject>
    </React.Fragment>
  );
};

export default TreeNode;
