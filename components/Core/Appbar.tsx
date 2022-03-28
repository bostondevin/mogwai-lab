import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useEditor } from "@craftjs/core";

import { Link } from "./Link";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { UnOrderedList } from "./UnOrderedList";
import { ListItem } from "./ListItem";

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
      <Link
        href="/"
        onClick={clickLink}
        className={
          screen === "mobile"
            ? "w-10 h-10 ml-5 text-black dark:text-white opacity-90 hover:opacity-100"
            : "w-12 h-12 ml-5 mr-10 text-black dark:text-white mt-1 opacity-90 hover:opacity-100"
        }
      >
        <svg
          className="h-full w-full inline-block"
          width="100%"
          height="100%"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 26.3774H47.9925V48.5H38.8813V34.8879H35.4207V48.5H29.0302C31.3697 47.9884 32.7375 46.649 33.5297 45.43L30.8166 43.8422L30.8116 43.8494C30.4922 44.3089 29.4879 45.7535 26.9748 45.7535C25.2407 45.7535 23.5814 44.4517 23.5291 42.4652H33.3653C33.3653 37.672 31.4145 34.6772 26.9673 34.6772C22.6472 34.6772 20.1507 37.6946 20.1507 41.6977C20.1507 45.0763 21.9296 47.7551 25.0763 48.5076H15.6138C16.2716 48.3495 16.8546 48.0937 17.3553 47.7476C17.8636 47.3939 18.2747 46.9198 18.5811 46.3555C18.8876 45.7911 19.0445 45.0838 19.0445 44.2712C19.0445 43.6165 18.91 43.0522 18.6484 42.5931C18.3943 42.1341 18.0505 41.7504 17.6319 41.4419C17.2208 41.1409 16.7574 40.8926 16.2491 40.7045C15.7484 40.5163 15.2401 40.3658 14.7543 40.2605C13.8349 40.0423 13.1324 39.8241 12.6615 39.6209C12.213 39.4253 11.9963 39.1017 11.9963 38.6276C11.9963 38.1536 12.1906 37.8225 12.5942 37.6193C13.0128 37.4086 13.4836 37.3033 13.9919 37.3033C14.5749 37.3033 15.113 37.4463 15.6064 37.7171C16.0997 37.988 16.4958 38.3191 16.7723 38.6878L16.8321 38.7706L19.0969 36.754L19.0371 36.6787C18.5064 35.994 17.7739 35.4748 16.862 35.1437C15.9576 34.8126 15.0159 34.6471 14.0666 34.6471C13.4089 34.6471 12.7586 34.7298 12.1383 34.8954C11.5104 35.0609 10.9424 35.3168 10.4491 35.6629C9.9483 36.009 9.54469 36.453 9.23824 36.9948C8.9318 37.5366 8.77484 38.1837 8.77484 38.9286C8.77484 39.5607 8.88695 40.1025 9.11118 40.5314C9.33541 40.9603 9.63438 41.3215 10.0081 41.6149C10.3743 41.9009 10.8004 42.1417 11.2713 42.3147C11.7347 42.4878 12.2205 42.6308 12.7138 42.7436C13.7004 42.9769 14.4478 43.2177 14.9411 43.451C15.412 43.6767 15.6362 44.0304 15.6362 44.542C15.6362 44.8129 15.5839 45.0462 15.4643 45.2268C15.3448 45.4074 15.1878 45.5579 14.9935 45.6707C14.7991 45.7836 14.5749 45.8664 14.3432 45.9191C14.104 45.9717 13.8648 46.0018 13.6406 46.0018C12.953 46.0018 12.3177 45.8513 11.7571 45.5504C11.189 45.2494 10.7256 44.8581 10.3743 44.3991L10.3071 44.3163L8.01246 46.4834L8.07973 46.5511C8.72252 47.2509 9.53722 47.8002 10.5089 48.1765C10.8452 48.3044 11.1816 48.4173 11.5254 48.5H0V26.3774Z"
            fill="currentColor"
          ></path>
          <path
            d="M23.5291 39.9672C23.8729 38.5375 25.1062 37.3185 26.9748 37.3185C29.1274 37.3185 30.0019 39.2523 30.0019 39.9672H23.5291Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0.5H48V22.6226H0V0.5ZM39.2923 15.3841C39.2923 16.6807 38.2483 17.7318 36.9604 17.7318C35.6724 17.7318 34.6284 16.6807 34.6284 15.3841C34.6284 14.0875 35.6724 13.0364 36.9604 13.0364C38.2483 13.0364 39.2923 14.0875 39.2923 15.3841Z"
            fill="currentColor"
          ></path>
          x{" "}
        </svg>
      </Link>

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
