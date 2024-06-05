"use client";
import useInput from "@/app/hooks/use-input";
import { useState } from "react";

import { phoneReg, emailReg } from "@/app/regex";

import Button from "@/app/components/UI/Button";
import FormBox from "./FormBox";
import LoadingSpinner from "@/app/components/UI/LoadingSpinner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    enteredValue: enteredName,
    inputBlurHandler: nameBlurHandler,
    inputValueHandler: nameValueHandler,
    isValid: nameIsValid,
    hasError: nameHasError,
    reset: nameReset,
    errorMsg: nameError,
  } = useInput((value) => value.trim().length > 1);

  const {
    enteredValue: enteredEmail,
    inputBlurHandler: emailBlurHandler,
    inputValueHandler: emailValueHandler,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: emailReset,
    errorMsg: emailError,
  } = useInput((value) => emailReg.test(value));

  const {
    enteredValue: enteredPhone,
    inputBlurHandler: phoneBlurHandler,
    inputValueHandler: phoneValueHandler,
    hasError: phoneHasError,
    isValid: phoneIsValid,
    reset: phoneReset,
    errorMsg: phoneError,
  } = useInput((value) => value === "" || phoneReg.test(value));

  const {
    enteredValue: enteredMessage,
    inputBlurHandler: messageBlurHandler,
    inputValueHandler: messageValueHandler,
    isValid: messageIsValid,
    hasError: messageHasError,
    reset: messageReset,
    errorMsg: messageError,
  } = useInput((value) => value.trim().length > 10);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      nameBlurHandler();
      emailBlurHandler();
      messageBlurHandler();
      phoneBlurHandler();

      if (!nameIsValid || !emailIsValid || !messageIsValid || !phoneIsValid) {
        console.log("error du");
        setLoading(false);
        return;
      }

      const data = {
        name: enteredName,
        email: enteredEmail,
        phone: enteredPhone,
        message: enteredMessage,
      };
      console.log(data);

      setLoading(false);
      nameReset();
      emailReset();
      messageReset();
      phoneReset();
    }, 1000);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="relative z-10 flex w-full max-w-[360px] flex-col gap-6 overflow-hidden md:max-w-[620px] lg:min-w-[380px] lg:max-w-[380px]"
    >
      <FormBox
        id="name"
        type="text"
        label="Name"
        value={enteredName}
        errorMsg={nameError}
        hasError={nameHasError}
        onChange={nameValueHandler}
        onBlur={nameBlurHandler}
      />
      <FormBox
        id="email"
        type="text"
        label="Email Address"
        value={enteredEmail}
        errorMsg={emailError}
        hasError={emailHasError}
        onChange={emailValueHandler}
        onBlur={emailBlurHandler}
      />
      <FormBox
        id="phone"
        type="tel"
        label="Phone"
        value={enteredPhone}
        errorMsg={phoneError}
        hasError={phoneHasError}
        onChange={phoneValueHandler}
        onBlur={phoneBlurHandler}
      />
      <FormBox
        id="message"
        type="text"
        label="Your Message"
        message
        value={enteredMessage}
        errorMsg={messageError}
        hasError={messageHasError}
        onChange={messageValueHandler}
        onBlur={messageBlurHandler}
      />
      <Button
        type="submit"
        className={`min-h-[57px] min-w-[152px] self-center md:self-end ${loading && "bg-LightPeach"}`}
      >
        {loading ? <LoadingSpinner /> : "submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
