import type { CSSProperties } from "react";

interface SkillListProps {
  title: string;
  skills: string[];
  /** Tag colour for the whole group. */
  color: string;
  className?: string;
}

export default function SkillList({
  title,
  skills,
  color,
  className = "",
}: SkillListProps) {
  return (
    <div className={className}>
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="skill-tag px-3 py-2 rounded-md text-sm flex items-center justify-center text-center font-mono shadow-sm transition-transform duration-200 hover:scale-105"
            style={{ "--tag": color } as CSSProperties}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
