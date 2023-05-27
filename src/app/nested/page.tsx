import { cookies } from "next/headers";
import Form from "./form";

export default function Page() {
  // const complete = cookies().has("complete");
  const complete = cookies().get("complete")?.value === "yes";

  return <Form complete={complete} />;
}
