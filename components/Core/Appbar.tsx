import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useEditor } from "@craftjs/core";

import { Link } from "./Link";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { UnOrderedList } from "./UnOrderedList";
import { ListItem } from "./ListItem";

import Logo from "../../public/sei-logo.svg";
import { Div } from "./Div";

export const Appbar = ({ screen, store }): JSX.Element => {
  const [path, setPath] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setPath(window.location.pathname);

    store
      .get("editor")
      .get("dark")
      .on((d) => {
        const classList = document.documentElement.classList;

        if (d) {
          classList.remove("dark");
        } else {
          classList.add("dark");
        }

        setDarkMode(d);
      });
  }, [router.asPath]);

  const { enabled, actions, query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const toggleEdit = () => {
    actions.setOptions((options) => (options.enabled = !enabled));
  };

  const toggleDarkMode = () => {
    store.get("editor").get("dark").put(!darkMode);
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
      href: "/reports",
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
    "flex py-4 px-4 text-sky-500/75 hover:text-sky-500/100 dark:text-white/75 dark:hover:text-white/100 border-b-4 border-sky-500 dark:border-lime-500 text-sm h-full content-center";
  const linkOffClasses =
    "flex py-4 px-4 text-sky-500/75 hover:text-sky-500/100 dark:text-white/75 dark:hover:text-white/100 text-sm h-full content-center";
  const menuItemClasses = "";

  return (
    <>
      <Div
        style={
          screen === "mobile"
            ? { width: "40px", height: "40px" }
            : { width: "48px", height: "48px" }
        }
        className="ml-5 mr-10 text-black dark:text-white mt-2 opacity-90"
      >
        <Logo />
      </Div>

      <UnOrderedList
        className={screen === "mobile" ? "hidden" : "flex flex-row w-full"}
      >
        {links.map((item) => {
          return (
            <ListItem key={item.key} className="flex items-center">
              <Link
                href={item.href}
                onClick={clickLink}
                className={path === item.href ? linkOnClasses : linkOffClasses}
              >
                {item.key === 0 || screen === "tablet" ? (
                  <Icon className={item.icon} />
                ) : (
                  <></>
                )}
                {item.key !== 0 && screen !== "tablet" ? (
                  <span className="ml-1">{item.label}</span>
                ) : (
                  <></>
                )}
              </Link>
            </ListItem>
          );
        })}
      </UnOrderedList>

      {screen === "mobile" && <div className="flex w-full"></div>}

      <UnOrderedList className="flex mr-3 gap-2">
        <ListItem className="flex">
          <Button
            tooltip="Settings"
            className="px-2 opacity-50 hover:opacity-80"
          >
            <Icon className="fa-solid fa-bars" />
          </Button>
        </ListItem>

        <ListItem className="flex">
          <Button
            tooltip="Settings"
            className="px-2 opacity-50 hover:opacity-80"
          >
            <Icon className="fa-solid fa-grid" />
          </Button>
        </ListItem>

        <ListItem className="flex">
          <Button tooltip="Search" className="px-2 opacity-50 hover:opacity-80">
            <Icon className="fa-solid fa-search" />
          </Button>
        </ListItem>

        <ListItem className="flex">
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
        </ListItem>

        {!enabled && (
          <ListItem className="flex">
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
          </ListItem>
        )}
      </UnOrderedList>
    </>
  );
};
