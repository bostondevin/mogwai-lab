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
  emptyClasses?: string;
  emptyStyle?: any;
  ariaLabel?: string;
  type?: ContainerType;
  children?: React.ReactNode;
};

const ContainerSettings = () => {
  return <React.Fragment></React.Fragment>;
};

export const ContainerRaw = React.forwardRef(
  (props: ContainerProps, ref: any) => (
    <>
      {props.type === "div" && (
        <div ref={ref} {...props}>
          {props.children}
        </div>
      )}
      {props.type === "form" && (
        <form ref={ref} {...props}>
          {props.children}
        </form>
      )}
      {props.type === "fieldset" && (
        <fieldset ref={ref} {...props}>
          {props.children}
        </fieldset>
      )}
      {props.type === "article" && (
        <article ref={ref} {...props}>
          {props.children}
        </article>
      )}
      {props.type === "section" && (
        <section ref={ref} {...props}>
          {props.children}
        </section>
      )}
      {props.type === "header" && (
        <header ref={ref} {...props}>
          {props.children}
        </header>
      )}
      {props.type === "main" && (
        <main ref={ref} {...props}>
          {props.children}
        </main>
      )}
      {props.type === "footer" && (
        <footer ref={ref} {...props}>
          {props.children}
        </footer>
      )}
      {props.type === "nav" && (
        <nav ref={ref} {...props}>
          {props.children}
        </nav>
      )}
      {props.type === "aside" && (
        <aside ref={ref} {...props}>
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
    <ContainerRaw {...props}>
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
