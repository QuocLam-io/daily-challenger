"use client";

import { useEffect, useState } from "react";
// import FilledLanding from "@/components/pages/EmptyLanding";
import EmptyLanding from "@/components/public-landing/EmptyLanding";

export default function LandingClient() {
  const [hasPublicChallenge, setHasPublicChallenge] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("publicChallenge");
    if (data) {
      setHasPublicChallenge(true);
    }
  }, []);

  return hasPublicChallenge ? <h1>blub</h1> : <EmptyLanding />;
  // return <EmptyLanding />;
}
