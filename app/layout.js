import { seoMetadata } from "./seo";
export const metadata = seoMetadata("en", "", "Learn, Create & Connect | Kunaris Education & Media", "Explore language courses, digital media, websites, apps, branding, business training and creative collaborations with Kunaris Education & Media in Canada.");
import SiteEmailFooter from "./components/SiteEmailFooter";
import "./globals.css";
import { headers } from "next/headers";
export default async function RootLayout({children}) {
  const path = (await headers()).get("x-site-path") || "/";
  const lang = path.startsWith("/fr/") || path === "/fr" ? "fr-CA" : path.startsWith("/zh/") || path === "/zh" ? "zh-Hans" : "en-CA";
  return <html lang={lang}><body>{children}<SiteEmailFooter/></body></html>;
}
