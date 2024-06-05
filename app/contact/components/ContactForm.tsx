"use client";
import Button from "@/app/components/UI/Button";
import FormBox from "./FormBox";

const ContactForm = () => {
  return (
    <form className="relative z-10 flex w-full max-w-[360px] flex-col gap-6 md:max-w-[620px] lg:min-w-[380px] lg:max-w-[380px]">
      <FormBox id="name" type="text" label="Name" />
      <FormBox id="email" type="text" label="Email Address" />
      <FormBox id="phone" type="text" label="Phone" />
      <FormBox id="message" type="text" label="Your Message" message />
      <Button
        className=" min-w-[152px] self-center md:self-end"
        onClick={() => {
          console.log("oko");
        }}
      >
        submit
      </Button>
    </form>
  );
};

export default ContactForm;
