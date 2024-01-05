import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import client from "../../tina/__generated__/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTinaPage = async (relativePath: string) => {
  try {
    return await client.queries.page({
      relativePath,
    });
  } catch (e) {
    return null;
  }
};

export const getSiteConfig = async () => {
  const req = await client.queries.siteConfig({
    relativePath: "siteConfig.md",
  });
  return req.data.siteConfig;
};

export const getSiteNavigator = async () => {
  const req = await client.queries.siteConfig({
    relativePath: "siteConfig.md",
  });
  return req.data.siteConfig.navigator;
};
