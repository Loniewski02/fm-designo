type Props = {
  label: string;
  id: string;
  type: string;
  message?: boolean;
};

const FormBox: React.FC<Props> = ({ label, id, type, message }) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute left-[14px] top-0 text-15 font-medium text-White opacity-50 md:left-6"
      >
        {label}
      </label>
      {!message && (
        <input
          type={type}
          id={id}
          className="w-full border-b border-White bg-transparent px-[14px] pb-4 md:px-6"
        />
      )}
      {message && (
        <textarea
          id={id}
          className="min-h-16 w-full border-b border-White bg-transparent px-[14px] pb-4 md:px-6"
        />
      )}
    </div>
  );
};

export default FormBox;
