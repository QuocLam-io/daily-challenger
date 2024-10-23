"use client";

import { useEffect, useState } from "react";
// import FilledLanding from "@/components/pages/EmptyLanding";
import EmptyLanding from "@/components/pages/EmptyLanding";

export default function LandingClient() {
  const [hasPublicChallenge, setHasPublicChallenge] = useState(false);

  // useEffect(() => {
  //   const data = localStorage.getItem(TODO: fetch storage for challenge);
  //   if (data) {
  //     setHasPublicChallenge(true);
  //   }
  // }, []);

  // return hasPublicChallenge ? <FilledLanding /> : <EmptyLanding />;
  return <EmptyLanding />;
}
