import type { ReactNode } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { SOCIAL_LINKS } from "@/data/site";
import type { SocialLink } from "@/types";

const ICONS: Record<SocialLink["icon"], ReactNode> = {
  x: <FaXTwitter />,
  linkedin: <FaLinkedinIn />,
  github: <SiGithub />,
};

export default function SocialLinks() {
  return (
    <ul className="flex justify-center gap-12 text-3xl mb-8">
      {SOCIAL_LINKS.map(({ label, href, icon }) => (
        <li key={icon}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted transition-colors hover:text-fg"
          >
            {ICONS[icon]}
          </a>
        </li>
      ))}
    </ul>
  );
}
