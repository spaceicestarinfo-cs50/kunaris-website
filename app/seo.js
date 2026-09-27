export const siteUrl = "https://kunaris.ca";

export const languages = { en: "en-CA", fr: "fr-CA", zh: "zh-Hans" };

export function seoMetadata(locale, slug, title, description, options = {}) {
  const path = `${locale === "en" ? "" : `/${locale}`}${slug}` || "/";
  const url = `${siteUrl}${path}`;
  const alternatives = Object.fromEntries(
    Object.entries(languages).map(([key, language]) => [
      language,
      `${siteUrl}${key === "en" ? "" : `/${key}`}${slug}` || `${siteUrl}/`,
    ])
  );
  alternatives["x-default"] = `${siteUrl}${slug}`;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: url, languages: alternatives },
    openGraph: { type: "website", url, siteName: "Kunaris Education & Media", title, description, locale: languages[locale].replace("-", "_"), images: [{ url: "/kunaris-sphere.png", alt: "Kunaris" }] },
    robots: options.noindex ? { index: false, follow: true } : undefined,
  };
}
