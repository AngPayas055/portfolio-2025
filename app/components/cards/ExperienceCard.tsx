import React from "react";

type ExperienceProps = {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
};

export function ExperienceCard({
  period,
  role,
  company,
  description,
  tech,
}: ExperienceProps) {
  return (
    <div
      className="text-[var(--color-text)] border-2 border-transparent p-4 rounded-xl shadow-lg text-[10px] transition-colors duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-bg-card)]"
    >
      <h2 className="font-bold">
        {role} • {company}
      </h2>
      <p className="italic opacity-80 my-4">{period}</p>
      <p className="my-5 leading-relaxed">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded-lg"
            style={{
              backgroundColor: "var(--color-btn-primary)",
              color: "var(--color-bg)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
