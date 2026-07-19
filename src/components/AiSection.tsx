"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const QUICK_INTENTS = ["📍 附近亲子游", "💰 穷游一日游", "🍜 美食打卡线", "👨‍👩‍👧 父母慢游"];

const TIMELINE = [
  { time: "09:30", name: "点都德 · 早茶", cost: "¥76", icon: "🥟", dot: "bg-stamp" },
  { time: "11:00", name: "陈家祠 · 岭南建筑", cost: "¥20", icon: "🏛", dot: "bg-moss" },
  { time: "14:00", name: "永庆坊 · 骑楼漫步", cost: "¥0", icon: "🏮", dot: "bg-moss" },
  { time: "16:30", name: "顺记冰室 · 下午茶", cost: "¥42", icon: "🍨", dot: "bg-sun" },
  { time: "18:00", name: "珠江边 · 日落散步", cost: "¥0", icon: "🌇", dot: "bg-moss" },
];

/* 收据小票配色：交通=暖金 / 餐饮=印章红 / 门票=墨绿 / 住宿=信息蓝 */
const BUDGET = [
  { label: "餐饮", value: 118, max: 160, color: "bg-stamp" },
  { label: "门票", value: 20, max: 160, color: "bg-moss" },
  { label: "交通", value: 40, max: 160, color: "bg-sun" },
];

