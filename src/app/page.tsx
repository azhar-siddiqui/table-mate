import { redirect } from "next/navigation";

export default async function Page() {
  const user = true;
  if (user) {
    redirect("/dashboard/overview");
  } else {
    return redirect("/auth/sign-in");
  }
}
