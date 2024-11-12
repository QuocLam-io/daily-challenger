"use client";

import { useState } from "react";
import EmptyLanding from "@/components/public-landing/EmptyLanding";
import FilledLanding from "@/components/public-landing/FilledLanding";
import LoadingWrapper from "@/components/wrappers/LoadingWrapper";
import CarraigeLoader from "../loaders/CarraigeLoader";

export interface PublicChallengeTypes {
  challenge: string;
  expiresAt: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export default function LandingClient() {
  const [publicChallenge, setPublicChallenge] =
    useState<PublicChallengeTypes | null>(null);

  const loadPublicChallenge = async () => {
    const data = localStorage.getItem("publicChallenge");
    if (data) {
      const parsedData = JSON.parse(data) as Omit<
        PublicChallengeTypes,
        "expiresAt"
      > & { expiresAt: string };

      const expiresAtDate = new Date(parsedData.expiresAt);
      const hours = expiresAtDate.getHours();
      const minutes = expiresAtDate.getMinutes();
      const seconds = expiresAtDate.getSeconds();

      setPublicChallenge({
        ...parsedData,
        expiresAt: { hours, minutes, seconds },
      });
    } else {
      setPublicChallenge(null);
    }
  };

  console.log("publicChallenge", publicChallenge);

  return (
    <LoadingWrapper loadFn={loadPublicChallenge} fallback={<CarraigeLoader />}>
      {publicChallenge ? (
        <FilledLanding publicChallenge={publicChallenge} />
      ) : (
        <EmptyLanding />
      )}
      {/* <CarraigeLoader /> */}
      {/* <EmptyLanding /> */}
    </LoadingWrapper>
  );
}
