import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Compass, Heart, Lightbulb, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elpis Global School, Biswan" },
      { name: "description", content: "Fifteen years of shaping confident, curious, globally-minded learners in Biswan, Sitapur. Discover our mission, vision and values." },
      { property: "og:title", content: "About Elpis Global School" },
      { property: "og:description", content: "Our mission, vision and the values that guide every Elpis classroom." },
      { property: "og:image", content: "/images/elpis/building.jpg" },
    ],
  }),
  component: About,
});

const values = [
  { icon: Lightbulb, title: "Curiosity", text: "We treat questions as the engine of learning. Wondering aloud is encouraged in every classroom." },
  { icon: Heart, title: "Character", text: "Kindness, integrity and responsibility are taught as deliberately as language and mathematics." },
  { icon: Compass, title: "Global Outlook", text: "Local roots, global horizons. We connect learners to the issues, cultures and ideas of our time." },
  { icon: ShieldCheck, title: "Excellence", text: "Quietly demanding standards in academics, arts and sport — tempered with compassion for every learner." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Elpis"
        title={<>A learning-driven school <span className="italic text-gradient-gold">since 2010.</span></>}
        intro="Elpis Global School was founded with a focused dedication to shaping well-rounded global citizens — thinkers, makers and leaders for India and the world."
        image="/images/elpis/building.jpg"
      />

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Our Mission</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">To shape <span className="italic text-gradient-gold">futuristic leaders</span> through education that integrates intellect, character and creativity.</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Our school promises to provide the finest education to your ward. We are dedicated to making and shaping the future of India by cultivating well-rounded global citizens with a love of learning that lasts a lifetime.
            </p>
            <p>
              Students are like clay; it is our responsibility to help shape them into a finest sculpture. From the earliest grades, our learners gain country-level exposure and insights through inquiry, dialogue and direct experience.
            </p>
            <p>
              We provide practical, joyful education that encourages students to excel across multiple disciplines — academics, sports, music, craft and service — while participating in national and international competitions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Values</div>
            <h2 className="font-display text-4xl lg:text-5xl max-w-2xl">The four virtues at the heart of an Elpis education.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-border">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="bg-card p-10 h-full">
                  <v.icon className="text-gold" size={28} strokeWidth={1.25} />
                  <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src="/images/elpis/event1.jpg" alt="" className="rounded-2xl aspect-[4/3] object-cover w-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Our Vision</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">A campus where every learner discovers a <span className="italic text-gradient-gold">worthy purpose.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We envision Elpis Global School as a place that encourages a learning-driven lifestyle for every member of our community — students, teachers and families alike. Workshops, seminars and training sustain this culture of growth.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
