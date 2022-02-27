import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import lz from "lzutf8";

import { Link } from "../Link/Link";
import { Button } from "../_raw/Button";
import { Icon } from "../Icon/Icon";
import Logo from "../../../../public/tornado-logo.svg";

export const Appbar = () => {
  const [path, setPath] = useState(null);
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
    const json = query.serialize();
    const condensedJson = lz.encodeBase64(lz.compress(json));
    localStorage.setItem(path, condensedJson);
  };

  const cancelEdit = () => {
    actions.setOptions((options) => (options.enabled = false));
  };

  const saveChanges = () => {
    doSave();
    actions.setOptions((options) => (options.enabled = !enabled));
  };

  const clickLink = () => {
    if (enabled) {
      doSave();
    }
  };

  const links = [
    { key: 1, label: "Home", href: "/" },
    { key: 2, label: "About", href: "/about" },
    { key: 3, label: "Contact", href: "/contact" },
    { key: 4, label: "Login", href: "/login" },
    { key: 5, label: "Legal", href: "/legal" },
  ];

  const settingsLinks = [
    { key: 1, label: "Dashboard", href: "/dashboard" },
    { key: 2, label: "Settings", href: "/settings" },
    { key: 3, label: "Earnings", href: "/earnings" },
    { key: 4, label: "Sign out", href: "/logout" },
  ];

  const linkOnClasses =
    "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const linkOffClasses =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  const menuItemClasses =
    "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white";

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-black w-full">
      <div className="container flex justify-between items-center mx-auto text-white">
        <Link href="/" className="flex">
          <Logo />
        </Link>
        <div className="flex items-center md:order-2">
          <div
            className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            id="dropdown"
          >
            <div className="py-3 px-4">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-1" aria-labelledby="dropdown">
              {settingsLinks.map((item) => {
                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      onClick={clickLink}
                      className={
                        path === item.href ? menuItemClasses : menuItemClasses
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex-1 flex gap-4">
            {enabled && (
              <>
                <Tooltip title="Undo" placement="bottom">
                  <Button
                    onClick={() => actions.history.undo()}
                    disabled={!canUndo}
                  >
                    <Icon className="fas fa-undo" />
                  </Button>
                </Tooltip>

                <Tooltip title="Redo" placement="bottom">
                  <Button
                    disabled={!canRedo}
                    onClick={() => actions.history.redo()}
                  >
                    <Icon className="fas fa-redo" />
                  </Button>
                </Tooltip>

                <Tooltip title="Cancel" placement="bottom">
                  <Button onClick={cancelEdit}>
                    <Icon className="fas fa-times" />
                  </Button>
                </Tooltip>
              </>
            )}

            <Tooltip title={enabled ? "Save" : "Edit"} placement="bottom">
              <Button onClick={saveChanges}>
                <Icon
                  className={enabled ? "fas fa-floppy-disk" : "fas fa-edit"}
                />
              </Button>
            </Tooltip>
          </div>
        </div>

        <div
          className="hidden justify-between items-center md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {links.map((item) => {
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={clickLink}
                    className={
                      path === item.href ? linkOnClasses : linkOffClasses
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
