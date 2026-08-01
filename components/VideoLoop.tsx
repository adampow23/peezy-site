"use client";
import { useEffect, useRef } from "react";

/** Autoplaying product loop. Poster paints first (it is the LCP element, never the
 *  video). IntersectionObserver pauses off-screen; reduced-motion users get the
 *  poster only. DROP-IN: place {name}.mp4 / {name}.webm / {name}-poster.jpg in
 *  /public/media — no code change needed. */
export default function VideoLoop({ name, label }: { name: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.5 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="metadata"
      poster={`/media/${name}-poster.jpg`}
      aria-label={label}
      width={720}
      height={1560}
      className="block h-full w-full object-cover"
    >
      <source src={`/media/${name}.webm`} type="video/webm" />
      <source src={`/media/${name}.mp4`} type="video/mp4" />
    </video>
  );
}
