"use client";

import React, { useEffect, useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Button({
  children,
  href = "#",
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const Comp: any = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide shadow-sm ring-1 ring-white/15 hover:ring-white/25 transition bg-white/10 backdrop-blur-md text-white hover:bg-white/15"
    >
      {children}
    </Comp>
  );
}

function PropertyCard({
  title,
  location,
  price,
  imageUrl,
}: {
  title: string;
  location: string;
  price: string;
  imageUrl: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-5">
        <div className="text-neutral-200 text-lg font-medium">{title}</div>
        <div className="text-neutral-300/80 text-sm mt-1">{location}</div>
        <div className="mt-3 text-amber-300 font-semibold">{price}</div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-neutral-200/70">{label}</div>
    </div>
  );
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Поставь сюда своё изображение (можно /hero.jpg если ты загрузил в public)
  const heroImageUrl = "/hero.jpg"; // или "YOUR_WARSAW_IMAGE_URL"

  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;
      if (window.scrollY > 10)
        header.classList.add
