"use client";

import { useEffect, useState } from "react";
// import EmptyLanding from "@/components/EmptyLanding";
// import FilledLanding from "@/components/FilledLanding";

export default function LandingClient() {
  const [hasPublicChallenge, setHasPublicChallenge] = useState(false);

  // useEffect(() => {
  //   const data = localStorage.getItem(TODO: fetch storage for challenge);
  //   if (data) {
  //     setHasPublicChallenge(true);
  //   }
  // }, []);

  // return hasPublicChallenge ? <FilledLanding /> : <EmptyLanding />;
  return <h1>Blub</h1>;
}
