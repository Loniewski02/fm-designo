type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-15 z-10 block w-max rounded-[8px] bg-White px-6 py-4 font-medium uppercase tracking-[1px] text-Black"
    >
      {children}
    </button>
  );
};

export default Button;
