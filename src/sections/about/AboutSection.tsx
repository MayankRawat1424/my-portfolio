"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import SectionShell from "@/components/layout/SectionShell";
import { ABOUT, ABOUT_SECTIONS, ABOUT_SECTION_IDS } from "@/data/about";
import { PHOTOS } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import AboutNav from "./AboutNav";
import CertificationCard from "./CertificationCard";
import EducationCard from "./EducationCard";
import ExperienceItem from "./ExperienceItem";
import SkillList from "./SkillList";

const CONTENT: Record<string, ReactNode> = {
  experience: (
    <div className="space-y-12">
      {ABOUT.experience.map((entry) => (
        <ExperienceItem key={entry.company} entry={entry} />
      ))}
    </div>
  ),
  certifications: (
    <div className="space-y-4">
      {ABOUT.certifications.map((entry) => (
        <CertificationCard key={entry.title} entry={entry} />
      ))}
    </div>
  ),
  skills: (
    <div className="space-y-8">
      {ABOUT.hardSkills.map((group) => (
        <SkillList
          key={group.title}
          title={group.title}
          skills={group.skills}
          color={group.color}
        />
      ))}
    </div>
  ),
  education: (
    <div className="space-y-4">
      {ABOUT.education.map((entry) => (
        <EducationCard key={entry.degree} entry={entry} />
      ))}
    </div>
  ),
  "about-me": (
    <div className="space-y-8">
      <div className="space-y-4 text-lg leading-relaxed tracking-wide">
        {ABOUT.aboutMe.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="grid grid-cols-3 gap-3 sm:gap-4">
        {PHOTOS.gallery.map((photo) => (
          <li key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 768px) 220px, 33vw"
              className="w-full aspect-[4/5] object-cover rounded-lg border border-line transition-transform duration-300 hover:scale-[1.03]"
            />
          </li>
        ))}
      </ul>
    </div>
  ),
};

export default function AboutSection() {
  const [activeId, setActiveId] = useActiveSection(ABOUT_SECTION_IDS);

  return (
    <SectionShell id="about" title="About">
      <div className="col-span-1 md:col-span-3 max-w-2xl space-y-20">
        {ABOUT_SECTIONS.map(({ id, title }) => (
          <div key={id} id={id} className="scroll-mt-28">
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
            {CONTENT[id]}
          </div>
        ))}
      </div>
      <AboutNav
        sections={ABOUT_SECTIONS}
        activeId={activeId}
        onSelect={setActiveId}
      />
    </SectionShell>
  );
}
