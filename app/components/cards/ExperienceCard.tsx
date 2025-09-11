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
      className="border-2 p-4 rounded-xl shadow-lg text-[10px]"
      style={{
        backgroundColor: "var(--color-bg-card)",
        color: "var(--color-text)",
        borderColor: "var(--color-primary)",
      }}
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
