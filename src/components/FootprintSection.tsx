"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

/** 城市印章云：visited=盖章，wish=虚线待盖 */
const VISITED = [
  { name: "广州", variant: "", tilt: -3, count: 3 },
  { name: "佛山", variant: "seal-moss", tilt: 2 },
  { name: "深圳", variant: "", tilt: -2, count: 2 },
  { name: "珠海", variant: "seal-sun", tilt: 3 },
  { name: "惠州", variant: "seal-moss", tilt: -4 },
  { name: "江门", variant: "", tilt: 2 },
  { name: "清远", variant: "seal-sun", tilt: -2 },
  { name: "肇庆", variant: "seal-moss", tilt: 4 },
];

const WISHLIST = ["潮州", "桂林", "厦门", "大理"];

const STATS = [
  { n: 12, suffix: "", label: "已点亮城市", color: "text-stamp" },
  { n: 5, suffix: "", label: "途经省份", color: "text-moss" },
  { n: 3482, suffix: "km", label: "累计里程", color: "text-sun-deep" },
  { n: 47, suffix: "", label: "打卡照片", color: "text-info" },
];

function CountUp({ to, active }: { to: number; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return <>{n.toLocaleString()}</>;
}

export default function FootprintSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="footprint" className="relative overflow-hidden py-24 md:py-32">
      {/* 装饰：大 PASSPORT 旋转邮戳 */}
      <svg
        className="stamp-ring pointer-events-none absolute right-[6%] top-16 size-36 text-stamp/30 max-md:hidden"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <path id="fpring" d="M50 12a38 38 0 1 1 0 76 38 38 0 1 1 0-76" />
        </defs>
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
        <text fontSize="9" letterSpacing="3" fill="currentColor">
          <textPath href="#fpring">PASSPORT · TRIPCOVE · 旅行版图 ·</textPath>
        </text>
      </svg>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          no="03"
          kicker="FOOTPRINTS"
          note="每座城，盖一个章"
          title={
            <>
              把去过的地方，
              <br className="sm:hidden" />
              <span className="text-stamp">盖</span>进旅行手帐
            </>
          }
          desc="GPS 围栏自动打卡（到达 200 米内、停留 10 分钟即触发），邮戳落下、墨水晕开、指尖轻震；山顶 GPS 飘了？勾选「免定位打卡」照样盖章，24 小时去重防刷。切到真·中国地图：去过的省份整片染色，每座城市挂上「代表照＋印章红名牌」小挂牌，点一下直达城市攻略，还能一路放大到县级。收藏的地方先进「想去清单」横滑明信片墙留白待盖，打卡后自动转「已去」——想去与已去，构成你完整的旅行资产。"
        />

        <div ref={ref} className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* 左：护照印章簿 */}
          <Reveal>
            <div className="paper-card relative p-7 md:p-9">
              <span className="tape" />
              <p className="flex items-baseline justify-between">
                <span className="hand text-2xl font-bold text-ink">我的旅行版图</span>
                <span className="eyebrow font-(family-name:--font-mono) text-[9px]">
                  GUANGDONG +
                </span>
              </p>

              {/* 已盖章城市 */}
              <div className="mt-6 flex flex-wrap gap-4">
                {VISITED.map((c, i) => (
                  <motion.span
                    key={c.name}
                    initial={{ opacity: 0, scale: 0.5, rotate: -14 }}
                    animate={inView ? { opacity: 1, scale: 1, rotate: c.tilt } : {}}
                    transition={{
                      delay: 0.25 + i * 0.12,
                      type: "spring",
                      stiffness: 260,
                      damping: 13,
                    }}
                    className={`seal ${c.variant} size-[74px] flex-col`}
                  >
                    <span className="hand text-lg leading-none">{c.name}</span>
                    <span className="mt-0.5 text-[9px] leading-none opacity-80">
                      ✓ 已去{"count" in c ? ` ×${c.count}` : ""}
                    </span>
                  </motion.span>
                ))}
              </div>

              <div className="dash-line my-6" />

              {/* 想去清单：虚线待盖 */}
              <p className="mb-3 flex items-center gap-2 text-[12px] font-semibold text-ink-soft">
                <span className="hand text-base text-sun-deep">想去清单</span>
                收藏即入 · 打卡自动转「已去」
              </p>
              <div className="flex flex-wrap gap-3">
                {WISHLIST.map((c, i) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.3 + i * 0.1 }}
                    className="grid size-[62px] place-items-center rounded-full border-2 border-dashed border-line-dark text-ink-faint"
                  >
                    <span className="hand text-base leading-none">{c}</span>
                  </motion.span>
                ))}
                <span className="grid size-[62px] place-items-center rounded-full border-2 border-dashed border-stamp/40 text-lg text-stamp/60">
                  +
                </span>
              </div>

              {/* 照片墙浮签 */}
              <motion.div
                initial={{ opacity: 0, y: 16, rotate: 6 }}
                animate={inView ? { opacity: 1, y: 0, rotate: 4 } : {}}
                transition={{ delay: 1.8, type: "spring", stiffness: 160, damping: 14 }}
                className="paper-card absolute -right-3 -top-5 flex items-center gap-2 px-3.5 py-2.5 md:-right-6"
              >
                <span className="text-lg">📸</span>
                <span>
                  <span className="block text-[10px] text-ink-soft">打卡照片墙</span>
                  <span className="block text-[12px] font-bold text-ink">
                    每座城挂一张回忆
                  </span>
                </span>
              </motion.div>
            </div>
          </Reveal>

          {/* 右：统计 + 年度报告票根 */}
          <div className="space-y-8">
            <dl className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={0.1 * i}>
                  <div className="paper-card px-5 py-5 transition-shadow hover:shadow-[var(--shadow-lift)]">
                    <dd className={`font-(family-name:--font-mono) text-3xl font-bold ${s.color}`}>
                      <CountUp to={s.n} active={inView} />
                      <span className="text-base opacity-60">{s.suffix}</span>
                    </dd>
                    <dt className="mt-1.5 text-xs text-ink-soft">{s.label}</dt>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.2}>
              <div className="paper-card tilt-r flex items-start gap-3.5 p-5 transition-transform duration-300 hover:rotate-0">
                <span className="seal seal-moss size-11 shrink-0 -rotate-6 text-lg">🗺</span>
                <p className="text-[12.5px] leading-[1.8] text-ink-soft">
                  <span className="block text-[14px] font-bold text-ink">
                    省市双级足迹地图
                  </span>
                  省份整片染色看版图，每座点亮的城挂着「代表照＋名牌」小挂牌，
                  点一下直达<strong className="text-stamp">城市攻略</strong>；
                  底图透出省市县，一路放大到县级看细节。同城多次打卡自动聚合，角标记次数。
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="receipt tilt-l relative bg-cream px-6 py-7 shadow-[var(--shadow-card)] transition-transform duration-300 hover:rotate-0">
                <p className="eyebrow font-(family-name:--font-mono) text-[9px]">
                  ANNUAL REPORT · 2026
                </p>
                <p className="hand mt-2 text-2xl font-bold text-ink">
                  你的年度旅行报告
                </p>
                <div className="dash-line my-4" />
                <p className="text-[12.5px] leading-relaxed text-ink-soft">
                  年末自动生成：城市数、总里程、偏好类型、花费估算——
                  一张海报，让朋友圈知道你这一年走了多远。
                  足迹版图也可随时生成分享海报——真·可扫的墨绿二维码，好友扫一扫即可
                  <strong className="text-stamp">一键复刻</strong>你的行程。
                </p>
                <span className="seal seal-sun absolute -right-2 -top-3 size-12 rotate-12 text-[10px]">
                  年度
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
