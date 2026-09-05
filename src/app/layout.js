import "./globals.css";

import NavbarWrap from "../components/Shared/Navbar/NavberWrap";
import NewFooter from "../components/Shared/Footer/NewFooter";
import ChatBox from "../components/Shared/ChatBox/ChatBox";
import SocialIcons from "../components/Shared/SocialIcons/SocialIcons";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "无纺布个人防护装备与医疗设备机械制造商 | 快裕达 (KYD)",
  description: "广东快裕达精密机械制造有限公司专业研发和制造高端无纺布医用口罩制造机、手术衣制造机、鞋套制造机等全自动个人防护用品生产设备。FDA和CE认证，全球信赖的机械设备供应商。",
  metadataBase: new URL(`http://gdkyd.com.cn`),
  alternates: {
    canonical: "./",
    languages: {
      "zh": "http://gdkyd.com.cn/zh",
      "en": "http://gdkyd.com.cn",
      "bn": "http://gdkyd.com.cn/bn",
      "pt": "http://gdkyd.com.cn/pt",
      "de": "http://gdkyd.com.cn/de",
      "ja": "http://gdkyd.com.cn/ja",
      "hi": "http://gdkyd.com.cn/hi",
    }
  },
  siteName: "GDKYD",
  type: "Organization",
  category: "Service",
  url: "http://gdkyd.com.cn",
  icons: {
    icon: "http://gdkyd.com.cn/assets/logo/main-logo.webp",
  },
  openGraph: {
    title: "广东快裕达精密机械有限公司",
    description: "最先进的医疗设备和无纺布机械，为您提供高品质生产解决方案。",
    images: [
      {
        url: "http://gdkyd.com.cn/assets/logo/main-logo.webp",
        width: 800,
        height: 600,
        alt: "广东快裕达公司 Logo",
      },
    ],
  },
  creator: "GDKYD",
  publisher: "GDKYD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "信赖的医疗设备制造商",
    "口罩机供应商",
    "无纺布机械设备",
    "全自动手术衣制造机",
  ],
  // verification: {
  //   google: "h3e62bYsWEGHaX-2QCqFFXfOGtkjb5lMJ_FJpg0a6R0",
  //   yandex: "5e6c720b2ded4231",
  //   other: {
  //     "baidu-site-verification": ["codeva-uB2leomNuE"],
  //   },
  // },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={``}>
        <NextTopLoader
          color="#fafafac3"
          height={3}
          showSpinner={false}
        />
        <Toaster position="top-center" />
        <NavbarWrap></NavbarWrap>
        <SocialIcons></SocialIcons>
        <ChatBox></ChatBox>
        {children}
        <NewFooter></NewFooter>
      </body>
    </html>
  );
}
