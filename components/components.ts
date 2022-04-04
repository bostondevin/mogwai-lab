import {
  outerClassName,
  inputClassName,
  labelClassName,
} from "./common.interface";

export const baseComponents = [
  {
    title: "Text",
    icon: "fa-solid fa-text",
    shrink: true,
    element: {
      type: "Text",
      props: {
        type: "span",
        className: "text-xs",
        text: "Lorem ipsum dolor",
      },
    },
  },

  {
    title: "Paragraph",
    icon: "fa-solid fa-paragraph",
    element: {
      type: "Text",
      props: {
        type: "p",
        className: "text-base font-light leading-relaxed mt-0 mb-5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
  },

  {
    title: "Home Icon",
    icon: "fa-solid fa-home",
    element: {
      type: "Element",
      is: "Icon",
      props: { className: "fa-solid fa-home" },
    },
  },

  {
    title: "Button",
    icon: "fa-solid fa-bullseye-pointer",
    element: {
      type: "Element",
      is: "Button",
      props: {
        type: "button",
        buttonType: "button",
        className:
          "bg-blue-500 hover:bg-blue-500 rounded-md text-white text-sm p-2 shadow cursor-pointer select-none",
      },
    },
  },

  {
    title: "Container",
    icon: "fa-solid fa-square-dashed",
    element: {
      type: "Element",
      is: "Container",
      props: { className: "w-full", type: "div" },
    },
  },

  {
    title: "Unordered List",
    icon: "fa-solid fa-list-ul",
    element: {
      type: "Element",
      is: "List",
      props: { type: "ul", className: "list-disc pl-4 text-sm" },
    },
  },

  {
    title: "Ordered List",
    icon: "fa-solid fa-list-ol",
    element: {
      type: "Element",
      is: "List",
      props: { type: "ol", className: "list-decimal pl-4 text-sm" },
    },
  },

  {
    title: "List Item",
    icon: "fa-solid fa-list",
    element: {
      type: "Element",
      is: "ListItem",
      props: { className: "" },
    },
  },

  {
    title: "Form",
    icon: "fa-solid fa-home",
    element: {
      type: "Element",
      is: "Form",
      props: { className: "" },
    },
  },

  {
    title: "Text Input",
    icon: "fa-solid fa-home",
    element: {
      type: "Element",
      is: "Input",
      props: {
        type: "text",
        label: "Text",
        className:
          "w-full rounded py-1 px-2 text-sm bg-black/25 dark:bg-white/25 outline-none",
      },
    },
  },

  {
    title: "Color Input",
    icon: "fa-solid fa-eye",
    element: {
      type: "Element",
      is: "Input",
      props: {
        type: "color",

        label: "Color",
        className: outerClassName,
        labelClassName: labelClassName,
        inputClassName: inputClassName,
      },
    },
  },

  {
    title: "H1",
    icon: "fa-solid fa-h1",
    element: {
      type: "Text",
      props: {
        type: "h1",
        className: "text-6xl mt-0 mb-6",
        text: "Lorem ipsum dolor sit amet",
      },
    },
  },
  {
    title: "H2",
    icon: "fa-solid fa-h2",
    element: {
      type: "Text",
      props: {
        type: "h2",
        className: "text-5xl font-normal leading-normal mt-0 mb-5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    },
  },
  {
    title: "H3",
    icon: "fa-solid fa-h3",
    element: {
      type: "Text",
      props: {
        type: "h3",
        className: "text-4xl font-normal leading-normal mt-0 mb-2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    },
  },

  {
    title: "H4",
    icon: "fa-solid fa-h4",
    element: {
      type: "Text",
      props: {
        type: "h4",
        className: "text-3xl font-normal leading-normal mt-0 mb-2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    },
  },

  {
    title: "H5",
    icon: "fa-solid fa-h5",
    element: {
      type: "Text",
      props: {
        type: "h5",
        className: "text-2xl font-normal leading-normal mt-0 mb-2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    },
  },

  {
    title: "H6",
    icon: "fa-solid fa-h6",
    element: {
      type: "Text",
      props: {
        type: "h6",
        className: "text-xl font-normal leading-normal mt-0 mb-2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    },
  },

  {
    title: "Diagram",
    icon: "fa-solid fa-diagram-project",
    element: {
      type: "Diagram",
      props: {
        className: "w-full h-full gradientDark",
      },
    },
  },

  {
    title: "Grid",
    icon: "fa-solid fa-table",
    element: {
      type: "Grid",
      props: {
        className: "w-full",
        dataSource: "templates/test333",
      },
    },
  },

  {
    title: "Video",
    icon: "fab fa-youtube",
    element: {
      type: "Video",
      props: {},
    },
  },
];

/*
export const components = [
  {
    key: "containers",
    label: "Containers",
    items: [
      {
        title: "Container",
        icon: "fa-solid fa-square-dashed",
        element: {
          type: "Element",
          is: "Container",
          props: { className: "w-full", type: "div" },
        },
      },

      {
        title: "Form",
        icon: "fa-solid fa-square-dashed",
        element: {
          type: "Element",
          is: "Form",
          props: { className: "w-full" },
        },
      },
    ],
  },

  {
    key: "lists",
    label: "Lists",
    items: [
      {
        title: "Unordered List",
        icon: "fa-solid fa-list-ul",
        element: {
          type: "Element",
          is: "List",
          props: { type: "ul", className: "list-disc pl-4 text-sm" },
        },
      },

      {
        title: "Ordered List",
        icon: "fa-solid fa-list-ol",
        element: {
          type: "Element",
          is: "List",
          props: { type: "ol", className: "list-decimal pl-4 text-sm" },
        },
      },

      {
        title: "List Item",
        icon: "fa-solid fa-block-quote",
        element: {
          type: "Element",
          is: "ListItem",
          props: { className: "" },
        },
      },
    ],
  },

  {
    key: "typography",
    label: "Text",
    items: [
      {
        title: "Regular",
        icon: "fa-solid fa-text",
        element: {
          type: "Text",
          props: { type: "span", text: "Lorem ipsum dolor" },
        },
      },
      {
        title: "Small",
        icon: "fa-solid fa-text",
        shrink: true,
        element: {
          type: "Text",
          props: {
            type: "span",
            className: "text-xs",
            text: "Lorem ipsum dolor",
          },
        },
      },
      {
        title: "Small Light",
        icon: "fa-solid fa-text opacity-50",
        shrink: true,
        element: {
          type: "Text",
          props: {
            type: "span",
            className: "text-xs opacity-50",
            text: "Lorem ipsum dolor",
          },
        },
      },

      {
        title: "Paragraph",
        icon: "fa-solid fa-paragraph",
        element: {
          type: "Text",
          props: {
            type: "p",
            className: "text-base font-light leading-relaxed mt-0 mb-5",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        },
      },

      {
        title: "Lead",
        icon: "fa-solid fa-paragraph",
        element: {
          type: "Text",
          props: {
            type: "p",
            className: "text-lg font-light leading-relaxed mb-6",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        },
      },

      {
        title: "Small",
        icon: "fa-solid fa-paragraph",
        element: {
          type: "Text",
          props: {
            type: "small",
            className: "font-normal leading-normal mb-3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        },
      },

      {
        title: "H1",
        icon: "fa-solid fa-h1",
        element: {
          type: "Text",
          props: {
            type: "h1",
            className: "text-6xl mt-0 mb-6",
            text: "Lorem ipsum dolor sit amet",
          },
        },
      },
      {
        title: "H2",
        icon: "fa-solid fa-h2",
        element: {
          type: "Text",
          props: {
            type: "h2",
            className: "text-5xl font-normal leading-normal mt-0 mb-5",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        },
      },
      {
        title: "H3",
        icon: "fa-solid fa-h3",
        element: {
          type: "Text",
          props: {
            type: "h3",
            className: "text-4xl font-normal leading-normal mt-0 mb-2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        },
      },

      {
        title: "H4",
        icon: "fa-solid fa-h4",
        element: {
          type: "Text",
          props: {
            type: "h4",
            className: "text-3xl font-normal leading-normal mt-0 mb-2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        },
      },

      {
        title: "H5",
        icon: "fa-solid fa-h5",
        element: {
          type: "Text",
          props: {
            type: "h5",
            className: "text-2xl font-normal leading-normal mt-0 mb-2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        },
      },

      {
        title: "H6",
        icon: "fa-solid fa-h6",
        element: {
          type: "Text",
          props: {
            type: "h6",
            className: "text-xl font-normal leading-normal mt-0 mb-2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        },
      },
    ],
  },
  {
    key: "navigation",
    label: "Navigation",
    items: [
      {
        title: "Diagram",
        icon: "fa-solid fa-diagram-project",
        element: {
          type: "Diagram",
          props: {
            className: "w-full h-full gradientDark",
          },
        },
      },

      {
        title: "Grid",
        icon: "fa-solid fa-table",
        element: {
          type: "Grid",
          props: {
            className: "w-full",
            dataSource: "templates/test333",
          },
        },
      },

      {
        title: "Video",
        icon: "fab fa-youtube",
        element: {
          type: "Video",
          props: {},
        },
      },
    ],
  },
  {
    key: "form",
    label: "Form",
    items: [
      {
        title: "Text Input",
        icon: "fa-solid fa-input-pipe",
        element: {
          type: "Input",
          props: { type: "text" },
        },
      },

      {
        title: "Select",
        icon: "fa-solid fa-list-dropdown",
        element: {
          type: "Select",
          props: {
            id: "lissssst",
            placeholder: "- Choose -",
            className: "w-full",
          },
        },
      },
      {
        title: "Email Input",
        icon: "fab fa-table-columns",
        element: {
          type: "Text",
          props: { type: "email" },
        },
      },
    ],
  },
  {
    key: "buttons",
    label: "Buttons",
    items: [
      {
        title: "Button",
        icon: "fa-solid fa-bullseye-pointer",
        element: {
          type: "Element",
          is: "Button",
          props: {
            type: "button",
            buttonType: "button",
            className:
              "bg-blue-500 hover:bg-blue-500 rounded-md text-white text-sm p-2 shadow cursor-pointer select-none",
          },
        },
      },

      {
        title: "Hyperlink",
        icon: "fa-solid fa-link",
        element: {
          type: "Element",
          is: "Button",
          props: {
            type: "a",
            className: "text-blue-500 hover:underline hover:text-blue-600",
            href: "/test-link",
          },
        },
      },
    ],
  },
  {
    key: "icons",
    label: "Icons",
    items: [
      {
        title: "Home Icon",
        icon: "fa-solid fa-home",
        element: {
          type: "Element",
          is: "Icon",
          props: { className: "fa-solid fa-home" },
        },
      },
      {
        title: "Video Icon",
        icon: "fa-solid fa-video",
        element: {
          type: "Element",
          is: "Icon",
          props: { className: "fa-solid fa-video" },
        },
      },
    ],
  },
  { key: "media", label: "Media", items: [] },
];

*/
