"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINKS = [
  { href: "#explore", label: "卡片探索" },
  { href: "#ai", label: "AI 行程" },
  { href: "#footprint", label: "足迹版图" },
  { href: "#more", label: "全部功能" },
  { href: "#scenes", label: "使用场景" },
  { href: "#faq", label: "常见问题" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_1px_0_rgba(61,46,34,0.08)]" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8">
        {/* Logo：红圈「途」印章（与小程序「我的」页头像同款） */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="seal size-10 text-[19px] transition-transform duration-300 group-hover:-rotate-12">
            <span className="hand leading-none">途</span>
          </span>
          <span className="leading-none">
            <span className="hand block text-xl font-bold text-ink">途湾</span>
            <span className="block font-(family-name:--font-mono) text-[9px] tracking-[0.24em] text-ink-faint">
              TRIPCOVE
            </span>
          </span>
        </a>

        {/* 桌面端链接 */}
        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-soft transition-colors hover:text-stamp"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="btn-stamp hidden px-5 py-2.5 text-sm sm:inline-block"
          >
            微信体验
          </a>
          {/* 移动端菜单按钮 */}
          <button
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded-xl lg:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* 移动端抽屉 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass overflow-hidden border-t border-line lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[15px] text-ink transition-colors hover:bg-paper2"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="btn-stamp block px-5 py-3 text-center text-sm"
                >
                  微信扫码 · 立即体验
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
