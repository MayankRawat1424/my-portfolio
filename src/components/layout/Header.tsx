import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS, SITE } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
      <div className="flex items-center justify-between gap-6 max-w-7xl px-4 py-5 mx-auto">
        <div className="flex items-baseline gap-6 min-w-0">
          <p className="font-bold font-serif shrink-0">{SITE.handle}</p>
          <p className="hidden lg:block text-sm text-muted truncate">
            {SITE.role}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <nav aria-label="Primary">
            <ul className="flex gap-6 text-sm">
              {NAV_LINKS.map(({ label, href, hideOnMobile }) => (
                <li key={href} className={hideOnMobile ? "hidden sm:block" : ""}>
                  <a
                    href={href}
                    className="text-muted transition-colors hover:text-fg"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
