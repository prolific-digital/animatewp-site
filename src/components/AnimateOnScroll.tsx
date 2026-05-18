"use client";

import { useRef, type ReactNode, type ElementType, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Preset = "fade-up" | "fade-in" | "fade-up-stagger" | "zoom-in";

type Props = {
  children: ReactNode;
  preset?: Preset;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  staggerSelector?: string;
};

export default function AnimateOnScroll({
  children,
  preset = "fade-up",
  as: Tag = "div",
  className,
  style,
  id,
  delay = 0,
  duration,
  stagger = 0.12,
  start = "top 85%",
  staggerSelector,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const el = ref.current;
      if (!el) return;

      const baseTrigger = {
        trigger: el,
        start,
        toggleActions: "play none none reverse",
      };

      if (preset === "fade-up-stagger" || staggerSelector) {
        const selector = staggerSelector ?? ":scope > *";
        const targets = el.querySelectorAll<HTMLElement>(selector);
        if (targets.length === 0) return;
        gsap.from(targets, {
          opacity: 0,
          y: 32,
          duration: duration ?? 0.9,
          ease: "power2.out",
          stagger,
          delay,
          scrollTrigger: baseTrigger,
        });
        return;
      }

      if (preset === "fade-in") {
        gsap.from(el, {
          opacity: 0,
          duration: duration ?? 1.2,
          ease: "power2.out",
          delay,
          scrollTrigger: baseTrigger,
        });
        return;
      }

      if (preset === "zoom-in") {
        gsap.from(el, {
          opacity: 0,
          scale: 0.96,
          duration: duration ?? 1.1,
          ease: "power2.out",
          delay,
          scrollTrigger: baseTrigger,
        });
        return;
      }

      // default fade-up
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: duration ?? 1,
        ease: "power2.out",
        delay,
        scrollTrigger: baseTrigger,
      });
    },
    { scope: ref }
  );

  const TagComp = Tag as ElementType;
  return (
    <TagComp
      ref={ref as React.Ref<HTMLElement>}
      id={id}
      className={className}
      style={style}
    >
      {children}
    </TagComp>
  );
}
