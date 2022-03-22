export const components = [
  {
    key: "containers",
    label: "Containers",
    items: [
      {
        title: "Div",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          is: "Div",
          props: { className: "w-full" },
        },
      },

      {
        title: "Article",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          is: "Article",
          props: { className: "w-full" },
        },
      },

      {
        title: "Aside",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          is: "Aside",
          props: { className: "w-full" },
        },
      },

      {
        title: "Fieldset",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          is: "Fieldset",
          props: { className: "w-full" },
        },
      },

      {
        title: "Footer",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          is: "Footer",
          props: { className: "w-full" },
        },
      },

      {
        title: "Form",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          is: "Form",
          props: { className: "w-full" },
        },
      },

      {
        title: "Header",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          is: "Header",
          props: { className: "w-full" },
        },
      },

      {
        title: "Main",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          is: "Main",
          props: { className: "w-full" },
        },
      },

      {
        title: "Nav",
        icon: "fas fa-square-dashed",
        element: {
          type: "Element",
          is: "Nav",
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
        icon: "fas fa-list-ul",
        element: {
          type: "Element",
          is: "UnOrderedList",
          props: { className: "list-disc pl-4 text-sm" },
        },
      },

      {
        title: "Ordered List",
        icon: "fas fa-list-ol",
        element: {
          type: "Element",
          is: "OrderedList",
          props: { className: "list-decimal pl-4 text-sm" },
        },
      },

      {
        title: "List Item",
        icon: "fas fa-block-quote",
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
            className: "text-base font-light leading-relaxed mt-0 mb-5",
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
            className: "text-lg font-light leading-relaxed mb-6",
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
            className: "font-normal leading-normal mb-3",
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
            className: "text-6xl mt-0 mb-6",
            text: "Lorem ipsum dolor sit amet",
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
            className: "text-5xl font-normal leading-normal mt-0 mb-5",
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
          type: "Diagram",
          props: {},
        },
      },

      {
        title: "Grid",
        icon: "fas fa-table",
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
        icon: "fas fa-bullseye-pointer",
        element: {
          type: "Element",
          is: "Button",
          props: {
            type: "button",
            className:
              "bg-blue-500 hover:bg-blue-500 rounded-md text-white text-sm p-2 shadow cursor-pointer select-none",
          },
        },
      },

      {
        title: "Hyperlink",
        icon: "fas fa-link",
        element: {
          type: "Element",
          is: "Link",
          props: {
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
        icon: "fas fa-home",
        element: {
          type: "Element",
          is: "Icon",
          props: { className: "fas fa-home" },
        },
      },
      {
        title: "Video Icon",
        icon: "fas fa-video",
        element: {
          type: "Element",
          is: "Icon",
          props: { className: "fas fa-video" },
        },
      },
    ],
  },
  { key: "media", label: "Media", items: [] },
];
