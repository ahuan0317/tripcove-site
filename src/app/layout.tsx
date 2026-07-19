import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://ahuan0317.github.io/tripcove-site"; // TODO: 有正式域名后替换

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TripCove 途湾 — 打开就有惊喜的周边旅游探索助手",
    template: "%s · TripCove 途湾",
  },
  description:
    "TripCove（途湾）是一款基于地理定位的探索式旅游小程序：滑一滑卡片发现身边好玩的地方，AI 自动规划带预算的一日行程，把去过的城市点亮成你的个人旅行版图。周边游、亲子游、情侣出游、周末去哪儿，打开就有答案。",
  keywords: [
    "TripCove",
    "途湾",
    "周边游",
    "周末去哪儿",
    "旅游小程序",
    "AI行程规划",
    "旅行足迹地图",
    "亲子游",
    "情侣出游",
    "一日游攻略",
  ],
  authors: [{ name: "TripCove 途湾" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: SITE_URL,
    siteName: "TripCove 途湾",
    title: "TripCove 途湾 — 打开就有惊喜的周边旅游探索助手",
    description:
      "滑一滑卡片发现身边好玩的地方，AI 排好一整天吃喝玩乐，把去过的地方点亮成你的旅行版图。",
  },
  twitter: {
    card: "summary_large_image",
    title: "TripCove 途湾 — 打开就有惊喜的周边旅游探索助手",
    description:
      "滑一滑卡片发现身边好玩的地方，AI 排好一整天吃喝玩乐，把去过的地方点亮成你的旅行版图。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.loli.net" crossOrigin="" />
        <link rel="preconnect" href="https://gstatic.loli.net" crossOrigin="" />
        <link
          href="https://fonts.loli.net/css2?family=Noto+Serif+SC:wght@600;700;900&family=IBM+Plex+Mono:wght@400;500&family=Ma+Shan+Zheng&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
