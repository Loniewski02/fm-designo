import Info from "@/app/components/layout/Info";
import Circles from "@/public/assets/shared/desktop/bg-pattern-three-circles.svg";

type Props = {
  id: string;
  country: string;
  office: { name: string; adress1: string; adress2: string };
  contact: { name: string; phone: string; email: string };
  map: string;
  reversed: boolean;
};

const LocationItem: React.FC<Props> = ({
  country,
  office,
  contact,
  map,
  id,
  reversed,
}) => {
  return (
    <article id={id} className="flex flex-col md:gap-8 lg:grid lg:grid-cols-3">
      <div
        className={`${reversed ? "lg:order-2" : "lg:order-1 "} relative order-2 overflow-hidden bg-[#FDF3F0] px-4 py-20 text-center md:rounded-15 md:px-[74px] md:py-[88px] md:text-left lg:col-span-2 lg:px-[95px]`}
      >
        <Circles className="absolute left-0 top-0 md:bottom-0 md:top-[initial]" />
        <h3 className="relative z-10 mb-6 text-32 font-medium text-Peach md:text-40">
          {country}
        </h3>
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:gap-20">
          <Info
            dark
            title={office.name}
            paragraph1={office.adress1}
            paragraph2={office.adress2}
          />
          <Info
            dark
            title={contact.name}
            paragraph1={`P: ${contact.phone}`}
            paragraph2={`M: ${contact.email}`}
          />
        </div>
      </div>
      <iframe
        loading="lazy"
        className={`${reversed ? "lg:order-1" : "lg:order-2"} order-1 h-[320px] w-full md:rounded-15 lg:h-full`}
        src={map}
      ></iframe>
    </article>
  );
};

export default LocationItem;
