import React from "react";

type ChatButtonProps = {
  label: string;
  href: string;
  gradient: string;
  icon: (className: string) => React.ReactNode;
};

export function ChatButton({ label, href, gradient, icon }: ChatButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`animated-block group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r ${gradient} px-5 py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/20 transition hover:scale-[1.02]`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
          {icon("h-5 w-5")}
        </span>
        <div className="text-left">
          <div className="text-xs uppercase tracking-[0.14em] text-white/80">Чат</div>
          <div className="text-base font-semibold">{label}</div>
        </div>
      </div>
      <span className="text-lg font-semibold transition group-hover:translate-x-1">→</span>
    </a>
  );
}
