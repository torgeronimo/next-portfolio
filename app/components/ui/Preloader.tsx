"use client";
 
import { useEffect, useRef } from "react";
import gsap from "gsap";
 
export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const nameFirstRef = useRef<HTMLSpanElement>(null);
  const nameLastRef = useRef<HTMLSpanElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const barTrackRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const bottomLeftRef = useRef<HTMLSpanElement>(null);
  const bottomRightRef = useRef<HTMLSpanElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.body.style.overflow = "hidden";
 
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
        },
      });
 
      // ── INTRO ──────────────────────────────────────────────
 
      tl.fromTo(
        dotsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        0
      );
 
      tl.fromTo(
        lineLeftRef.current,
        { scaleX: 0, transformOrigin: "right center" },
        { scaleX: 1, duration: 0.7, ease: "power3.out" },
        0.2
      );
      tl.fromTo(
        lineRightRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.7, ease: "power3.out" },
        0.2
      );
 
      tl.fromTo(
        roleRef.current,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
        0.35
      );
 
      tl.fromTo(
        nameFirstRef.current,
        { xPercent: -60, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.75, ease: "power4.out" },
        0.5
      );
 
      tl.fromTo(
        nameLastRef.current,
        { xPercent: 60, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.75, ease: "power4.out" },
        0.55
      );
 
      tl.fromTo(
        [bottomLeftRef.current, bottomRightRef.current],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 },
        0.65
      );
 
      tl.fromTo(
        barTrackRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.5, ease: "power2.out" },
        0.7
      );
 
      // ── COUNTER + FILL ─────────────────────────────────────
 
      const counterObj = { val: 0 };
 
      tl.to(
        counterObj,
        {
          val: 100,
          duration: 2,
          ease: "power1.inOut",
          onUpdate: () => {
            const v = Math.round(counterObj.val);
            if (counterRef.current)
              counterRef.current.textContent = String(v).padStart(3, "0");
          },
        },
        0.9
      );
 
      tl.fromTo(
        barFillRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 2, ease: "power1.inOut" },
        0.9
      );
 
      tl.to(
        [nameFirstRef.current, nameLastRef.current],
        {
          scale: 1.018,
          duration: 1.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1,
        },
        1.0
      );

      // ── EXIT ───────────────────────────────────────────────

      tl.to(
        lineLeftRef.current,
        { scaleX: 0, transformOrigin: "right center", duration: 0.4, ease: "power3.in" },
        3.1
      );
      tl.to(
        lineRightRef.current,
        { scaleX: 0, transformOrigin: "left center", duration: 0.4, ease: "power3.in" },
        3.1
      );

      tl.to(
        [
          nameFirstRef.current,
          nameLastRef.current,
          roleRef.current,
          barTrackRef.current,
          bottomLeftRef.current,
          bottomRightRef.current,
        ],
        {
          opacity: 0,
          y: -18,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.04,
        },
        3.15
      );

      tl.to(
        topPanelRef.current,
        { yPercent: -100, duration: 0.8, ease: "power4.inOut" },
        3.55
      );
      tl.to(
        bottomPanelRef.current,
        { yPercent: 100, duration: 0.8, ease: "power4.inOut" },
        3.55
      );

      tl.set(overlayRef.current, { display: "none" }, "+=0.05");
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999] pointer-events-auto">

      {/* Top split panel */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#1A1814] z-10"
      />

      {/* Bottom split panel */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#1A1814] z-10"
      />

      {/* Dot grid texture */}
      <div
        ref={dotsRef}
        aria-hidden="true"
        className="absolute inset-0 z-20 pointer-events-none opacity-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,243,238,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Center stage */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">

        {/* Expanding rule lines */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-0 right-0 flex items-center pointer-events-none"
        >
          <div
            ref={lineLeftRef}
            className="h-px bg-white/10"
            style={{ width: "calc(50% - 220px)" }}
          />
          <div className="w-[440px] shrink-0" />
          <div
            ref={lineRightRef}
            className="h-px bg-white/10"
            style={{ width: "calc(50% - 220px)" }}
          />
        </div>
 
        {/* Role label — overflow hidden for clip reveal */}
        <div className="overflow-hidden mb-3.5">
          <p
            ref={roleRef}
            className="font-mono text-[0.63rem] tracking-[0.2em] uppercase text-white/30 m-0 opacity-0"
          >
            Web Developer · Portfolio
          </p>
        </div>
 
        {/* Name */}
        <div className="flex flex-col items-center mb-11">
          <span
            ref={nameFirstRef}
            className="font-serif text-[clamp(3rem,9vw,6rem)] leading-none tracking-[-0.03em] text-[#F5F3EE] opacity-0 block"
          >
            Victor
          </span>
          <span
            ref={nameLastRef}
            className="font-serif italic text-[clamp(3rem,9vw,6rem)] leading-none tracking-[-0.03em] text-[#F5F3EE]/40 opacity-0 block"
          >
            Geronimo
          </span>
        </div>
 
        {/* Progress bar + counter */}
        <div className="flex flex-col items-center gap-2.5">
          <div
            ref={barTrackRef}
            className="w-40 h-px bg-white/10 relative overflow-hidden"
          >
            <div
              ref={barFillRef}
              className="absolute inset-0 bg-[#F5F3EE] origin-left scale-x-0"
            />
          </div>
          <span
            ref={counterRef}
            className="font-mono text-[0.62rem] tracking-[0.1em] text-white/20"
          >
            000
          </span>
        </div>
      </div>
 
      {/* Bottom meta */}
      <div className="absolute bottom-10 left-12 right-12 z-40 flex justify-between font-mono text-[0.6rem] tracking-[0.1em] uppercase text-white/[0.18]">
        <span ref={bottomLeftRef} className="opacity-0">Calamba, PH</span>
        <span ref={bottomRightRef} className="opacity-0">© 2026</span>
      </div>
    </div>
  );
}