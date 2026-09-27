import { siteUrl } from "./seo";

const paths = ["", "/about", "/contact", "/for-business", "/for-you", "/for-you/french", "/for-you/english", "/for-you/spanish", "/for-you/cantonese", "/for-you/classes-activities", "/for-you/journey", "/projects", "/privacy", "/terms"];

export default function sitemap() {
  return paths.flatMap((path) => ["en", "fr", "zh"].map((locale) => ({
    url: `${siteUrl}${locale === "en" ? "" : `/${locale}`}${path || (locale === "en" ? "/" : "")}`,
    alternates: { languages: {
      "en-CA": `${siteUrl}${path || "/"}`,
      "fr-CA": `${siteUrl}/fr${path}`,
      "zh-Hans": `${siteUrl}/zh${path}`,
    } },
  })));
}
