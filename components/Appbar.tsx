import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useEditor } from "@craftjs/core";

import { Link } from "./Elements/Button/Link/Link";
import { Button } from "./Elements/Button/Button/Button";
import { Icon } from "./Elements/Media/Icon/Icon";

import Logo from "../public/sei-logo.svg";

interface AppBarProps {
  screen: string;
}

export const Appbar = (props: AppBarProps): JSX.Element => {
  const [path, setPath] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setPath(window.location.pathname);
  }, [router.asPath]);

  const { enabled, actions, query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const toggleEdit = () => {
    actions.setOptions((options) => (options.enabled = !enabled));
  };

  const toggleDarkMode = () => {
    const classList = document.body.classList;

    if (!darkMode) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }

    setDarkMode(!darkMode);
  };

  const clickLink = () => {
    if (enabled) {
      // doSave();
    }
  };

  const links = [
    { key: 0, label: "Home", href: "/", icon: "fa-solid fa-home" },
    {
      key: 1,
      label: "Reporting",
      href: "/reporting",
      icon: "fa-solid fa-file-chart-column",
    },
    {
      key: 2,
      label: "Utilities",
      href: "/utilities",
      icon: "fa-solid fa-screwdriver-wrench",
    },
    {
      key: 3,
      label: "Clients",
      href: "/client",
      icon: "fa-solid fa-chart-user",
    },
    {
      key: 4,
      label: "WorkDesk",
      href: "/workdesk",
      icon: "fa-solid fa-lamp-desk",
    },
    {
      key: 5,
      label: "Documents",
      href: "/documents",
      icon: "fa-solid fa-file-circle-info",
    },
    { key: 6, label: "Admin", href: "/admin", icon: "fa-solid fa-folder-gear" },
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
    <>
      <div
        style={
          props.screen === "mobile"
            ? { width: "55px", height: "55px" }
            : { width: "55px", height: "55px" }
        }
        className="ml-2 mr-10"
      >
        <Logo />
      </div>

      <ul
        className={
          props.screen === "mobile"
            ? "flex flex-row w-full hidden"
            : "flex flex-row w-full"
        }
      >
        {links.map((item) => {
          return (
            <li key={item.key} className="flex items-center">
              <Link
                href={item.href}
                onClick={clickLink}
                className={path === item.href ? linkOnClasses : linkOffClasses}
              >
                {item.key === 0 || props.screen === "tablet" ? (
                  <Icon className={item.icon} />
                ) : (
                  <></>
                )}
                {item.key !== 0 && props.screen !== "tablet" ? (
                  <span className="ml-1">{item.label}</span>
                ) : (
                  <></>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {props.screen === "mobile" && <div className="flex w-full"></div>}

      <ul className="flex mr-3">
        <li className="flex gap-2">
          <Button
            onClick={toggleDarkMode}
            tooltip={darkMode ? "Light mode" : "Dark mode"}
            placement="bottom"
            className="px-2 opacity-50 hover:opacity-80"
          >
            <Icon
              className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
            />
          </Button>
        </li>

        {!enabled && (
          <li className="flex">
            <Button
              onClick={toggleEdit}
              tooltip={enabled ? "Save" : "Edit"}
              placement="bottom"
              className="px-2 opacity-50 hover:opacity-80"
            >
              <Icon
                className={
                  enabled ? "fa-solid fa-floppy-disk" : "fa-solid fa-edit"
                }
              />
            </Button>
          </li>
        )}
      </ul>
    </>
  );
};
