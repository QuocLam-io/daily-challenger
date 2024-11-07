"use client";

import { useState } from "react";
import EmptyLanding from "@/components/public-landing/EmptyLanding";
import FilledLanding from "@/components/public-landing/FilledLanding";
import LoadingWrapper from "@/components/wrappers/LoadingWrapper";
import CarraigeLoader from "../loaders/CarraigeLoader";

export default function LandingClient() {
  const [hasPublicChallenge, setHasPublicChallenge] = useState(null);

  const loadPublicChallenge = async () => {
    const data = localStorage.getItem("publicChallenge");
    setHasPublicChallenge(data);
    // return Boolean(data);
  };

  console.log(hasPublicChallenge, "hasPublicChallenge");
  return (
    <LoadingWrapper loadFn={loadPublicChallenge} fallback={<CarraigeLoader />}>
      {hasPublicChallenge ? <FilledLanding /> : <EmptyLanding />}
      {/* <CarraigeLoader /> */}
      {/* <EmptyLanding /> */}
    </LoadingWrapper>
  );
}
