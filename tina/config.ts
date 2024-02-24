import { defineConfig } from "tinacms";
import { pageCollection, siteConfig } from "./schema";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  token: process.env.TINA_TOKEN,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "media",
    },
  },
  schema: {
    // @ts-expect-error
    collections: [pageCollection, siteConfig],
  },
});
