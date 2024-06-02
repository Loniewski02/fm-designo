type Props = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  isDark?: boolean;
};

const LocationItem: React.FC<Props> = ({ title, paragraph1, paragraph2 }) => {
  return (
    <div className="flex flex-col gap-1 text-center text-base text-White opacity-50 md:text-left">
      <h3 className="font-bold">{title}</h3>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
};

export default LocationItem;
