import React from "react";

import { Button } from "./Button";

interface ButtonItem {
  id: string;
  icon?: string;
  label?: string;
}

export interface ButtonBarProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  items?: ButtonItem[];
  selected?: string;
}

export const ButtonBar = (props: Partial<ButtonBarProps>) => {
  const linkOnClasses =
    "flex py-2 px-4 text-sky-500/75 hover:text-sky-500/100 dark:text-white/75 dark:hover:text-white/100 border-b-4 border-sky-500 dark:border-lime-500 h-full content-center";
  const linkOffClasses =
    "flex py-2 px-4 text-sky-500/75 hover:text-sky-500/100 dark:text-white/75 dark:hover:text-white/100 h-full content-center";

  const changeTab = (e, id) => {
    e.stopPropagation();
    e.targetEleId = id;
    props.onClick(e);
  };

  return (
    <ul className={"flex flex-row w-full text-xs"}>
      {props.items.map((item, index) => {
        return (
          <li className="flex items-center" key={index}>
            <Button
              onClick={(e) => changeTab(e, item.id)}
              className={
                props.selected === item.id ? linkOnClasses : linkOffClasses
              }
            >
              {item.icon && <i className={item.icon} />}
              <span className="ml-1">{item.label}</span>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
