import { experiences } from "@/app/data/experiences";
import { ExperienceCard } from "@/app/components/cards/ExperienceCard";

export function ExperienceList() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </div>
  );
}
