// "use client";
// import { auth } from "@clerk/nextjs/server";
import Challenger from "@/components/Challenger.tsx";
import ActiveChallenges from "@/components/ActiveChallenges";

export default function Home() {
  //! ------------------ New Design will have public functions ----------------- /
  // const { userId } = auth();
  //! -------------------------------------------------------------------------- /

  return (
    <main>
      <h1>Welcome to your Dashboard!</h1>
      <Challenger />
      <ActiveChallenges />
    </main>
  );
}
