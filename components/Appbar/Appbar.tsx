import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";

import { Link } from "../Link/Link";
import { Button } from "../Button/_raw/Button";
import { Icon } from "../Icon/Icon";

import Logo from "../../public/sei-logo.svg";

export const Appbar = ({ store }): JSX.Element => {
  const [path, setPath] = useState(null);

  const [isDark, setDarkMode] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setPath(window.location.pathname);
  }, [router.asPath]);

  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  const doSave = () => {
    if (enabled) {
      const json = query.serialize();
      const condensedJson = encodeURIComponent(
        lz.encodeBase64(lz.compress(json))
      );
      const template = store.get("templates").get(path);
      template.put(condensedJson, () => {
        //console.log("Template Saved! templates" + path);
        //console.log(condensedJson);
        //console.log(d);
      });
    }
  };

  const cancelEdit = () => {
    actions.setOptions((options) => (options.enabled = false));
  };

  const saveChanges = () => {
    doSave();
    actions.setOptions((options) => (options.enabled = !enabled));
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDark);

    const classList = document.body.classList;

    if (isDark) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
  };

  const clickLink = () => {
    if (enabled) {
      doSave();
    }
  };

  const links = [
    { key: 0, label: "Home", href: "/" },
    { key: 1, label: "Reporting", href: "/reporting" },
    { key: 2, label: "Utilities", href: "/utilities" },
    { key: 3, label: "Client Management", href: "/client" },
    { key: 4, label: "Workdesk", href: "/workdesk" },
    { key: 5, label: "Documents", href: "/documents" },
    { key: 6, label: "Admin", href: "/admin" },
  ];

  const settingsLinks = [
    { key: 0, label: "Dashboard", href: "/dashboard" },
    { key: 1, label: "Settings", href: "/settings" },
    { key: 2, label: "Earnings", href: "/earnings" },
    { key: 3, label: "Sign out", href: "/logout" },
  ];

  const linkOnClasses =
    "flex py-4 px-4 text-sky-500 border-b-2 border-sky-500 font-bold text-sm h-full content-center";
  const linkOffClasses =
    "flex py-4 px-4 text-sky-500 font-bold text-sm h-full content-center";
  const menuItemClasses = "";

  return (
    <nav className="flex bg-white w-full">
      <div style={{ width: "55px", height: "55px" }} className="ml-2">
        <Logo />
      </div>

      <ul className="flex flex-row w-full">
        {links.map((item) => {
          return (
            <li key={item.key} className="flex items-center">
              <Link
                href={item.href}
                onClick={clickLink}
                className={path === item.href ? linkOnClasses : linkOffClasses}
              >
                {item.href === "/" ? (
                  <Icon className="fas fa-home" />
                ) : (
                  item.label
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="flex mr-3">
        {enabled && (
          <>
            <li className="flex">
              <Button
                tooltip="Undo"
                placement="bottom"
                onClick={() => actions.history.undo()}
                disabled={!canUndo}
                className="px-2"
              >
                <Icon className="fas fa-undo" />
              </Button>
            </li>

            <li className="flex">
              <Button
                tooltip="Redo"
                placement="bottom"
                disabled={!canRedo}
                onClick={() => actions.history.redo()}
                className="px-2"
              >
                <Icon className="fas fa-redo" />
              </Button>
            </li>

            <li className="flex">
              <Button
                tooltip="Cancel"
                onClick={cancelEdit}
                placement="bottom"
                className="px-2"
              >
                <Icon className="fas fa-times" />
              </Button>
            </li>
          </>
        )}

        <li className="flex gap-2">
          <Button
            onClick={toggleDarkMode}
            tooltip={isDark ? "Light mode" : "Dark mode"}
            placement="bottom"
            className="px-2 opacity-50 hover:opacity-80"
          >
            <Icon className={isDark ? "fas fa-sun" : "fas fa-moon"} />
          </Button>

          <Button
            onClick={saveChanges}
            tooltip={enabled ? "Save" : "Edit"}
            placement="bottom"
            className="px-2 opacity-50 hover:opacity-80"
          >
            <Icon className={enabled ? "fas fa-floppy-disk" : "fas fa-edit"} />
          </Button>
        </li>
      </ul>
    </nav>
  );
};
