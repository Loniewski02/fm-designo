import { AnimatePresence, motion } from "framer-motion";
import ErrorIco from "@/public/assets/contact/desktop/icon-error.svg";

type Props = {
  label: string;
  id: string;
  type: string;
  hasError: boolean;
  isValid: boolean;
  message?: boolean;
  onBlur: () => void;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  value: string;
  errorMsg: string;
};

const FormBox: React.FC<Props> = ({
  label,
  value,
  onBlur,
  onChange,
  id,
  type,
  message,
  errorMsg,
  isValid,
  hasError,
}) => {
  const isEmpty = value === "";

  return (
    <div className="group relative">
      {!message && (
        <input
          type={type}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          className="peer w-full bg-transparent px-[14px] pb-4 text-15 font-medium text-White outline-none autofill:bg-black  md:px-6"
        />
      )}
      {message && (
        <textarea
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          className="peer block min-h-16 w-full bg-transparent px-[14px] pb-4 text-15 font-medium text-White outline-none autofill:text-gray-600  md:px-6"
        />
      )}
      <motion.label
        animate={{
          top: !isEmpty ? "100%" : "0%",
          y: !isEmpty ? "-62%" : "0%",
        }}
        htmlFor={id}
        className={`absolute left-[14px] z-10 text-15 font-medium transition-[opacity] group-hover:opacity-100 peer-focus:opacity-100 md:left-6 ${!isEmpty ? "opacity-100" : "opacity-50"} ${!isEmpty && isValid ? "text-Blue" : "text-White"}`}
      >
        {label}
        {!isEmpty && (
          <span className="absolute left-0 right-0 top-[12px] -z-10 h-[4px] bg-Peach" />
        )}
      </motion.label>
      <div
        className={`absolute bottom-0 left-0 right-0 transition-[height] group-hover:h-[3px] peer-focus:h-[3px] ${!isEmpty && isValid ? "bg-Blue" : "bg-White"} ${!isEmpty ? "h-[3px]" : "h-px"}`}
      />
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ x: 200 }}
            animate={{ x: -5 }}
            exit={{ x: 200 }}
            className="absolute right-0 top-0 flex translate-y-1/2 items-center gap-2 text-[12px] italic leading-[26px] text-White"
          >
            {errorMsg}
            <motion.span
              initial={{ y: -25, opacity: 0 }}
              transition={{ delay: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              className="block"
            >
              <ErrorIco />
            </motion.span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormBox;
