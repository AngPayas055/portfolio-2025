import Image from "next/image";

type ProjectProps = {
  title: string;
  link: string;
  image: string;
  description: string;
  tech: string[];
};

export function ProjectCard({
  title,
  link,
  image,
  description,
  tech,
}: ProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-2 p-4 rounded-xl shadow-lg text-[10px] transition hover:scale-[1.02]"
      style={{
        backgroundColor: "var(--color-bg-card)",
        color: "var(--color-text)",
        borderColor: "var(--color-primary)",
      }}
    >
      <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain bg-black"
        />
      </div>
      <h2 className="font-bold flex items-center justify-between">
        {title}
        <span className="text-xs opacity-70">↗</span>
      </h2>
      <p className="my-4 leading-relaxed">{description}</p>
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
    </a>
  );
}
