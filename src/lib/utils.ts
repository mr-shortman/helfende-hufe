import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import client from "../../tina/__generated__/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTinaPage = async (relativePath: string) => {
  return await client.queries.page({
    relativePath,
  });
};
