import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative h-[70svh] min-h-[520px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 h-full flex flex-col justify-end pb-20">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-5">{eyebrow}</div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl max-w-4xl leading-[1.02]">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
