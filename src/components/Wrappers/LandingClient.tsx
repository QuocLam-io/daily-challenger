"use client";

import { useState } from "react";
import EmptyLanding from "@/components/public-landing/EmptyLanding";
import LoadingWrapper from "@/components/wrappers/LoadingWrapper";
import CarraigeLoader from "../loaders/CarraigeLoader";

export default function LandingClient() {
  const [hasPublicChallenge, setHasPublicChallenge] = useState(false);

  const loadPublicChallenge = async () => {
    const data = localStorage.getItem("publicChallenge");
    setHasPublicChallenge(Boolean(data));
    return Boolean(data);
  };

  return (
    <LoadingWrapper
      loadFn={loadPublicChallenge}
      fallback={<div>Loading...</div>}
    >
      {hasPublicChallenge ? <CarraigeLoader /> : <EmptyLanding />}
      {/* <EmptyLanding /> */}
    </LoadingWrapper>
  );
}
