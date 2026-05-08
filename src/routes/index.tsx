import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Award, BookOpen, FlaskConical, Globe2, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elpis Global School · Biswan — Shaping Global Citizens" },
      { name: "description", content: "A learning-driven institution in Biswan, Sitapur. CBSE-aligned curriculum, world-class infrastructure, and a community devoted to character, curiosity and global citizenship." },
      { property: "og:title", content: "Elpis Global School · Biswan" },
      { property: "og:description", content: "Shaping confident, curious, globally-minded learners since 2010." },
      { property: "og:image", content: "/images/elpis/building.jpg" },
    ],
  }),
  component: Home,
});

const galleryImages = [
  "/images/elpis/flash1.jpg",
  "/images/elpis/event1.jpg",
  "/images/elpis/award.jpg",
  "/images/elpis/lab1.jpg",
  "/images/elpis/library.jpg",
  "/images/elpis/computer-lab.jpg",
  "/images/elpis/athletics.jpg",
  "/images/elpis/event2.jpg",
];

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Pillars />
      <PrincipalNote />
      <Programs />
      <Numbers />
      <GalleryStrip />
      <CTA />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/images/elpis/flash1.jpg"
          alt="Elpis Global School students at the annual function"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 h-full flex flex-col justify-end pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> Admissions 2026 — 27 Open
          </div>
          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95]">
            Where minds are <span className="italic text-gradient-gold">awakened</span>,<br />
            and futures are <span className="italic text-gradient-gold">authored.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Elpis Global School, Biswan — a fifteen-year journey of academic excellence,
            character formation and joyful learning, from our hexagonal halls to the world stage.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/admissions"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-ink shadow-gold transition-all hover:shadow-[0_30px_80px_-20px_oklch(0.78_0.135_80/0.7)]"
            >
              Begin your application
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-background/40 backdrop-blur px-7 py-4 text-sm hover:border-gold/60 transition-colors"
            >
              Discover Elpis
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <span className="inline-block animate-bounce">↓</span>  Scroll
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["CBSE Curriculum", "Smart Classrooms", "STEM Labs", "Performing Arts", "National Sports", "15 Years of Excellence", "Global Outlook"];
  return (
    <section className="border-y border-border py-8 overflow-hidden marquee-mask">
      <div className="flex gap-16 animate-scroll-x whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl text-muted-foreground">
            {t} <span className="text-gold mx-8">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

const pillars = [
  { icon: BookOpen, title: "Rigorous Academics", text: "A CBSE-aligned curriculum delivered by educators who awaken intellectual curiosity in every learner." },
  { icon: FlaskConical, title: "Inquiry & STEM", text: "Modern science and computer laboratories where students build, test and discover, hands-on." },
  { icon: Globe2, title: "Global Citizenship", text: "We connect classroom learning to the wider world — culture, ethics, sustainability and service." },
  { icon: Sparkles, title: "Arts & Sport", text: "Daily expression through music, dance, theatre and athletics — character formed in motion." },
];

function Pillars() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Our Philosophy</div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
                Education that integrates <span className="italic text-gradient-gold">mind, body and soul.</span>
              </h2>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm text-gold-soft hover:text-gold">
              About Elpis <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-px bg-border lg:grid-cols-4 rounded-2xl overflow-hidden border border-border">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group relative h-full bg-card p-10 transition-colors hover:bg-secondary">
                <p.icon className="text-gold" size={32} strokeWidth={1.25} />
                <h3 className="mt-8 font-display text-2xl">{p.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipalNote() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-deep">
            <img src="/images/elpis/principal.jpg" alt="Mrs. Deepa Chandra, Principal" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink to-transparent">
              <div className="font-display text-xl">Mrs. Deepa Chandra</div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold-soft">Principal</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">From the Principal</div>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            "Education is a tool to facilitate <span className="italic text-gradient-gold">lifelong learning</span> and the harmonious integration of mind, body and soul."
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            At Elpis we provide ample opportunities to learn within and beyond the classroom, while
            inculcating values, respect for culture, and an emphasis on moral education, art and
            sport. The interplay of these subjects broadens our students' horizons and prepares
            them for the global community.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I warmly invite you to visit our campus in Biswan and to begin a conversation about
            your child's education with us.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm text-gold-soft hover:text-gold">
            Read the full message <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const programs = [
  { title: "Foundational Years", grades: "Pre-Nursery — Grade II", img: "/images/elpis/event2.jpg", text: "Play-based discovery, language and number sense, social-emotional foundations." },
  { title: "Primary Years", grades: "Grade III — V", img: "/images/elpis/paper.jpg", text: "Curiosity-driven inquiry across subjects, with daily arts, sport and computing." },
  { title: "Middle Years", grades: "Grade VI — VIII", img: "/images/elpis/lab2.jpg", text: "Specialised teachers, lab-based science, project work and leadership opportunities." },
  { title: "Secondary", grades: "Grade IX — X", img: "/images/elpis/library.jpg", text: "CBSE board readiness with mentoring, careers exposure and competition coaching." },
];

function Programs() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Academic Stages</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            A curriculum that <span className="italic text-gradient-gold">grows</span> with every child.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Link to="/academics" className="group relative block aspect-[3/4] overflow-hidden rounded-xl">
                <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">{p.grades}</div>
                  <div className="mt-2 font-display text-2xl">{p.title}</div>
                  <p className="mt-3 text-xs text-muted-foreground line-clamp-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">{p.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { v: "15+", l: "Years of excellence" },
  { v: "1,200+", l: "Students mentored" },
  { v: "60+", l: "Educators & staff" },
  { v: "30+", l: "Co-curricular pursuits" },
];

function Numbers() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-4 gap-12">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08}>
            <div className="font-display text-6xl lg:text-7xl text-gradient-gold">{s.v}</div>
            <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function GalleryStrip() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-12 flex items-end justify-between flex-wrap gap-4">
        <Reveal>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Life at Elpis</div>
            <h2 className="font-display text-4xl sm:text-5xl">A campus alive with possibility.</h2>
          </div>
        </Reveal>
        <Link to="/gallery" className="text-sm text-gold-soft hover:text-gold inline-flex items-center gap-2">View full gallery <ArrowUpRight size={16} /></Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-3 lg:px-6">
        {galleryImages.map((src, i) => (
          <Reveal key={src} delay={i * 0.04}>
            <div className={`relative overflow-hidden rounded-xl ${i % 5 === 0 ? "aspect-[4/5]" : i % 3 === 0 ? "aspect-[5/4]" : "aspect-square"}`}>
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-110" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 grain">
          <img src="/images/elpis/building.jpg" alt="Elpis Global School building" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/70 to-ink/90" />
          <div className="relative px-8 py-20 lg:py-32 lg:px-24 text-center">
            <Award className="mx-auto text-gold mb-6" size={36} strokeWidth={1.25} />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl max-w-4xl mx-auto leading-tight">
              Begin a conversation about <span className="italic text-gradient-gold">your child's future.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Schedule a campus visit, meet our faculty, and see why families across Sitapur trust Elpis Global School.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/admissions" className="rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-ink shadow-gold inline-flex items-center gap-2">
                <Users size={16} /> Apply for 2026 — 27
              </Link>
              <Link to="/contact" className="rounded-full border border-border px-7 py-4 text-sm hover:border-gold/60">
                Book a campus visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
