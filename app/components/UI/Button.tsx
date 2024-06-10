type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  dark?: boolean;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  dark,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      disabled={disabled}
      aria-disabled={disabled}
      className={`z-10 block w-max rounded-[8px]  px-6 py-4 text-15 font-medium uppercase tracking-[1px]  transition hover:bg-LightPeach hover:text-White active:scale-95 ${dark ? "bg-Peach text-White" : "bg-White text-Black"} ${className && className}`}
    >
      {children}
    </button>
  );
};

export default Button;
