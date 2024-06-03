import Link from "next/link";
import Arrow from "@/public/assets/shared/desktop/icon-right-arrow.svg";
type Props = { href: string; title: string; className: string };

const ProjectLink: React.FC<Props> = ({ href, title, className }) => {
  return (
    <Link
      href={href}
      className={`rounded-15 group relative  flex h-[250px] flex-col items-center justify-center gap-[12px] overflow-hidden bg-cover bg-no-repeat uppercase text-White md:h-[200px] lg:h-auto ${className}`}
      aria-label={title}
    >
      <span className="absolute bottom-0 left-0 right-0 top-0 bg-[rgba(29,28,30,.7)] transition group-hover:bg-[rgba(231,129,107,.7)]" />
      <h3 className="text-28 md:text-40 z-10 font-medium tracking-[1.4px] md:tracking-[2px]">
        {title}
      </h3>
      <span className="text-15 z-10 flex items-center gap-2 tracking-[5px]">
        view projects
        <Arrow />
      </span>
    </Link>
  );
};

export default ProjectLink;
