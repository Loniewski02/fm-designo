"use client";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FormSubmit } from "@/app/actions";
import { INPUTS } from "@/app/constant";

import FormBox from "./FormBox";
import Submit from "./Submit";

const initialState: FormDataType = {
  status: "",
  data: { name: "", email: "", phone: "", msg: "" },
};

const ContactForm = () => {
  const [initial, setInitial] = useState(true);
  const [reset, setReset] = useState(false);
  const [isMessageShown, setIsMessageShown] = useState(false);
  const [state, FormAction] = useFormState(FormSubmit, initialState);

  useEffect(() => {
    if (state.status === "Saved Successfully!") {
      setIsMessageShown(true);
      setReset(true);
      setInitial(true);
    }
  }, [state.status]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsMessageShown(false);
    }, 10000);

    return () => clearTimeout(identifier);
  }, [isMessageShown]);

  return (
    <form
      action={(formData) => {
        FormAction(formData);
        setReset(false);
        setInitial(false);
      }}
      className=" z-10 flex w-full max-w-[360px] flex-col gap-6 overflow-hidden md:max-w-[620px] lg:min-w-[380px] lg:max-w-[380px]"
    >
      {INPUTS.map((input) => (
        <FormBox
          key={input.id}
          id={input.id}
          type={input.type}
          label={input.label}
          validity={input.val}
          reset={reset}
          textarea={input.id === "msg"}
          initial={initial}
        />
      ))}
      <Submit />
      <AnimatePresence>
        {isMessageShown && (
          <motion.div
            initial={{ bottom: -200 }}
            animate={{ bottom: 0 }}
            exit={{ bottom: -200 }}
            className="absolute bottom-0 right-1/2 z-50 w-full max-w-[360px] -translate-y-1/2 translate-x-1/2 rounded-15 border bg-VeryLightPeach px-8 py-3 text-base italic text-Black shadow-sm lg:right-[96px] lg:max-w-[380px] lg:translate-x-0"
          >
            Message sent! 😎
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
