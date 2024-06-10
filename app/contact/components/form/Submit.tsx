import { useFormStatus } from "react-dom";

import Button from "@/app/components/UI/Button";
import LoadingSpinner from "@/app/components/UI/LoadingSpinner";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className={`min-h-[57px] min-w-[152px] self-center md:self-end ${pending && "bg-LightPeach"}`}
    >
      {pending ? <LoadingSpinner /> : "submit"}
    </Button>
  );
};

export default Submit;
