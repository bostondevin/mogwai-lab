export const components = [
  {
    key: "containers",
    label: "Containers",
    items: [
      {
        title: "Container",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          props: { canvas: true, is: "Container" },
        },
      },
    ],
  },
  {
    key: "typography",
    label: "Typography",
    items: [
      {
        title: "Regular",
        icon: "fas fa-text",
        element: {
          type: "Text",
          props: { type: "span", text: "Lorem ipsum dolor" },
        },
      },
      {
        title: "Small",
        icon: "fas fa-text",
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
        icon: "fas fa-text opacity-50",
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
        icon: "fas fa-paragraph",
        element: {
          type: "Text",
          props: {
            type: "p",
            className: "text-base font-light leading-relaxed mt-0 mb-4",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        },
      },

      {
        title: "Lead",
        icon: "fas fa-paragraph",
        element: {
          type: "Text",
          props: {
            type: "p",
            className: "text-lg font-light leading-relaxed mt-6 mb-4",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        },
      },

      {
        title: "Small",
        icon: "fas fa-paragraph",
        element: {
          type: "Text",
          props: {
            type: "small",
            className: "font-normal leading-normal",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        },
      },

      {
        title: "H1",
        icon: "fas fa-h1",
        element: {
          type: "Text",
          props: {
            type: "h1",
            className: "text-6xl font-normal leading-normal mt-0 mb-2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        },
      },
      {
        title: "H2",
        icon: "fas fa-h2",
        element: {
          type: "Text",
          props: {
            type: "h2",
            className: "text-5xl font-normal leading-normal mt-0 mb-2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        },
      },
      {
        title: "H3",
        icon: "fas fa-h3",
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
        icon: "fas fa-h4",
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
        icon: "fas fa-h5",
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
        icon: "fas fa-h6",
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
        icon: "fas fa-diagram-project",
        element: {
          type: "Cards3D",
          props: {},
        },
      },

      {
        title: "Grid",
        icon: "fas fa-table",
        element: {
          type: "AgGrid",
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
        icon: "fas fa-input-pipe",
        element: {
          type: "Input",
          props: { type: "text" },
        },
      },

      {
        title: "Select",
        icon: "fas fa-list-dropdown",
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
        title: "Text Input",
        icon: "fab fa-table-columns",
        element: {
          type: "Field",
          props: {},
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
        icon: "fas fa-bullseye-pointer",
        element: {
          type: "Element",
          props: { canvas: true, is: "Button" },
        },
      },
    ],
  },
  { key: "icons", label: "Icons", items: [] },
];
