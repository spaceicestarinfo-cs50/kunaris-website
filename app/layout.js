import SiteEmailFooter from "./components/SiteEmailFooter";
import "./globals.css";
export const metadata={title:"Kunaris Education & Media Inc.",description:"Learn. Create. Connect."};
export default function RootLayout({children}){return <html lang="en"><body>{children}<SiteEmailFooter/></body></html>}