"use client";

import { motion, useReducedMotion } from "motion/react";
import SwipeDeck from "./SwipeDeck";

const STAGGER = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/** 手机壳 + 小程序界面模拟（手帐风） */
function Phone() {
  return (
    <div className="relative mx-auto w-[300px] rounded-[2.6rem] bg-ink p-2.5 shadow-[0_40px_80px_-24px_rgba(61,46,34,0.5)] sm:w-[320px]">
      <div className="relative overflow-hidden rounded-[2.1rem] bg-paper">
        {/* 刘海 */}
        <div className="absolute left-1/2 top-2 z-40 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
        {/* 顶部：眉标 + 定位 + 筛选 */}
        <div className="px-4 pb-2 pt-10">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-[12px] font-semibold text-ink">
              📍 广州 · 番禺
              <svg className="size-3 text-ink-soft" viewBox="0 0 12 12" aria-hidden>
                <path d="M3 5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="eyebrow font-(family-name:--font-mono) text-[8px]">
              EXPLORE
            </span>
          </div>
          <div className="mt-2.5 flex gap-1.5">
            {["60km", "情侣", "不限类型"].map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-2.5 py-1 text-[10px] ${
                  i === 0
                    ? "bg-[linear-gradient(135deg,#e0594a,#b83a2e)] font-semibold text-white shadow-[0_2px_6px_rgba(184,58,46,0.28)]"
                    : "bg-cream text-ink-soft ring-1 ring-line"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        {/* 卡片堆 */}
        <div className="h-[380px] px-4 pb-3">
          <SwipeDeck />
        </div>
        {/* TabBar：顶部撕齿 + 中央 AI 邮戳凸起 */}
        <div className="relative border-t border-line bg-cream">
          <div
            className="pointer-events-none absolute -top-[7px] left-0 right-0 h-[7px]"
            style={{
              background:
                "radial-gradient(circle at 8px 0px, #ffffff 4px, transparent 4.5px) repeat-x",
              backgroundSize: "16px 7px",
            }}
          />
          <div className="flex items-end justify-around px-2 pb-3.5 pt-2">
            {[
              { icon: "🧭", label: "探索", active: true },
              { icon: "🗓", label: "行程" },
              { icon: "✨", label: "AI", raised: true },
              { icon: "🗺", label: "足迹" },
              { icon: "👤", label: "我的" },
            ].map((t) =>
              t.raised ? (
                <span
                  key={t.label}
                  className="seal relative -top-4 size-12 -rotate-4 text-lg shadow-[0_3px_8px_rgba(184,58,46,0.28)]"
                >
                  {t.icon}
                </span>
              ) : (
                <span
                  key={t.label}
                  className={`flex flex-col items-center gap-0.5 text-[9px] ${
                    t.active ? "font-bold text-stamp" : "text-ink-faint"
                  }`}
                >
                  <span className="text-[15px]">{t.icon}</span>
                  {t.label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-40">
      {/* 暖金/印章红氛围晕 */}
      <div className="pointer-events-none absolute -left-40 top-16 size-[480px] rounded-full bg-sun/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-[420px] rounded-full bg-stamp/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* 左：文案 */}
        <div>
          <motion.p
            custom={0}
            variants={STAGGER}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="eyebrow mb-5 font-(family-name:--font-mono) text-[11px]"
          >
            WECHAT MINI PROGRAM · 周边旅游探索
          </motion.p>

          <motion.h1
            custom={1}
            variants={STAGGER}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="relative font-(family-name:--font-display) text-[2.6rem] font-black leading-[1.18] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            把周末，
            <br />
            <span className="hand-underline">滑出惊喜</span>
            <span className="text-stamp">。</span>
            {/* 手写小注 */}
            <span className="hand absolute -right-2 top-1 hidden rotate-6 text-2xl font-normal text-stamp/75 lg:block">
              致·爱出门的你
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={STAGGER}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="mt-6 max-w-lg text-[15px] leading-[1.9] text-ink-soft md:text-base"
          >
            不用做攻略——<strong className="font-medium text-ink">滑一滑明信片</strong>
            就能发现身边好玩的地方，让 <strong className="font-medium text-ink">AI 排好一整天吃喝玩乐</strong>，
            再把去过的城市<strong className="font-medium text-ink">盖进你的旅行手帐</strong>。
            周边游、亲子游、情侣出游，打开就有答案。
          </motion.p>

          <motion.div
            custom={3}
            variants={STAGGER}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#download" className="btn-stamp px-8 py-4 text-[15px]">
              微信扫码 · 立即探索
            </a>
            <a href="#ai" className="btn-dashed px-7 py-[14px] text-[15px]">
              看 AI 如何排行程 ↓
            </a>
          </motion.div>

          {/* 关键数字 */}
          <motion.dl
            custom={4}
            variants={STAGGER}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6"
          >
            {[
              ["369 城", "全国随心探索"],
              ["9 类", "地点 × 5 类人群"],
              ["< 2s", "AI 首字响应"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-(family-name:--font-mono) text-xl font-semibold text-stamp md:text-2xl">
                  {n}
                </dd>
                <dd className="mt-1 text-[11px] text-ink-soft md:text-xs">{l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* 右：手机演示 + 手帐贴纸 */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 60, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* 旋转邮戳环（TRIPCOVE 戳） */}
          <svg
            className="stamp-ring pointer-events-none absolute -right-4 -top-10 size-28 text-stamp/60 max-lg:hidden"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <defs>
              <path id="ring" d="M50 10a40 40 0 1 1 0 80 40 40 0 1 1 0-80" />
            </defs>
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" />
            <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1" />
            <text className="font-(family-name:--font-mono)" fontSize="8.5" letterSpacing="2.5" fill="currentColor">
              <textPath href="#ring">TRIPCOVE · 途湾 · 收集世界 · POST ·</textPath>
            </text>
          </svg>

          {/* 悬浮登机牌（「我的」页同款 BOARDING） */}
          <motion.div
            className="paper-card absolute -left-10 top-24 z-30 hidden w-44 rotate-[-6deg] overflow-hidden lg:block"
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between bg-stamp-wash px-3 py-1.5">
              <span className="eyebrow font-(family-name:--font-mono) text-[8px]">
                BOARDING
              </span>
              <span className="hand text-[11px] text-stamp">途湾</span>
            </div>
            <div className="dash-line" />
            <div className="grid grid-cols-3 gap-1 px-3 py-2 text-center">
              {[
                ["PASS", "周六"],
                ["DEST", "远方"],
                ["SEAT", "靠窗"],
              ].map(([k, v]) => (
                <span key={k}>
                  <span className="block font-(family-name:--font-mono) text-[7px] tracking-widest text-ink-faint">
                    {k}
                  </span>
                  <span className="hand block text-[13px] text-ink">{v}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* 悬浮打卡章 */}
          <motion.div
            className="paper-card absolute -right-6 bottom-28 z-30 hidden rotate-6 items-center gap-2.5 px-3.5 py-2.5 lg:flex"
            animate={reduced ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="seal seal-moss size-9 -rotate-8 text-sm">✓</span>
            <span>
              <span className="block text-[10px] text-ink-soft">GPS 围栏打卡</span>
              <span className="block text-[12.5px] font-bold text-moss">
                足迹 +1 · 广东
              </span>
            </span>
          </motion.div>

          <Phone />
        </motion.div>
      </div>
    </section>
  );
}
