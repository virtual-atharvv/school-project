import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Elpis Global School" },
      { name: "description", content: "A CBSE-aligned curriculum from Pre-Nursery to Grade X. Inquiry, STEM, languages, arts and athletics in every stage." },
      { property: "og:title", content: "Academics at Elpis Global School" },
      { property: "og:description", content: "Curriculum, stages and learning approach at Elpis Global School, Biswan." },
      { property: "og:image", content: "/images/elpis/library.jpg" },
    ],
  }),
  component: Academics,
});

const stages = [
  {
    grades: "Pre-Nursery — Grade II",
    title: "Foundational Years",
    img: "/images/elpis/event2.jpg",
    bullets: ["Play-based discovery", "Phonics & early numeracy", "Music, movement, art", "Social-emotional foundations"],
  },
  {
    grades: "Grade III — V",
    title: "Primary Years",
    img: "/images/elpis/paper.jpg",
    bullets: ["Inquiry across subjects", "Daily reading and writing", "Computing & coding basics", "Sport & creative arts"],
  },
  {
    grades: "Grade VI — VIII",
    title: "Middle Years",
    img: "/images/elpis/lab2.jpg",
    bullets: ["Specialist subject teachers", "Lab-based science", "Project & research work", "Leadership & service"],
  },
  {
    grades: "Grade IX — X",
    title: "Secondary",
    img: "/images/elpis/library.jpg",
    bullets: ["CBSE board preparation", "Mentoring & guidance", "Career exposure", "Olympiad coaching"],
  },
];

function Academics() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title={<>A curriculum that <span className="italic text-gradient-gold">grows</span> with every child.</>}
        intro="From the first wonder-filled day of pre-nursery to the focus of the board years, an Elpis education is intentionally structured — and joyfully delivered."
        image="/images/elpis/library.jpg"
      />

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-24">
          {stages.map((s, i) => (
            <Reveal key={s.title}>
              <div className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/10]">
                    <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-3">{s.grades}</div>
                  <h2 className="font-display text-4xl lg:text-5xl">{s.title}</h2>
                  <ul className="mt-8 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1 w-6 bg-gradient-gold flex-shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display text-4xl lg:text-5xl max-w-3xl mx-auto">Curious to walk our halls?</h2>
            <Link to="/admissions" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-ink shadow-gold">
              Begin admissions <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
