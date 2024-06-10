import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useInput from "@/app/hooks/use-input";

import ErrorIco from "@/public/assets/contact/desktop/icon-error.svg";

type Props = {
  label: string;
  id: string;
  type: string;
  initial: boolean;
  textarea?: boolean;
  reset: boolean;
  validity: (val: string) => boolean;
};

const FormBox: React.FC<Props> = ({
  label,
  initial,
  id,
  type,
  reset,
  textarea,
  validity,
}) => {
  const {
    enteredValue,
    isValid,
    hasError,
    inputValueHandler,
    inputBlurHandler,
    reset: inputReset,
  } = useInput(validity);
  const isEmpty = enteredValue === "";

  useEffect(() => {
    !initial && inputBlurHandler();
  }, [initial]);

  useEffect(() => {
    reset && inputReset();
  }, [reset]);

  return (
    <div className="group relative">
      {!textarea && (
        <input
          name={id}
          type={type}
          id={id}
          value={enteredValue}
          onBlur={inputBlurHandler}
          onChange={inputValueHandler}
          className="input-autofill peer w-full bg-transparent px-[14px] pb-4 text-15 font-medium text-White outline-none md:px-6"
        />
      )}
      {textarea && (
        <textarea
          name={id}
          id={id}
          value={enteredValue}
          onBlur={inputBlurHandler}
          onChange={inputValueHandler}
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
            {isEmpty ? "Can't be blank" : "Please check again"}
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
