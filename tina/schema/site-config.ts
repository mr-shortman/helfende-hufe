export const siteConfig = {
  name: "siteConfig",
  label: "Config",
  path: "config",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    { name: "siteName", label: "Seitenname", type: "string" },
    { name: "logoUrl", label: "Logo Url", type: "string" },
    { name: "initialPath", label: "Initial Path", type: "string" },
    {
      name: "navigator",
      label: "Navigator",
      type: "object",
      fields: [
        {
          name: "links",
          label: "Links",
          type: "object",
          list: true,
          ui: {
            defaultItem: {
              label: "Lorem",
              path: "/ipsum",
            },
            itemProps: (item: any) => ({ label: item.label }),
          },
          fields: [
            {
              name: "label",
              label: "Label",
              type: "string",
            },
            {
              name: "path",
              label: "Pfad",
              type: "string",
            },
          ],
        },
        {
          name: "buttons",
          label: "Buttons",
          type: "object",
          list: true,

          ui: {
            defaultItem: {
              label: "Lorem",
              path: "/ipsum",
            },
            itemProps: (item: any) => ({ label: item.label }),
          },
          fields: [
            {
              name: "label",
              label: "Label",
              type: "string",
            },
            {
              name: "path",
              label: "Pfad",
              type: "string",
            },
            {
              name: "icon",
              label: "Icon",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
