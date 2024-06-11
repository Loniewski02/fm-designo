import { phoneReg, emailReg } from "@/app/regex";

export async function POST(req: any, { params }: any) {
  let res: FormDataType | null;
  const slug = params.slug;

  if (slug === "post-form-data") {
    const data = await req.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const msg = data.get("msg");

    if (
      !(name.trim().length > 1) ||
      !emailReg.test(email) ||
      !(msg.trim().length > 10) ||
      !(phone === "" || phoneReg.test(phone))
    ) {
      res = null;
    } else {
      res = {
        data: { name: name, email: email, phone: phone, msg: msg },
        status: "success",
      };
    }

    return Response.json(res);
  } else {
    //noothing
  }
}
