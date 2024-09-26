import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  //! ------------------ New Design will have public functions ----------------- /
  // const { userId } = auth();

  // if (!userId) {
  //   redirect("/sign-in");
  //   return null; // Prevent further rendering
  // }
  //! -------------------------------------------------------------------------- /

  return (
    <main>
      <h1>Welcome to your Dashboard!</h1>
    </main>
  );
}
