import SocialLinks from "@/components/ui/SocialLinks";
import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-7xl px-4 py-12 mx-auto">
        <SocialLinks />
        <div className="text-sm font-mono text-center text-muted space-y-1">
          <p>
            <b className="text-fg">Mail:</b>{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="underline underline-offset-4 hover:text-fg"
            >
              {SITE.email}
            </a>
          </p>
          <p>
            <b className="text-fg">Location:</b> {SITE.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
