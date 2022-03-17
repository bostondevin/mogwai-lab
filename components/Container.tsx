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
  ariaLabel?: string;
  type?: ContainerType;
  children?: React.ReactNode;
};

const ContainerSettings = () => {
  return <React.Fragment></React.Fragment>;
};

export const Container: UserComponent<ContainerProps> = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const emptyClasses =
    "border-dashed border-4 border-black/10 hover:border-black/30 h-full w-full flex";
  const emptyStyle = { minHeight: "50px" };
  return (
    <>
      {props.type === "div" && (
        <div
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </div>
      )}
      {props.type === "form" && (
        <form
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </form>
      )}
      {props.type === "fieldset" && (
        <fieldset
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </fieldset>
      )}
      {props.type === "article" && (
        <article
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </article>
      )}
      {props.type === "section" && (
        <section
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </section>
      )}
      {props.type === "header" && (
        <header
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </header>
      )}
      {props.type === "main" && (
        <main
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </main>
      )}
      {props.type === "footer" && (
        <footer
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </footer>
      )}
      {props.type === "nav" && (
        <nav
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </nav>
      )}
      {props.type === "aside" && (
        <aside
          ref={connect}
          className={enabled ? props.className + " outline-1" : props.className}
        >
          {props.children}

          {!props.children && enabled && (
            <div className={emptyClasses} style={emptyStyle}></div>
          )}
        </aside>
      )}
    </>
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
