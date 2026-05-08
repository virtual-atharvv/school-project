import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Bus, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elpis Global School, Biswan" },
      { name: "description", content: "Visit, call or write to Elpis Global School, Biswan, Sitapur. We'd love to hear from you." },
      { property: "og:title", content: "Contact Elpis Global School" },
      { property: "og:image", content: "/images/elpis/building.jpg" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>We'd love to <span className="italic text-gradient-gold">hear from you.</span></>}
        intro="Visit our campus in Biswan, write us a note, or schedule a call. Our team replies within one working day."
        image="/images/elpis/building.jpg"
      />

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-3">Campus</div>
              <div className="font-display text-3xl">Elpis Global School</div>
            </div>
            {[
              { icon: MapPin, title: "Address", lines: ["Near Mansharam Baba Mandir", "Amar Nagar, Biswan", "Sitapur, Uttar Pradesh — 261201"] },
              { icon: Phone, title: "Telephone", lines: ["9005723945", "+91 9005331800"] },
              { icon: Bus, title: "Transport", lines: ["+91 7607897990"] },
              { icon: Mail, title: "Email", lines: ["elpisglobal@gmail.com"] },
            ].map((c) => (
              <div key={c.title} className="flex gap-5 border-t border-border pt-6">
                <c.icon className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.title}</div>
                  <div className="mt-1 space-y-0.5 text-foreground">
                    {c.lines.map((l) => <div key={l}>{l}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 shadow-deep">
              {sent ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="mx-auto text-gold mb-4" size={40} />
                  <div className="font-display text-3xl">Message received</div>
                  <p className="mt-3 text-muted-foreground">Thank you for reaching out. Our team will respond shortly.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold-soft">Send a message</div>
                  <h2 className="font-display text-3xl">How can we help?</h2>
                  <div className="grid sm:grid-cols-2 gap-6 pt-2">
                    <Field label="Your name" required />
                    <Field label="Email" type="email" required />
                    <Field label="Mobile" type="tel" />
                    <Field label="Subject" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                    <textarea required rows={5} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground resize-none" />
                  </div>
                  <button className="rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-ink shadow-gold">
                    Send message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input required={required} type={type} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground" />
    </div>
  );
}
