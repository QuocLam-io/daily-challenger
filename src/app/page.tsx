import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default function LandingPage() {
  const { userId } = auth();

  if (userId) {
    redirect("/home");
  } else {
    return (
      <main>
        <h1>Public!</h1>
      </main>
    );
  }
}