function CountUp({ to, active }: { to: number; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return <>{n}</>;
}

export default function AiSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="ai" className="relative overflow-hidden bg-paper2 py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 size-[420px] rounded-full bg-stamp/8 blur-[100px]" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          no="02"
          kicker="AI TRIP BRAIN"
          note="一句话就够了"
          title={
            <>
              一句话，
              <span className="text-stamp">AI</span> 排好一整天
            </>
          }
          desc="结合知识库与高德实时 POI，AI 按营业时间、路程与预算档位生成可拖拽编辑的时间线行程——像棋手落子一样逐日呈现，边想边排。预算像收据小票一样实时汇总，超支立刻标红；排好后一键进入执行模式，带着你按时间线走完这一天。"
        />

        <div ref={ref} className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* 左：聊天演示 */}
          <div className="paper-card relative overflow-hidden">
            {/* 头部 */}
            <div className="flex items-center gap-2.5 border-b border-line px-5 py-3.5">
              <span className="seal size-9 -rotate-4 text-sm">✨</span>
              <div>
                <p className="text-[13px] font-bold leading-none text-ink">途湾 AI</p>
                <p className="mt-1 flex items-center gap-1 text-[10px] text-ink-soft">
                  <span className="size-1.5 rounded-full bg-moss" /> 逐日落子生成中 · 内容安全已过审
                </p>
              </div>
            </div>

            {/* 快捷输入 */}
            <div className="flex gap-2 overflow-x-auto px-5 pt-4 [scrollbar-width:none]">
              {QUICK_INTENTS.map((q, i) => (
                <motion.button
                  key={q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11px] transition-colors ${
                    i === 3
                      ? "bg-[linear-gradient(135deg,#e0594a,#b83a2e)] font-semibold text-white shadow-[0_3px_8px_rgba(184,58,46,0.28)]"
                      : "bg-paper text-ink-soft ring-1 ring-line hover:ring-stamp/50"
                  }`}
                >
                  {q}
                </motion.button>
              ))}
            </div>

            <div className="space-y-4 px-5 py-5">
              {/* 用户气泡 */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex justify-end"
              >
                <p className="max-w-[78%] rounded-2xl rounded-br-md bg-[linear-gradient(135deg,#e0594a,#b83a2e)] px-4 py-2.5 text-[13px] leading-relaxed text-white shadow-[0_3px_8px_rgba(184,58,46,0.22)]">
                  这周六想带爸妈在广州慢节奏玩一天，预算 300 以内
                </p>
              </motion.div>

              {/* AI 回复 */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="flex justify-start"
              >
                <div className="max-w-[88%] space-y-3 rounded-2xl rounded-bl-md bg-paper px-4 py-3.5 ring-1 ring-line">
                  <p className="text-[13px] leading-relaxed text-ink">
                    为您安排了一条「父母慢游」路线：步行少、节奏慢、
                    有文化——全程预估 <strong className="text-stamp">¥278</strong>，在预算内 ✓
                  </p>
                  {/* 行程时间线卡（Timeline 同款节点色） */}
                  <div className="paper-card space-y-0 p-3.5 shadow-none">
                    <p className="mb-2 flex items-center justify-between">
                      <span className="hand text-[15px] font-bold text-ink">
                        广州 · 老城慢游 1 日
                      </span>
                      <span className="rounded-full bg-stamp-wash px-2 py-0.5 text-[9px] font-semibold text-stamp">
                        可拖拽编辑
                      </span>
                    </p>
                    {TIMELINE.map((t, i) => (
                      <motion.div
                        key={t.name}
                        initial={{ opacity: 0, x: -14 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.5 + i * 0.18 }}
                        className="group flex cursor-pointer items-center gap-3 py-1.5"
                      >
                        <span className="font-(family-name:--font-mono) text-[10px] text-ink-faint">
                          {t.time}
                        </span>
                        <span
                          className={`size-2.5 shrink-0 rounded-full ring-2 ring-paper ${t.dot}`}
                          style={{ boxShadow: "0 0 0 3px rgba(61,46,34,0.08)" }}
                        />
                        <span className="text-sm">{t.icon}</span>
                        <span className="flex-1 text-[12px] text-ink transition-colors group-hover:text-stamp">
                          {t.name}
                        </span>
                        <span className="font-(family-name:--font-mono) text-[10px] text-ink-soft">
                          {t.cost}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* 输入框 */}
              <div className="flex items-center gap-2 rounded-full bg-paper px-4 py-2.5 ring-1 ring-line">
                <span className="flex-1 text-[12px] text-ink-faint">
                  说说你想怎么玩…
                </span>
                <span className="btn-stamp grid size-7 place-items-center rounded-full text-xs">↑</span>
              </div>
            </div>
          </div>

          {/* 右：收据小票预算 + 能力点 */}
          <div className="space-y-8 lg:sticky lg:top-28">
            <Reveal delay={0.15}>
              <div className="receipt tilt-r bg-cream px-7 py-8 shadow-[var(--shadow-card)] transition-transform duration-300 hover:rotate-0 md:px-8">
                <p className="flex items-baseline justify-between">
                  <span className="eyebrow font-(family-name:--font-mono) text-[10px]">
                    RECEIPT · 预算小票
                  </span>
                  <span className="hand text-base text-ink-soft">实时重算</span>
                </p>
                <p className="mt-5 font-(family-name:--font-mono) text-4xl font-bold text-ink">
                  ¥<CountUp to={278} active={inView} />
                  <span className="ml-2 text-sm font-normal text-ink-faint">/ 预算 ¥300</span>
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-moss-wash px-2.5 py-1 text-[11px] font-semibold text-moss">
                  ✓ 在预算内
                </p>
                <div className="dash-line my-5" />
                <div className="space-y-4">
                  {BUDGET.map((b, i) => (
                    <div key={b.label}>
                      <p className="mb-1.5 flex justify-between text-[11.5px] text-ink-soft">
                        <span>{b.label}</span>
                        <span className="font-(family-name:--font-mono) text-ink">¥{b.value}</span>
                      </p>
                      <div className="h-2.5 overflow-hidden rounded-full bg-paper2">
                        <motion.div
                          className={`h-full rounded-full ${b.color}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${(b.value / b.max) * 100}%` } : {}}
                          transition={{ delay: 0.5 + i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="dash-line my-5" />
                <p className="text-[11.5px] leading-relaxed text-ink-soft">
                  每一次拖拽、增删，预算实时重算；
                  <span className="font-semibold text-stamp">超支立刻标红</span>，
                  把钱花在刀刃上。
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  ["🔍", "知识库 + 高德实时 POI，答案带来源"],
                  ["🖐", "行程可拖拽排序，同日跨日随意挪"],
                  ["⚡", "逐日落子呈现，打字光标边想边排"],
                  ["🧭", "执行模式：Day 吸顶 + 当天进度条，到点一键导航打卡"],
                  ["💬", "生成后随时追问：加美食 / 换节奏 / 再压压预算"],
                  ["🛡", "AI 输出先过内容安全审核再渲染"],
                ].map(([icon, text]) => (
                  <li
                    key={text}
                    className="paper-card flex items-start gap-3 px-4 py-3.5 text-[12.5px] leading-relaxed text-ink-soft shadow-none"
                  >
                    <span className="text-lg">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
