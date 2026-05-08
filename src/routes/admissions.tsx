import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026 — 27 · Elpis Global School" },
      { name: "description", content: "Apply for admission to Elpis Global School, Biswan. Pre-Nursery through Grade X. Open seats for the 2026-27 academic year." },
      { property: "og:title", content: "Admissions — Elpis Global School" },
      { property: "og:description", content: "Begin your application for the 2026-27 academic year." },
      { property: "og:image", content: "/images/elpis/award.jpg" },
    ],
  }),
  component: Admissions,
});

const steps = [
  { n: "01", t: "Enquire", d: "Submit a quick form or call our admissions desk. We'll share the prospectus and schedule a campus visit." },
  { n: "02", t: "Visit & Interact", d: "Tour the campus, meet faculty and the principal. We'll get to know your child and your family." },
  { n: "03", t: "Application", d: "Complete the admission form and submit supporting documents (birth certificate, previous report card, address proof)." },
  { n: "04", t: "Assessment", d: "Age-appropriate interaction or assessment. For older grades, a brief written and oral evaluation." },
  { n: "05", t: "Offer & Enrolment", d: "On acceptance, complete enrolment formalities, fee payment and uniform fitting. Welcome to Elpis." },
];

function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Admissions 2026 — 27"
        title={<>Begin a conversation about your <span className="italic text-gradient-gold">child's future.</span></>}
        intro="Open seats across all stages. Our admissions team will guide you through every step — warmly, transparently, at your pace."
        image="/images/elpis/award.jpg"
      />

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-3">The Five Steps</div>
              <h2 className="font-display text-4xl lg:text-5xl">A clear, considered process.</h2>
            </Reveal>
            <ol className="space-y-8">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <li className="grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-8">
                    <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
                    <div>
                      <h3 className="font-display text-2xl">{s.t}</h3>
                      <p className="mt-2 text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-deep">
              <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-3">Enquire Now</div>
              <h3 className="font-display text-3xl">Request the prospectus</h3>
              {submitted ? (
                <div className="mt-8 rounded-xl border border-gold/40 bg-secondary p-6 text-center">
                  <CheckCircle2 className="mx-auto text-gold mb-3" />
                  <div className="font-display text-xl">Thank you</div>
                  <p className="mt-2 text-sm text-muted-foreground">Our admissions team will be in touch within one working day.</p>
                </div>
              ) : (
                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  {[
                    { label: "Parent / Guardian name", type: "text", name: "name" },
                    { label: "Mobile", type: "tel", name: "mobile" },
                    { label: "Email", type: "email", name: "email" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{f.label}</label>
                      <input required type={f.type} name={f.name} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground" />
                    </div>
                  ))}
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Grade interested in</label>
                    <select required className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground">
                      <option className="bg-card">Pre-Nursery</option>
                      <option className="bg-card">Nursery — KG</option>
                      <option className="bg-card">Grade I — V</option>
                      <option className="bg-card">Grade VI — VIII</option>
                      <option className="bg-card">Grade IX — X</option>
                    </select>
                  </div>
                  <button className="w-full rounded-full bg-gradient-gold py-3.5 text-sm font-medium text-ink shadow-gold">
                    Submit enquiry
                  </button>
                  <p className="text-[10px] text-muted-foreground text-center">By submitting, you agree to be contacted by Elpis Global School.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
