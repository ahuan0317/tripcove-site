import Reveal from "./Reveal";

/** 底部 CTA（印章红渐变明信片）+ 页脚 */
export default function Footer() {
  return (
    <footer className="relative">
      {/* CTA 面板 */}
      <section id="download" className="px-5 pb-24 md:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#e0594a_0%,#b83a2e_100%)] px-8 py-16 text-center text-white shadow-[0_24px_60px_-20px_rgba(184,58,46,0.5)] md:py-20">
            {/* 纸纹 + 光晕 */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "5px 5px",
              }}
            />
            <div className="pointer-events-none absolute -left-24 top-0 size-80 rounded-full bg-sun/25 blur-[100px]" />

            {/* 角落邮戳 */}
            <svg
              className="stamp-ring pointer-events-none absolute right-8 top-8 size-24 text-white/40 max-md:hidden"
              viewBox="0 0 100 100"
              aria-hidden
            >
              <defs>
                <path id="ctaring" d="M50 12a38 38 0 1 1 0 76 38 38 0 1 1 0-76" />
              </defs>
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
              <text fontSize="9" letterSpacing="3" fill="currentColor">
                <textPath href="#ctaring">TRIPCOVE · 途湾 · POSTCARD ·</textPath>
              </text>
            </svg>

            <p className="relative font-(family-name:--font-mono) text-[11px] tracking-[0.3em] text-sun-wash">
              READY TO EXPLORE?
            </p>
            <h2 className="relative mx-auto mt-4 max-w-xl font-(family-name:--font-display) text-3xl font-black leading-tight sm:text-4xl md:text-[2.8rem]">
              下一个惊喜，
              <br className="sm:hidden" />
              就在 <span className="whitespace-nowrap">60km 之内</span>
            </h2>
            <p className="hand relative mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/85">
              这个周末，把决定权交给一次右滑。
            </p>

            {/* 二维码（明信片框） */}
            <div className="relative mx-auto mt-9 w-fit rotate-[-2deg] rounded-2xl bg-paper p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:rotate-0">
              <svg viewBox="0 0 33 33" className="size-36 text-ink" aria-label="小程序二维码占位">
                <rect width="33" height="33" fill="#fbf7f0" />
                <g fill="currentColor">
                  <path d="M2 2h9v9H2zm2 2v5h5V4zM22 2h9v9h-9zm2 2v5h5V4zM2 22h9v9H2zm2 2v5h5v-5z" />
                  <path d="M4 24h5v5H4z" />
                  <path d="M13 2h2v2h-2zm4 0h2v4h-2zm-4 4h2v4h-2zm4 2h4v2h-4zm6 5h2v2h-2zm4 0h4v2h-4zm-8 0h2v4h-2zm-4 2h2v2h-2zm-9 0h4v2H2zm26 2h3v2h-3zm-14 2h4v2h-4zm6 0h2v2h-2zm-4 4h2v2h-2zm4 0h6v2h-6zm8-2h2v6h-2zm-6 4h4v2h-4zm-9-2h2v5h-2zm-2 3h2v2h-2z" />
                  <circle cx="6.5" cy="6.5" r="1.6" />
                  <circle cx="26.5" cy="6.5" r="1.6" />
                  <circle cx="6.5" cy="26.5" r="1.6" />
                </g>
              </svg>
              <p className="mt-2.5 text-center font-(family-name:--font-mono) text-[10px] tracking-[0.18em] text-ink-soft">
                微信搜「途湾 TRIPCOVE」
              </p>
            </div>

            <p className="relative mt-7 text-xs text-white/70">
              免下载 · 微信内直接打开 · 核心功能免费
            </p>
          </div>
        </Reveal>
      </section>

      {/* 页脚 */}
      <div className="border-t border-line bg-paper2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
          <div>
            <p className="flex items-center gap-2.5">
              <span className="seal size-10 text-lg">
                <span className="hand leading-none">途</span>
              </span>
              <span className="leading-none">
                <span className="hand block text-xl font-bold text-ink">途湾</span>
                <span className="block font-(family-name:--font-mono) text-[9px] tracking-[0.24em] text-ink-faint">
                  TRIPCOVE
                </span>
              </span>
            </p>
            <p className="mt-4 max-w-sm text-[13px] leading-[1.9] text-ink-soft">
              打开就有惊喜的周边旅游探索助手——明信片滑动探索周边好玩地点，
              AI 规划行程，盖章点亮旅行版图。
            </p>
            <p className="hand mt-5 text-base text-ink-faint">
              收集世界，从身边 60km 开始。
            </p>
          </div>

          <nav aria-label="产品导航">
            <p className="mb-4 text-[13px] font-bold text-ink">产品</p>
            <ul className="space-y-2.5 text-[13px] text-ink-soft">
              <li><a className="transition-colors hover:text-stamp" href="#explore">卡片探索</a></li>
              <li><a className="transition-colors hover:text-stamp" href="#ai">AI 行程规划</a></li>
              <li><a className="transition-colors hover:text-stamp" href="#footprint">足迹版图</a></li>
              <li><a className="transition-colors hover:text-stamp" href="#more">全部功能</a></li>
            </ul>
          </nav>

          <nav aria-label="支持导航">
            <p className="mb-4 text-[13px] font-bold text-ink">支持</p>
            <ul className="space-y-2.5 text-[13px] text-ink-soft">
              <li><a className="transition-colors hover:text-stamp" href="#faq">常见问题</a></li>
              <li><a className="transition-colors hover:text-stamp" href="#download">立即体验</a></li>
              <li><span className="cursor-default">用户协议（即将上线）</span></li>
              <li><span className="cursor-default">隐私政策（即将上线）</span></li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-5 text-[11px] text-ink-faint md:px-8">
            <span>© 2026 TripCove 途湾 · 保留所有权利</span>
            <span className="font-(family-name:--font-mono) tracking-wide">
              粤ICP备XXXXXXXX号（备案后替换）
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
