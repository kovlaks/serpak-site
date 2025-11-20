import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export function Button({ children, href, onClick, className = "" }: ButtonProps) {
  const Comp: any = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide shadow-sm ring-1 ring-white/15 transition bg-white/10 backdrop-blur-md text-white hover:bg-white/15 ${className}`.trim()}
    >
      {children}
    </Comp>
  );
}
