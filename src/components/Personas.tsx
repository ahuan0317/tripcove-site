import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const PERSONAS = [
  {
    emoji: "🧑‍🎤",
    name: "周末探索者",
    age: "20–35 · 城市青年",
    quote: "周六早上睁眼：附近有啥好玩的？",
    answer: "打开滑 3 分钟，60km 内的惊喜就位。",
    seal: "",
    tilt: "tilt-l",
  },
  {
    emoji: "👨‍👧",
    name: "溜娃家长",
    age: "25–40 · 带娃家庭",
    quote: "要适合小孩、安全、时间可控。",
    answer: "人群选「溜娃」，乐园与公园自动置顶。",
    seal: "seal-sun",
    tilt: "tilt-r",
  },
  {
    emoji: "💑",
    name: "情侣出游",
    age: "约会 · 纪念日",
    quote: "想要有氛围、出片、还不贵。",
    answer: "日落线 + 预算小票，浪漫且不超支。",
    seal: "",
    tilt: "tilt-l",
  },
  {
    emoji: "🧓",
    name: "陪父母慢游",
    age: "中年子女 · 长辈同行",
    quote: "步行少、节奏慢、有点文化。",
    answer: "AI 快捷输入「父母慢游」，一键出行程。",
    seal: "seal-moss",
    tilt: "tilt-r",
  },
  {
    emoji: "🎒",
    name: "深度旅行者",
    age: "自由行 · 攻略党",
    quote: "多日行程要自己掌控每个细节。",
    answer: "AI 排或手动拼随意切，多日时间线全掌控。",
    seal: "seal-moss",
    tilt: "tilt-l",
  },
];

export default function Personas() {
  return (
    <section id="scenes" className="bg-paper2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          no="05"
          kicker="FOR EVERY TRIP"
          note="总有一款出发方式适合你"
          title={
            <>
              每一种出发，
              <br className="sm:hidden" />
              都有<span className="text-stamp">答案</span>
            </>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PERSONAS.map((p) => (
            <Reveal key={p.name} delay={0.08 * PERSONAS.indexOf(p)} className="h-full">
              <div
                className={`group paper-card flex h-full flex-col p-5 ${p.tilt} transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[var(--shadow-lift)]`}
              >
                <span className={`seal ${p.seal} size-11 text-xl`}>{p.emoji}</span>
                <h3 className="mt-3.5 text-[15px] font-bold text-ink">{p.name}</h3>
                <p className="mt-0.5 text-[10px] tracking-wide text-ink-faint">
                  {p.age}
                </p>
                <p className="hand mt-3 text-[15px] leading-relaxed text-ink-soft">
                  「{p.quote}」
                </p>
                <div className="dash-line mt-auto" />
                <p className="pt-3 text-[12px] font-semibold leading-relaxed text-stamp">
                  {p.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
