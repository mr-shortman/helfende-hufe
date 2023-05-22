import { getSiteConfig } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function Home() {
  const siteConfig = await getSiteConfig();
  return redirect(`/${siteConfig.initialPath}`);
}
