import { useNode, useEditor } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Icon } from "../../Elements/Media/Icon/Icon";
import { Button } from "../../Elements/Button/Button/Button";

const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;

  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

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
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
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
    document
      .querySelector(".craftjs-renderer")
      .addEventListener("scroll", scroll);

    return () => {
      document
        .querySelector(".craftjs-renderer")
        .removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <>
      {enabled && (isHover || isActive)
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              className="px-2 py-2 text-white bg-blue-600 fixed flex items-center rounded-t-md select-none"
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              <h2 className="flex-1 mr-4">{name}</h2>
              {moveable ? (
                <Button type="button" className="mr-2 cursor-move" ref={drag}>
                  <Icon className="fas fa-arrows-up-down-left-right" />
                </Button>
              ) : null}
              {id !== ROOT_NODE && (
                <Button
                  type="button"
                  className="mr-2 cursor-pointer"
                  onClick={() => {
                    actions.selectNode(parent);
                  }}
                >
                  <Icon className="fas fa-arrow-up" />
                </Button>
              )}
              {deletable ? (
                <Button
                  type="button"
                  className="cursor-pointer"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <Icon className="fas fa-trash" />
                </Button>
              ) : null}
            </IndicatorDiv>,
            document.querySelector(".page-container")
          )
        : null}
      {render}
    </>
  );
};
