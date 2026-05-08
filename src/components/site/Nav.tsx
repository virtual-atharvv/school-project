import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/faculty", label: "Faculty" },
  { to: "/student-life", label: "Student Life" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
            <span className="font-display text-ink text-lg leading-none">E</span>
          </span>
          <div className="leading-tight">
            <div className="font-display text-base tracking-wide">Elpis Global</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">School · Biswan</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-ink shadow-gold hover:shadow-[0_25px_70px_-15px_oklch(0.78_0.135_80/0.6)] transition-all"
          >
            Apply 2026
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-medium text-ink"
            >
              Apply 2026
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
