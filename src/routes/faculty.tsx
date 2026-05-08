import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty & Leadership — Elpis Global School" },
      { name: "description", content: "Meet the educators and leadership of Elpis Global School, Biswan. Experienced, qualified, and devoted to every learner." },
      { property: "og:title", content: "Faculty — Elpis Global School" },
      { property: "og:description", content: "The people behind an Elpis education." },
      { property: "og:image", content: "/images/elpis/principal.jpg" },
    ],
  }),
  component: Faculty,
});

const team = [
  { name: "Mrs. Deepa Chandra", role: "Principal", img: "/images/elpis/principal.jpg",
    quote: "Education facilitates lifelong learning and the harmonious integration of mind, body and soul." },
];

const departments = [
  { name: "Languages & Humanities", count: "12 educators" },
  { name: "Mathematics", count: "8 educators" },
  { name: "Sciences & STEM", count: "10 educators" },
  { name: "Computer Science", count: "5 educators" },
  { name: "Arts & Music", count: "7 educators" },
  { name: "Physical Education & Sport", count: "6 coaches" },
];

function Faculty() {
  return (
    <>
      <PageHeader
        eyebrow="People of Elpis"
        title={<>Educators who awaken <span className="italic text-gradient-gold">curiosity</span> in every learner.</>}
        intro="Our faculty bring depth of subject expertise, warmth in the classroom, and a shared commitment to every child's growth."
        image="/images/elpis/principal.jpg"
      />

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-10">
            {team.map((m) => (
              <Reveal key={m.name}>
                <div className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <img src={m.img} alt={m.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                  </div>
                  <div className="mt-6">
                    <div className="font-display text-2xl">{m.name}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mt-1">{m.role}</div>
                    <p className="mt-4 text-sm text-muted-foreground italic">"{m.quote}"</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Departments</div>
            <h2 className="font-display text-4xl lg:text-5xl max-w-2xl">A breadth of expertise across the curriculum.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-border">
            {departments.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.05}>
                <div className="bg-card p-8 h-full">
                  <div className="font-display text-xl">{d.name}</div>
                  <div className="text-sm text-muted-foreground mt-2">{d.count}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
