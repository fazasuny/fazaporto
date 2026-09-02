import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const NAV_ITEMS = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Portofolio", label: "Portofolio" },
  { href: "#Contact", label: "Contact" },
];

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.getAttribute("data-theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_ITEMS.map((item) => {
        const section = document.querySelector(item.href);
        if (!section) return null;
        return {
          id: item.href.slice(1),
          offset: section.offsetTop - 200,
          height: section.offsetHeight,
        };
      }).filter(Boolean);

      const pos = window.scrollY;
      const active = sections.find(
        (s) => pos >= s.offset && pos < s.offset + s.height
      );
      if (active) setActiveSection(active.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const section = document.querySelector(href);
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4">
      <div
        className={`mt-4 flex w-full max-w-5xl items-center rounded-full border bg-[var(--surface)]/85 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
        style={{
          borderColor: "var(--line)",
          boxShadow: scrolled ? "0 6px 24px -12px rgba(0,0,0,0.25)" : "none",
        }}
      >
        {/* Brand */}
        <a
          href="#Home"
          onClick={(e) => scrollTo(e, "#Home")}
          className="flex flex-1 items-center pl-5"
          aria-label="Home"
        >
          <span
            className="text-[17px] font-bold tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            FAZA<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                aria-current={isActive ? "true" : undefined}
                className="relative px-3.5 py-2 text-[14px] font-medium transition-colors duration-200 hover:opacity-100"
                style={{
                  color: isActive ? "var(--ink)" : "var(--muted)",
                  opacity: isActive ? 1 : 0.9,
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full transition-colors duration-200"
                  style={{
                    backgroundColor: isActive ? "var(--accent)" : "transparent",
                  }}
                />
              </a>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex flex-1 items-center justify-end gap-1 pr-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 hover:opacity-100"
            style={{ color: "var(--ink)", opacity: 0.9 }}
          >
            {theme === "dark" ? (
              <Sun className="h-[18px] w-[18px]" />
            ) : (
              <Moon className="h-[18px] w-[18px]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-200 md:hidden"
            style={{ color: "var(--ink)", opacity: 0.9 }}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`fixed inset-x-4 top-[68px] z-40 transition-all duration-200 md:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="overflow-hidden rounded-2xl border bg-[var(--surface)] p-2"
          style={{ borderColor: "var(--line)", boxShadow: "0 12px 30px -18px rgba(0,0,0,0.35)" }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                aria-current={isActive ? "true" : undefined}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors duration-150"
                style={{
                  color: isActive ? "var(--accent)" : "var(--ink-soft)",
                  backgroundColor: isActive ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "transparent",
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
