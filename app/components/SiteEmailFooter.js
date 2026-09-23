"use client";

import { usePathname } from "next/navigation";

const LANGUAGE_SLUGS = ["french", "english", "spanish", "cantonese"];

export default function SiteEmailFooter(){
  const pathname = usePathname() || "/";
  const parts = pathname.split("/").filter(Boolean);
  const isLanguagePage = parts.includes("for-you") && LANGUAGE_SLUGS.some((slug)=>parts.includes(slug));
  const isBusinessPage = parts.includes("for-business");
  const email = isLanguagePage ? "courses@kunaris.ca" : isBusinessPage ? "sales@kunaris.ca" : "info@kunaris.ca";
  const locale = parts[0] === "fr" ? "fr" : parts[0] === "zh" ? "zh" : "en";
  const label = locale === "fr" ? "Courriel" : locale === "zh" ? "电子邮箱" : "Email";
  return (
    <div className="siteEmailFooter">
      <div className="siteEmailFooterInner">
        <span>{label}</span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
}
