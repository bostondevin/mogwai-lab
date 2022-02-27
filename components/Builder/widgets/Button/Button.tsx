import { UserComponent, useNode } from '@craftjs/core';
import React from 'react';
import { ButtonSettings } from './ButtonSettings';

type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  type: ButtonType;
  label?: string;
  className?: string;
  onClick: (e:  React.MouseEvent<HTMLButtonElement>) => void;
  children?: JSX.Element | JSX.Element[] | string | null | undefined
}

export const Button: UserComponent<ButtonProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <button
      ref={connect}
      type={props.type} 
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.craft = {
  displayName: 'Button',
  props: {
    type: 'button',
    className: 'w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg',
  },
  related: {
    toolbar: ButtonSettings,
  },
};
