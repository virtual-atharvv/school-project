import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Music, Trophy, Palette, Mic2, Globe, Leaf } from "lucide-react";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life — Elpis Global School" },
      { name: "description", content: "Sports, performing arts, clubs, service and celebration. The vibrant life beyond the classroom at Elpis Global School." },
      { property: "og:title", content: "Student Life at Elpis" },
      { property: "og:description", content: "A campus alive with possibility — sport, art, music, leadership and service." },
      { property: "og:image", content: "/images/elpis/athletics.jpg" },
    ],
  }),
  component: StudentLife,
});

const activities = [
  { icon: Trophy, title: "Athletics", text: "Annual sports day, athletics, cricket, volleyball, kabaddi and more." },
  { icon: Music, title: "Music", text: "Vocal, instrumental and ensemble performances throughout the year." },
  { icon: Palette, title: "Visual Arts", text: "Drawing, painting, sculpture, craft and design across age groups." },
  { icon: Mic2, title: "Theatre & Dance", text: "Sparsh — our annual day — celebrates classical, folk and contemporary forms." },
  { icon: Globe, title: "Model UN & Debate", text: "Argument, dialogue and global affairs prepare confident communicators." },
  { icon: Leaf, title: "Eco & Service Clubs", text: "Sustainability, community service and student-led initiatives." },
];

function StudentLife() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title={<>Beyond the classroom, a <span className="italic text-gradient-gold">life of possibility.</span></>}
        intro="At Elpis, every learner finds a stage. Sports, music, performing arts, debate, service — chosen daily, lived joyfully."
        image="/images/elpis/athletics.jpg"
      />

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-border">
            {activities.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="bg-card p-10 h-full group">
                  <a.icon className="text-gold transition-transform group-hover:scale-110" size={28} strokeWidth={1.25} />
                  <div className="mt-6 font-display text-2xl">{a.title}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src="/images/elpis/event2.jpg" alt="" className="rounded-2xl aspect-[4/5] object-cover w-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Sparsh — The Annual Day</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">A celebration of every voice, every gift, every <span className="italic text-gradient-gold">step taken.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Sparsh is the cinematic culmination of a year's craft — classical and folk dance, music ensembles, theatre and original choreography. Families fill the grounds; students fill the stage.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
