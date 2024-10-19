import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LandingClient from "@/components/Wrappers/LandingClient";

export default function LandingPage() {
  const { userId } = auth();

  if (userId) {
    redirect("/home");
  } else {
    return (
      <main>
        <LandingClient />
      </main>
    );
  }
}
