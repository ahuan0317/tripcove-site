"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { FAQS } from "@/data/faqs";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHead
          no="06"
          kicker="FAQ"
          title={
            <>
              出发前，<span className="text-stamp">先问清楚</span>
            </>
          }
        />
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={0.05 * i}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-stamp/35 bg-cream shadow-[var(--shadow-card)]"
                      : "border-line bg-cream/70"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold leading-snug text-ink">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`grid size-7 shrink-0 place-items-center rounded-full text-sm ${
                        isOpen
                          ? "bg-[linear-gradient(135deg,#e0594a,#b83a2e)] text-white shadow-[0_3px_8px_rgba(184,58,46,0.28)]"
                          : "bg-paper2 text-ink-soft"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="dash-line mx-6" />
                        <p className="px-6 py-5 text-[13.5px] leading-[1.9] text-ink-soft">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
