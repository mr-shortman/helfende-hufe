import { TinaTemplate } from "@tinacms/cli";

/* Block Schema */
export const heroBlock: TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      headline: "This Big Text is Totally Awesome",
      tagline: "Here's some text above the other text",
      cta: {
        link: "/",
        text: "CTA Button",
      },
    },
  },
  fields: [
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      name: "cta",
      label: "Call To Action",
      type: "object",
      fields: [
        {
          name: "link",
          label: "Link",
          type: "string",
        },
        {
          name: "text",
          label: "Text",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      label: "Hintergrundbild",
      type: "image",
    },
  ],
};

export const contentBlock: TinaTemplate = {
  name: "content",
  label: "Content",
  fields: [
    {
      name: "label",
      label: "Label",
      type: "string",
    },
    {
      name: "title",
      label: "Titel",
      type: "string",
    },
    {
      name: "description",
      label: "Beschreibung",
      type: "rich-text",
    },
    {
      name: "cta",
      label: "Call To Action",
      type: "object",
      fields: [
        {
          name: "link",
          label: "Link",
          type: "string",
        },
        {
          name: "text",
          label: "Text",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      label: "Bild",
      type: "image",
    },
    {
      name: "reverse",
      label: "umgekehrt",
      type: "boolean",
    },
  ],
};

const eventBlock: TinaTemplate = {
  name: "event",
  label: "Event",
  fields: [
    {
      name: "title",
      label: "Titel",
      type: "string",
    },
    {
      name: "description",
      label: "Beschreibung",
      type: "rich-text",
    },
    {
      name: "eventList",
      label: "Events",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.title }),
      },
      fields: [
        {
          name: "title",
          label: "Titel",
          type: "string",
        },
        {
          name: "description",
          label: "Beschreibung",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          name: "date",
          label: "Datum",
          type: "datetime",
        },
        {
          name: "image",
          label: "Bild",
          type: "image",
        },
      ],
    },
  ],
};

const pageCollection = {
  name: "page",
  label: "Seiten",
  path: "content/page",
  format: "mdx",
  ui: {
    router: ({ document }: any) => {
      if (document._sys.filename === "start") {
        return "/";
      }
      if (document._sys.filename === "about") {
        return `/about`;
      }
      return undefined;
    },
  },
  fields: [
    { name: "title", label: "Titel (SEO)", type: "string" },
    {
      name: "description",
      label: "Beschreibung (SEO)",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "blocks",
      label: "Sections",
      type: "object",
      list: true,
      templates: [heroBlock, contentBlock, eventBlock],
    },
  ],
};

export default pageCollection;
