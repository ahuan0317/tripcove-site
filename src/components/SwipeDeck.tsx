"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "motion/react";

type Scene = "town" | "sea" | "mountain" | "tower";

const CARDS: {
  title: string;
  sub: string;
  area: string;
  km: string;
  score: number;
  cat: string;
  tags: string[];
  status: string;
  scene: Scene;
}[] = [
  {
    title: "沙湾古镇 · 宝墨园",
    sub: "岭南祠堂、姜埋奶与老街骑楼，番禺文化一日",
    area: "广州·番禺",
    km: "32km",
    score: 94,
    cat: "🏮",
    tags: ["古村", "文化"],
    status: "营业中",
    scene: "town",
  },
  {
    title: "西冲海滩日落线",
    sub: "下午出发刚刚好：沙滩、日落与海边大排档",
    area: "深圳·大鹏",
    km: "58km",
    score: 89,
    cat: "🌊",
    tags: ["自然", "情侣"],
    status: "营业中",
    scene: "sea",
  },
  {
    title: "南昆山云顶漫步",
    sub: "竹海森林氧吧，夏日平均 23°C 的避暑秘境",
    area: "惠州·龙门",
    km: "96km",
    score: 86,
    cat: "⛰️",
    tags: ["自然", "避暑"],
    status: "即将闭园",
    scene: "mountain",
  },
  {
    title: "开平碉楼 · 侨乡一日",
    sub: "世遗碉楼群与稻田咖啡馆，历史与田野交织",
    area: "江门·开平",
    km: "110km",
    score: 82,
    cat: "🏛️",
    tags: ["文化", "摄影"],
    status: "营业中",
    scene: "tower",
  },
];

