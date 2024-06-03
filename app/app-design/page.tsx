"use client";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  return <h1>{pathname}</h1>;
};

export default page;
