type Props = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  dark?: boolean;
};

const Info: React.FC<Props> = ({ title, paragraph1, paragraph2, dark }) => {
  return (
    <div
      className={`flex flex-col gap-1 text-center text-base ${dark ? "text-Black" : "text-White opacity-50"} md:text-left`}
    >
      <h3 className="font-bold">{title}</h3>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
};

export default Info;
