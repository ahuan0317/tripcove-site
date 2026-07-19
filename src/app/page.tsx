import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ExploreSection from "@/components/ExploreSection";
import AiSection from "@/components/AiSection";
import FootprintSection from "@/components/FootprintSection";
import FeatureGrid from "@/components/FeatureGrid";
import Personas from "@/components/Personas";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { FAQS } from "@/data/faqs";

/** 结构化数据：应用信息 + FAQ，供搜索引擎富摘要 */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "TripCove 途湾",
      alternateName: "途湾",
      applicationCategory: "TravelApplication",
      operatingSystem: "WeChat Mini Program",
      description:
        "基于地理定位的探索式旅游小程序：滑卡片发现周边好玩地点，AI 规划带预算的行程，点亮地图沉淀旅行足迹。",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CNY",
      },
      inLanguage: "zh-CN",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ExploreSection />
        <AiSection />
        <FootprintSection />
        <FeatureGrid />
        <Personas />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
