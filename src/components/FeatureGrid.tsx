"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const FEATURES = [
  {
    icon: "🎯",
    seal: "",
    title: "GPS 围栏打卡",
    desc: "到达 200 米内、停留 10 分钟自动弹出打卡；山顶 GPS 飘了就勾「免定位打卡」，24 小时去重照样防刷。",
  },
  {
    icon: "🔁",
    seal: "seal-moss",
    title: "一键复刻行程",
    desc: "好友分享的行程海报，扫码即可复刻进自己的行程库，再让 AI 优化成你的版本。",
  },
  {
    icon: "🔎",
    seal: "seal-sun",
    title: "会听人话的搜索",
    desc: "「天安门附近的汉堡」这样搜也懂：自动拆出地标与目标，按距离就近排序，营业时段直接标在卡上。",
  },
  {
    icon: "🏆",
    seal: "",
    title: "成就徽章",
    desc: "首次探索、百卡探索者、古镇猎人……每张徽章票面印着解锁条件，怎么点亮一目了然。",
  },
  {
    icon: "🔔",
    seal: "seal-sun",
    title: "今日灵感推送",
    desc: "每天 9:00 按天气与偏好推一张「今日推荐」明信片，灵感准时到达。",
  },
  {
    icon: "📴",
    seal: "seal-moss",
    title: "弱网离线可看",
    desc: "行程与足迹概览本地持久化，高铁上、山里没信号照样打开；各列表页下拉即刷新。",
  },
  {
    icon: "🎲",
    seal: "",
    title: "随机盲盒",
    desc: "选择困难？一键「帮我决定」，随机抽一张卡，直接生成行程说走就走。",
  },
  {
    icon: "🧩",
    seal: "seal-moss",
    title: "手动拼行程",
    desc: "不想全交给 AI？选城市 → 按天勾吃喝玩乐 → 填人均预算，自己拼一份，封面自动配好。",
  },
];

export default function FeatureGrid() {
  return (
    <section id="more" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          no="04"
          kicker="AND MORE"
          note="都是贴心的小心思"
          title={
            <>
              细节，<span className="text-stamp">越用越上头</span>
            </>
          }
          desc="从出发前的灵感，到路上的打卡，再到年末的回顾——这些小功能在每个环节接住你。"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.06 * i} className="h-full">
              <motion.div
                initial={false}
                whileHover={{ y: -6, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`paper-card h-full p-6 ${i % 2 === 0 ? "tilt-l" : "tilt-r"} transition-shadow hover:shadow-[var(--shadow-lift)]`}
              >
                <span
                  className={`seal ${f.seal} size-12 text-xl ${i % 2 === 0 ? "-rotate-6" : "rotate-6"}`}
                >
                  {f.icon}
                </span>
                <h3 className="hand mt-4 text-[19px] font-bold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-[1.8] text-ink-soft">
                  {f.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
