type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="z-10 block w-max rounded-[8px] bg-White px-6 py-4 text-15 font-medium uppercase tracking-[1px] text-Black transition hover:bg-LightPeach hover:text-White active:scale-95"
    >
      {children}
    </button>
  );
};

export default Button;
