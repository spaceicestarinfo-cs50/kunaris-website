"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const COPY = {
  en: [
    ["Business Services", "sales@kunaris.ca"],
    ["Language Courses", "courses@kunaris.ca"],
    ["Inquiries & Other", "info@kunaris.ca"],
  ],
  fr: [
    ["Services aux entreprises", "sales@kunaris.ca"],
    ["Cours de langues", "courses@kunaris.ca"],
    ["Renseignements et autres demandes", "info@kunaris.ca"],
  ],
  zh: [
    ["企业服务", "sales@kunaris.ca"],
    ["语言课程", "courses@kunaris.ca"],
    ["咨询及其他", "info@kunaris.ca"],
  ],
};

export default function SiteEmailFooter(){
  const [target, setTarget] = useState(null);
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const parts = window.location.pathname.split("/").filter(Boolean);
    setLocale(parts[0] === "fr" ? "fr" : parts[0] === "zh" ? "zh" : "en");

    const brand = document.querySelector(".footerBrand");
    if (!brand) return;
    const textColumn = brand.querySelector(":scope > span, :scope > div") || brand;
    setTarget(textColumn);
  }, []);

  if (!target) return null;

  return createPortal(
    <div className="footerContactList" aria-label="Kunaris contact emails">
      {COPY[locale].map(([label, email]) => (
        <div className="footerContactRow" key={email}>
          <span>{label}</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      ))}
    </div>,
    target
  );
}
