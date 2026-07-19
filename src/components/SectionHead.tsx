import Reveal from "./Reveal";

type Props = {
  no: string;
  kicker: string;
  title: React.ReactNode;
  desc?: string;
  note?: string; // 手写体小注
};

/** 手帐风章节标题：◆眉标 + 衬线大标题 + 可选手写注 */
export default function SectionHead({ no, kicker, title, desc, note }: Props) {
  return (
    <Reveal>
      <div className="relative mb-12 md:mb-16">
        <p className="eyebrow mb-4 font-(family-name:--font-mono) text-[11px]">
          {kicker} · {no}
        </p>
        <h2 className="font-(family-name:--font-display) text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.8rem]">
          {title}
        </h2>
        {note && (
          <span className="hand pointer-events-none absolute -top-2 right-0 hidden rotate-3 text-xl text-stamp/70 md:block">
            {note}
          </span>
        )}
        {desc && (
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.9] text-ink-soft">
            {desc}
          </p>
        )}
      </div>
    </Reveal>
  );
}
