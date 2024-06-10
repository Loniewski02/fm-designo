export async function FormSubmit(prevState: any, formData: any) {
  const res = await fetch("../api/post-form-data", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data;
}
