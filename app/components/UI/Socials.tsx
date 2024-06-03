import Facebook from "@/public/assets/shared/desktop/icon-facebook.svg";
import Youtube from "@/public/assets/shared/desktop/icon-youtube.svg";
import Twitter from "@/public/assets/shared/desktop/icon-twitter.svg";
import Pinterest from "@/public/assets/shared/desktop/icon-pinterest.svg";
import Instagram from "@/public/assets/shared/desktop/icon-instagram.svg";

export const SOCIALS = [
  { id: "s1", name: "Facebook", ico: <Facebook />, url: "#" },
  { id: "s2", name: "Youtube", ico: <Youtube />, url: "#" },
  { id: "s3", name: "Twitter", ico: <Twitter />, url: "#" },
  { id: "s4", name: "Pinterest", ico: <Pinterest />, url: "#" },
  { id: "s5", name: "Instagram", ico: <Instagram />, url: "#" },
];

const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {SOCIALS.map((item) => (
        <a
          href={item.url}
          key={item.id}
          className="block text-Peach transition hover:-translate-y-[2px] hover:text-LightPeach"
        >
          {item.ico}
        </a>
      ))}
    </div>
  );
};

export default Socials;