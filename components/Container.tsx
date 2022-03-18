import React from "react";
import { UserComponent, useNode, useEditor } from "@craftjs/core";

type ContainerType =
  | "div"
  | "form"
  | "fieldset"
  | "article"
  | "section"
  | "header"
  | "main"
  | "footer"
  | "nav"
  | "aside";

export type ContainerProps = {
  className?: string;
  style?: any;
  ariaLabel?: string;
  type?: ContainerType;
  children?: React.ReactNode;
};

export const ContainerRaw = React.forwardRef(
  (props: ContainerProps, ref: any) => (
    <>
      {props.type === "div" && (
        <div ref={ref} className={props.className} style={props.style}>
          {props.children}
        </div>
      )}
      {props.type === "form" && (
        <form ref={ref} className={props.className} style={props.style}>
          {props.children}
        </form>
      )}
      {props.type === "fieldset" && (
        <fieldset ref={ref} className={props.className} style={props.style}>
          {props.children}
        </fieldset>
      )}
      {props.type === "article" && (
        <article ref={ref} className={props.className} style={props.style}>
          {props.children}
        </article>
      )}
      {props.type === "section" && (
        <section ref={ref} className={props.className} style={props.style}>
          {props.children}
        </section>
      )}
      {props.type === "header" && (
        <header ref={ref} className={props.className} style={props.style}>
          {props.children}
        </header>
      )}
      {props.type === "main" && (
        <main ref={ref} className={props.className} style={props.style}>
          {props.children}
        </main>
      )}
      {props.type === "footer" && (
        <footer ref={ref} className={props.className} style={props.style}>
          {props.children}
        </footer>
      )}
      {props.type === "nav" && (
        <nav ref={ref} className={props.className} style={props.style}>
          {props.children}
        </nav>
      )}
      {props.type === "aside" && (
        <aside ref={ref} className={props.className} style={props.style}>
          {props.children}
        </aside>
      )}
    </>
  )
);

export const Container: UserComponent<ContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ContainerRaw
      ref={connect}
      {...props}
      className={props.className + (enabled ? " outline-1" : "")}
    >
      {props.children}

      {!props.children && enabled && (
        <div
          className="border-dashed border-4 border-black/10 hover:border-black/30 h-full w-full flex"
          style={{ minHeight: "50px" }}
        ></div>
      )}
    </ContainerRaw>
  );
};

const ContainerSettings = () => {
  return <React.Fragment></React.Fragment>;
};

Container.craft = {
  displayName: "Container",
  props: {
    className: "",
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
