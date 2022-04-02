import { useNode, useEditor } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

export const EditMenu = ({ render }) => {
  const { id } = useNode();

  const { enabled, actions, query, isActive } = useEditor((state, query) => ({
    isActive: query.getEvent("selected").contains(id),
    enabled: state.options.enabled,
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (dom) {
      dom.classList.remove(
        "outline-1",
        "outline-dotted",
        "outline-black/0",
        "dark:outline-white/0",
        "hover:outline-black/25",
        "hover:dark:outline-white/25",
        "component-selected",
        "dark:outline-lime-500",
        "outline-blue-500"
      );

      if (enabled)
        dom.classList.add(
          "outline-1",
          "outline-dotted",
          "outline-black/0",
          "dark:outline-white/0",
          "hover:outline-black/25",
          "hover:dark:outline-white/25"
        );

      if (isHover && !isActive) {
        //dom.classList.remove("outline-black/25", "dark:outline-white/25");
        //dom.classList.add("outline-black/50", "dark:outline-white/50");
      }

      if (isActive) {
        dom.classList.add(
          "component-selected",
          "dark:outline-lime-500",
          "outline-blue-500"
        );
      }

      //else dom.classList.remove("component-selected", "outline-lime-500");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    const o = document.querySelector(".craftjs-renderer");
    if (o) o.addEventListener("scroll", scroll);
    return () => {
      if (o) o.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <>
      {enabled && (isHover || isActive)
        ? ReactDOM.createPortal(
            <div
              ref={currentRef}
              className={
                isActive
                  ? "p-2 text-white bg-blue-600 dark:bg-lime-600 fixed flex items-center rounded-t-md select-none text-xs"
                  : "p-2 text-white/75 bg-black/75 fixed flex items-center rounded-t-md select-none text-xs"
              }
              style={{
                height: "30px",
                marginTop: "-30px",
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              <h2 className="flex-1 mr-4">{name}</h2>
              {moveable && isActive ? (
                <button type="button" className="mr-2 cursor-move" ref={drag}>
                  <i className="fa-solid fa-arrows-up-down-left-right" />
                </button>
              ) : null}
              {id !== ROOT_NODE && isActive && (
                <button
                  type="button"
                  className="mr-2 cursor-pointer"
                  onClick={() => {
                    actions.selectNode(parent);
                  }}
                >
                  <i className="fa-solid fa-arrow-up" />
                </button>
              )}
              {deletable && isActive ? (
                <button
                  type="button"
                  className="cursor-pointer"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <i className="fa-solid fa-trash" />
                </button>
              ) : null}
            </div>,
            document.querySelector(".page-container")
          )
        : null}
      {render}
    </>
  );
};
