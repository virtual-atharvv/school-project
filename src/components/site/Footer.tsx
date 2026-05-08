import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Bus } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold">
              <span className="font-display text-ink text-lg">E</span>
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg">Elpis Global School</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Est. Shaping Futures · 15 Years</div>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            A learning-driven institution where curiosity, character and global citizenship are
            cultivated together. Welcoming families across Sitapur and beyond.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            {[
              ["/about", "About"],
              ["/academics", "Academics"],
              ["/admissions", "Admissions"],
              ["/faculty", "Faculty"],
              ["/student-life", "Student Life"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mb-5">Contact</div>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-gold" /> Near Mansharam Baba Mandir, Amar Nagar, Biswan, Sitapur, UP 261201</li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-gold" /> 9005723945 · +91 9005331800</li>
            <li className="flex gap-3"><Bus size={16} className="mt-0.5 text-gold" /> Transport: +91 7607897990</li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-gold" /> elpisglobal@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Elpis Global School. All rights reserved.</div>
          <div className="font-display tracking-wide">Optimas · Veritas · Communitas</div>
        </div>
      </div>
    </footer>
  );
}
