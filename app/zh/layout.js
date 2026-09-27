import { seoMetadata } from "../seo";
export const metadata = seoMetadata("zh", "", "教育与创意，连接更多可能 | Kunaris 星初创意", "探索 Kunaris 的语言课程、网站与 App 开发、品牌设计、视频制作、企业培训及创意合作服务。");
export default function ZhLayout({ children }) {
  return <div className="zhPage">{children}</div>;
}