/** 明信片配图区的抽象插画（全部取自手帐色板） */
function SceneArt({ scene }: { scene: Scene }) {
  if (scene === "town")
    return (
      <svg viewBox="0 0 300 130" className="h-full w-full" aria-hidden>
        <rect width="300" height="130" fill="#e0594a" />
        <circle cx="248" cy="34" r="18" fill="#f7e8cf" />
        <path d="M0 96l44-30 40 24 52-38 48 30 56-24 60 30v42H0z" fill="#8a4437" />
        <path d="M52 96h40l-6-16h-28zM150 88h48l-8-18h-32z" fill="#6e352b" />
        <path d="M46 80h52M142 70h64" stroke="#e8a33d" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  if (scene === "sea")
    return (
      <svg viewBox="0 0 300 130" className="h-full w-full" aria-hidden>
        <rect width="300" height="130" fill="#e8a33d" />
        <rect y="78" width="300" height="52" fill="#4a78a8" />
        <circle cx="150" cy="78" r="30" fill="#f7e8cf" />
        <path d="M0 92c24 8 48 8 75 0s51-8 75 0 51 8 75 0 51-8 75 0" fill="none" stroke="#fbf7f0" strokeWidth="3" strokeOpacity=".6" />
        <path d="M0 110c24 8 48 8 75 0s51-8 75 0 51 8 75 0 51-8 75 0" fill="none" stroke="#fbf7f0" strokeWidth="3" strokeOpacity=".35" />
      </svg>
    );
  if (scene === "mountain")
    return (
      <svg viewBox="0 0 300 130" className="h-full w-full" aria-hidden>
        <rect width="300" height="130" fill="#dce8de" />
        <path d="M-10 130L90 30l70 66 50-44 100 78z" fill="#3b6b4a" />
        <path d="M-10 130L90 30l30 28-60 72z" fill="#2a4d34" />
        <circle cx="238" cy="32" r="14" fill="#d64a3c" />
        <path d="M60 130c40-16 140-16 200-4" stroke="#fbf7f0" strokeWidth="3" strokeDasharray="2 8" fill="none" />
      </svg>
    );
  return (
    <svg viewBox="0 0 300 130" className="h-full w-full" aria-hidden>
      <rect width="300" height="130" fill="#f7e8cf" />
      <path d="M0 104l300-18v44H0z" fill="#3b6b4a" />
      <rect x="66" y="26" width="34" height="72" fill="#8a5a3b" />
      <rect x="62" y="18" width="42" height="14" rx="3" fill="#6e4227" />
      <rect x="178" y="40" width="30" height="52" fill="#8a5a3b" />
      <rect x="174" y="32" width="38" height="12" rx="3" fill="#6e4227" />
      <rect x="76" y="42" width="6" height="10" fill="#f7e8cf" />
      <rect x="90" y="42" width="6" height="10" fill="#f7e8cf" />
      <rect x="188" y="52" width="5" height="9" fill="#f7e8cf" />
      <circle cx="260" cy="24" r="12" fill="#d64a3c" />
    </svg>
  );
}

function CardFace({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <div className="paper-card flex h-full flex-col overflow-hidden">
      {/* 配图区：底部撕齿过渡（PlaceCard 同款） */}
      <div className="perf-b relative h-[38%] shrink-0">
        <SceneArt scene={card.scene} />
        {/* 左上：分类圆标 */}
        <span className="absolute left-2.5 top-2.5 grid size-9 place-items-center rounded-full border-2 border-white bg-white/95 text-base shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
          {card.cat}
        </span>
        {/* 右上：匹配分红章（rotate 6°） */}
        <span className="absolute right-2.5 top-2.5 grid size-11 rotate-6 place-items-center rounded-full border-2 border-stamp bg-stamp/95 shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
          <span className="font-(family-name:--font-mono) text-[14px] font-bold leading-none text-white">
            {card.score}
          </span>
          <span className="text-[7px] leading-none text-white/85">匹配</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-3.5 pb-3 pt-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="hand text-[17px] font-bold leading-snug text-ink">
            {card.title}
          </h3>
          <span
            className={`shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium ${
              card.status === "营业中"
                ? "bg-moss-wash text-moss"
                : "bg-sun-wash text-sun-deep"
            }`}
          >
            {card.status}
          </span>
        </div>
        <p className="line-clamp-2 text-[11px] leading-relaxed text-ink-soft">
          {card.sub}
        </p>
        <div className="dash-line mt-auto" />
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-semibold text-stamp">
            📍 {card.area} · {card.km}
          </span>
          {card.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-paper2 px-1.5 py-0.5 text-[9.5px] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** 可拖拽的明信片堆：右滑收藏 / 左滑跳过，与小程序交互一致 */
export default function SwipeDeck() {
  const [index, setIndex] = useState(0);
  const [collected, setCollected] = useState(0);
  const [busy, setBusy] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-14, 14]);
  const likeOpacity = useTransform(x, [32, 120], [0, 1]);
  const nopeOpacity = useTransform(x, [-32, -120], [0, 1]);

  const advance = () => {
    setIndex((i) => (i + 1) % CARDS.length);
    x.set(0);
    y.set(0);
    setBusy(false);
  };

  const swipe = (dir: 1 | -1 | 0) => {
    if (busy) return;
    setBusy(true);
    if (dir === 1) setCollected((c) => c + 1);
    const target = dir === 0 ? { mv: y, to: 520 } : { mv: x, to: dir * 560 };
    animate(target.mv, target.to, {
      duration: 0.42,
      ease: [0.32, 0.72, 0, 1],
    }).then(advance);
  };

  const stack = [0, 1, 2].map((i) => CARDS[(index + i) % CARDS.length]);

  return (
    <div className="flex h-full flex-col">
      {/* 收藏计数 */}
      <div className="mb-2 flex items-center justify-between px-1">
        <span className="eyebrow font-(family-name:--font-mono) text-[9px]">
          NEARBY 60KM
        </span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={collected}
            initial={{ scale: 1.5, color: "#d64a3c" }}
            animate={{ scale: 1, color: "#7a6a5c" }}
            className="flex items-center gap-1 text-[11px]"
          >
            ❤️ 已收藏 {collected}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* 卡片堆 */}
      <div className="relative flex-1 [perspective:1000px]">
        {stack
          .map((card, i) => {
            if (i === 0)
              return (
                <motion.div
                  key={`${card.title}-${index}`}
                  className="absolute inset-0 z-30 cursor-grab touch-pan-y active:cursor-grabbing"
                  style={{ x, y, rotate }}
                  drag={!busy}
                  dragElastic={0.65}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 90 || info.velocity.x > 600) swipe(1);
                    else if (info.offset.x < -90 || info.velocity.x < -600)
                      swipe(-1);
                    else if (info.offset.y > 90) swipe(0);
                  }}
                >
                  <CardFace card={card} />
                  {/* 收藏红章 / 跳过章 */}
                  <motion.div
                    style={{ opacity: likeOpacity }}
                    className="seal pointer-events-none absolute left-3 top-5 size-16 -rotate-12 bg-stamp-wash/95"
                  >
                    <span className="hand text-[15px] leading-tight">
                      收藏✓
                    </span>
                  </motion.div>
                  <motion.div
                    style={{ opacity: nopeOpacity }}
                    className="pointer-events-none absolute right-3 top-5 rotate-12 rounded border-[3px] border-ink-faint px-2 py-0.5 text-lg font-black text-ink-faint"
                  >
                    跳过
                  </motion.div>
                </motion.div>
              );
            return (
              <motion.div
                key={`${card.title}-under`}
                className="absolute inset-0"
                initial={false}
                animate={{
                  scale: 1 - i * 0.055,
                  y: i * 15,
                  zIndex: 20 - i,
                  opacity: 1 - i * 0.18,
                  rotate: i === 1 ? 1.6 : -1.6,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <CardFace card={card} />
              </motion.div>
            );
          })
          .reverse()}
      </div>

      {/* 操作按钮 */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          aria-label="不感兴趣"
          onClick={() => swipe(-1)}
          className="paper-card grid size-11 place-items-center rounded-full text-lg transition-transform hover:scale-110 active:scale-95"
        >
          👎
        </button>
        <button
          aria-label="换一批"
          onClick={() => swipe(0)}
          className="paper-card grid size-9 place-items-center rounded-full text-sm duration-500 transition-transform hover:rotate-180 hover:scale-110 active:scale-95"
        >
          🔄
        </button>
        <button
          aria-label="收藏"
          onClick={() => swipe(1)}
          className="btn-stamp grid size-11 place-items-center rounded-full text-lg"
        >
          ❤️
        </button>
      </div>
      <p className="mt-2 text-center text-[10px] text-ink-faint">
        试试拖动卡片 — 右滑收藏 · 左滑跳过 · 下滑换一批
      </p>
    </div>
  );
}
