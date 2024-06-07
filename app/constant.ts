import expressImg from "@/public/assets/web-design/desktop/image-express.jpg";
import transferImg from "@/public/assets/web-design/desktop/image-transfer.jpg";
import photonImg from "@/public/assets/web-design/desktop/image-photon.jpg";
import builderImg from "@/public/assets/web-design/desktop/image-builder.jpg";
import blogrImg from "@/public/assets/web-design/desktop/image-blogr.jpg";
import campImg from "@/public/assets/web-design/desktop/image-camp.jpg";

import airfilterImg from "@/public/assets/app-design/desktop/image-airfilter.jpg";
import eyecamImg from "@/public/assets/app-design/desktop/image-eyecam.jpg";
import faceitImg from "@/public/assets/app-design/desktop/image-faceit.jpg";
import todoImg from "@/public/assets/app-design/desktop/image-todo.jpg";
import loopstudiosImg from "@/public/assets/app-design/desktop/image-loopstudios.jpg";

import changeImg from "@/public/assets/graphic-design/desktop/image-change.jpg";
import boxedWaterImg from "@/public/assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImg from "@/public/assets/graphic-design/desktop/image-science.jpg";

export const WEB_DESIGN_PROJECTS: DesignProject[] = [
  {
    url: "#",
    title: "express",
    desc: "A multi-carrier shipping website for ecommerce businesses",
    img: expressImg.src,
  },
  {
    url: "#",
    title: "transfer",
    desc: "Site for low-cost money transfers and sending money within seconds",
    img: transferImg.src,
  },
  {
    url: "#",
    title: "photon",
    desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
    img: photonImg.src,
  },
  {
    url: "#",
    title: "builder",
    desc: "Connects users with local contractors based on their location",
    img: builderImg.src,
  },
  {
    url: "#",
    title: "blogr",
    desc: "Blogr is a platform for creating an online blog or publication",
    img: blogrImg.src,
  },
  {
    url: "#",
    title: "camp",
    desc: "Get expert training in coding, data, design, and digital marketing",
    img: campImg.src,
  },
];

export const APP_DESIGN_PROJECTS: DesignProject[] = [
  {
    url: "#",
    title: "airfilter",
    desc: "Solving the problem of poor indoor air quality by filtering the air",
    img: airfilterImg.src,
  },
  {
    url: "#",
    title: "eyecam",
    desc: "Product that lets you edit your favorite photos and videos at any time",
    img: eyecamImg.src,
  },
  {
    url: "#",
    title: "faceit",
    desc: "Get to meet your favorite internet superstar with the faceit app",
    img: faceitImg.src,
  },
  {
    url: "#",
    title: "todo",
    desc: "A todo app that features cloud sync with light and dark mode",
    img: todoImg.src,
  },
  {
    url: "#",
    title: "loopstudios",
    desc: "A VR experience app made for Loopstudios",
    img: loopstudiosImg.src,
  },
];

export const GRAPHIC_DESIGN_PROJECTS: DesignProject[] = [
  {
    url: "#",
    title: "tim brown",
    desc: "A book cover designed for Tim Brown’s new release, ‘Change’r",
    img: changeImg.src,
  },
  {
    url: "#",
    title: "boxed water",
    desc: "A simple packaging concept made for Boxed Water",
    img: boxedWaterImg.src,
  },
  {
    url: "#",
    title: "science!",
    desc: "A poster made in collaboration with the Federal Art Project",
    img: scienceImg.src,
  },
];

export const LOCATIONS: LocationT[] = [
  {
    id: "canada",
    country: "Canada",
    office: {
      name: "Designo Central Office",
      adress1: "3886 Wellington Street",
      adress2: "Toronto, Ontario M9C 3J5",
    },
    contact: {
      name: "Contact",
      phone: "+1 253-863-8967",
      email: "contact@designo.com",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44783.4506650752!2d-73.60929253300098!3d45.45034797476251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9106498f1530d%3A0xa128492b0f6582d9!2s3886%20Rue%20Wellington%2C%20Verdun%2C%20QC%20H4G%201V2%2C%20Kanada!5e0!3m2!1spl!2spl!4v1717759764522!5m2!1spl!2spl",
  },
  {
    id: "australia",
    country: "Australia",
    office: {
      name: "Designo AU Office",
      adress1: "19 Balonne Street",
      adress2: "New South Wales 2443",
    },
    contact: {
      name: "Contact",
      phone: "(02) 6720 9092",
      email: "contact@designo.au",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452933.1900239685!2d153.1392266359131!3d-27.514660958769618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91445469d7099b%3A0x37b08adfd65f1c24!2s19%20Balonne%20St%2C%20Runcorn%20QLD%204113%2C%20Australia!5e0!3m2!1spl!2spl!4v1717759573777!5m2!1spl!2spl",
  },
  {
    id: "uk",
    country: "United Kingdom",
    office: {
      name: "Designo UK Office",
      adress1: "13  Colorado Way",
      adress2: "Rhyd-y-fro SA8 9GA",
    },
    contact: {
      name: "Contact",
      phone: "078 3115 1400",
      email: "contact@designo.uk",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7939.274827999082!2d-1.3368305006311725!3d53.72965336239145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487941000242e677%3A0xe99597c34f45ba11!2sWheldale%20Colliery%20Memorial!5e0!3m2!1spl!2spl!4v1717517756730!5m2!1spl!2spl",
  },
];
