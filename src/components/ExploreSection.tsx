"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const RANGES = ["30km", "60km", "100km", "自定义"];
const CROWDS = ["不限", "溜娃", "情侣", "父母", "朋友", "独自"];
const TYPES = ["不限", "公园", "自然", "古村", "城市", "乐园", "美食", "文化", "网红"];

const TIME_SLOTS = [
  { time: "上午", icon: "🌤", boost: ["公园漫步", "早茶老字号"], now: false },
  { time: "午间", icon: "☀️", boost: ["人气餐厅", "商圈逛吃"], now: false },
  { time: "傍晚", icon: "🌇", boost: ["日落观景点", "江边骑行"], now: true },
  { time: "夜间", icon: "🌙", boost: ["夜市小吃", "灯光夜景"], now: false },
];

const RANKINGS = [
  { title: "珠三角十大古村", n: "10 个地点", emoji: "🏮", tilt: "tilt-l" },
  { title: "遛娃圣地 TOP15", n: "15 个地点", emoji: "🎠", tilt: "tilt-r" },
  { title: "广深日落收集图鉴", n: "12 个地点", emoji: "🌇", tilt: "tilt-l" },
];

function FilterGroup({
  label,
  options,
  defaultIndex,
}: {
  label: string;
  options: string[];
  defaultIndex: number;
}) {
  const [active, setActive] = useState(defaultIndex);
  return (
    <div>
      <p className="mb-2 text-[11px] font-medium tracking-wide text-ink-soft">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o, i) => (
          <button
            key={o}
            onClick={() => setActive(i)}
            className={`rounded-full px-3 py-1.5 text-xs transition-all duration-300 ${
              active === i
                ? "bg-[linear-gradient(135deg,#e0594a,#b83a2e)] font-semibold text-white shadow-[0_3px_8px_rgba(184,58,46,0.28)]"
                : "bg-cream text-ink-soft ring-1 ring-line hover:ring-stamp/40"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ExploreSection() {
  return (
    <section id="explore" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          no="01"
          kicker="ZERO-INPUT EXPLORE"
          note="滑一滑就有惊喜～"
          title={
            <>
              不用想去哪，
              <br className="sm:hidden" />
              <span className="text-stamp">滑一滑</span>就知道
            </>
          }
          desc="选好距离、人群、类型三个条件，TripCove 就把「值得去」的地点做成明信片推给你。匹配值融合距离、热度、你的画像与当下时段——上午推公园早茶，傍晚推日落夜市；休息中的地点自动后置，不让你白跑一趟。滑腻了？一键切到地图模式，商家实拍图钉在地图上，拖拽缩放，周边好去处一屏扫清。不止身边——城市选择器覆盖全国 369 城，人在广州也能提前云探索北京。"
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* 左：三条件筛选便签（贴胶带） */}
          <Reveal className="h-full">
            <div className="paper-card tilt-l relative flex h-full flex-col gap-6 p-7 transition-transform duration-300 hover:rotate-0 md:p-8">
              <span className="tape" />
              <p className="flex items-center justify-between">
                <span className="hand text-xl font-bold text-ink">三条件筛选</span>
                <span className="eyebrow font-(family-name:--font-mono) text-[9px]">
                  TRY IT
                </span>
              </p>
              <FilterGroup label="探索范围（5–300km 自定义）" options={RANGES} defaultIndex={1} />
              <FilterGroup label="出行人群" options={CROWDS} defaultIndex={2} />
              <FilterGroup label="地点类型" options={TYPES} defaultIndex={3} />
              <div className="mt-auto space-y-2.5 rounded-2xl border border-dashed border-line-dark bg-paper px-5 py-4">
                <p className="text-xs leading-relaxed text-ink-soft">
                  <span className="font-semibold text-stamp">卡片 / 地图随时切：</span>
                  地图模式用商家实拍图做图钉，点开店名即达详情，拖拽缩放自由看。
                </p>
                <p className="text-xs leading-relaxed text-ink-soft">
                  <span className="font-semibold text-stamp">全国 369 城随心切：</span>
                  不止定位周边，选个城市就能云探索；拒绝定位授权也照样用。
                </p>
                <p className="text-xs leading-relaxed text-ink-soft">
                  <span className="font-semibold text-stamp">会听人话的搜索：</span>
                  「天安门附近的汉堡」这样说也懂，自动拆出地标与目标，就近排给你。
                </p>
              </div>
            </div>
          </Reveal>

          {/* 右：时段适配 + 主题榜单 */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="paper-card relative p-7 md:p-8">
                <p className="flex items-center justify-between">
                  <span className="hand text-xl font-bold text-ink">
                    时段智能适配
                  </span>
                  <span className="eyebrow font-(family-name:--font-mono) text-[9px]">
                    NOW 17:42
                  </span>
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {TIME_SLOTS.map((s, i) => (
                    <motion.div
                      key={s.time}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className={`rounded-2xl p-3.5 ${
                        s.now
                          ? "bg-[linear-gradient(135deg,#f0b558,#c8842a)] text-white shadow-[0_6px_16px_rgba(200,132,42,0.35)]"
                          : "border border-line bg-paper text-ink-soft"
                      }`}
                    >
                      <p className="flex items-center justify-between text-xs font-bold">
                        {s.time} <span>{s.icon}</span>
                      </p>
                      <ul className="mt-2 space-y-1 text-[10.5px] leading-snug opacity-95">
                        {s.boost.map((b) => (
                          <li key={b}>↑ {b}</li>
                        ))}
                      </ul>
                      {s.now && (
                        <p className="mt-2 font-(family-name:--font-mono) text-[8.5px] tracking-wider">
                          当前加权中 ●
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-3 sm:flex-row">
                {RANKINGS.map((r) => (
                  <a
                    key={r.title}
                    href="#download"
                    className={`group paper-card flex flex-1 items-center gap-3 px-5 py-4 ${r.tilt} transition-all duration-300 hover:rotate-0 hover:shadow-[var(--shadow-lift)]`}
                  >
                    <span className="seal seal-sun size-10 shrink-0 text-lg transition-transform duration-300 group-hover:-rotate-12">
                      {r.emoji}
                    </span>
                    <span>
                      <span className="block text-[13px] font-bold leading-tight text-ink">
                        {r.title}
                      </span>
                      <span className="mt-0.5 block text-[10px] text-ink-faint">
                        主题榜单 · {r.n}
                      </span>
                    </span>
                    <span className="ml-auto text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-stamp">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
