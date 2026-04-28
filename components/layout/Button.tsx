import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function Button({ children, href, onClick, className = "", disabled = false }: ButtonProps) {
  const Comp: any = href && !disabled ? "a" : "button";
  return (
    <Comp
      href={disabled ? undefined : href}
      onClick={disabled ? undefined : onClick}
      disabled={Comp === "button" ? disabled : undefined}
      aria-disabled={disabled || undefined}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide shadow-sm ring-1 ring-white/15 transition backdrop-blur-md ${
        disabled
          ? "cursor-not-allowed bg-white/5 text-neutral-300/70"
          : "bg-white/10 text-white hover:bg-white/15"
      } ${className}`.trim()}
    >
      {children}
    </Comp>
  );
}
