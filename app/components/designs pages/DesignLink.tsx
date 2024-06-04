import Link from "next/link";

import Arrow from "@/public/assets/shared/desktop/icon-right-arrow.svg";

type Props = {
  url: string;
  name: string;
  className?: string;
  id: string;
};

const BACKGROUNDS: any = {
  "web-design":
    "bg-[url('/assets/home/mobile/image-web-design.jpg')] md:bg-[url('/assets/home/tablet/image-web-design.jpg')] lg:bg-[url('/assets/home/desktop/image-web-design-large.jpg')]",
  "app-design":
    "bg-[url('/assets/home/mobile/image-app-design.jpg')] md:bg-[url('/assets/home/tablet/image-app-design.jpg')] lg:bg-[url('/assets/home/desktop/image-app-design.jpg')]",
  "graphic-design":
    "bg-[url('/assets/home/mobile/image-graphic-design.jpg')] md:bg-[url('/assets/home/tablet/image-graphic-design.jpg')] lg:bg-[url('/assets/home/desktop/image-graphic-design.jpg')]",
};

const DesignLink: React.FC<Props> = ({ url, name, id, className }) => {
  return (
    <Link
      href={url}
      className={`group relative flex h-[250px] flex-col items-center justify-center gap-[12px] overflow-hidden rounded-15 bg-cover bg-no-repeat uppercase text-White transition-transform active:scale-95 md:h-[200px] lg:w-full ${BACKGROUNDS[id]} ${className ? className : "lg:h-[310px]"}`}
      aria-label={name + " page"}
    >
      <span className="absolute bottom-0 left-0 right-0 top-0 bg-[rgba(29,28,30,.7)] transition group-hover:bg-[rgba(231,129,107,.7)]" />
      <h3 className="z-10 text-28 font-medium tracking-[1.4px] md:text-40 md:tracking-[2px]">
        {name}
      </h3>
      <span className="z-10 flex items-center gap-2 text-15 tracking-[5px]">
        view projects
        <Arrow />
      </span>
    </Link>
  );
};

export default DesignLink;
