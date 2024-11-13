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
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const loadPublicChallenge = async () => {
    const data = localStorage.getItem("publicChallenge");
    if (data) {
      const parsedData = JSON.parse(data) as Omit<
        PublicChallengeTypes,
        "expiresAt"
      > & { expiresAt: string };
      const expiresAtDate = new Date(parsedData.expiresAt);

      setPublicChallenge({
        ...parsedData,
        expiresAt: {
          hours: expiresAtDate.getUTCHours(),
          minutes: expiresAtDate.getUTCMinutes(),
          seconds: expiresAtDate.getUTCSeconds(),
        },
      });

      calculateTimeLeft(expiresAtDate);
    } else {
      setPublicChallenge(null);
    }
  };

  const calculateTimeLeft = (expiresAtDate: Date) => {
    const now = new Date();
    const timeDiff = expiresAtDate.getTime() - now.getTime();

    if (timeDiff > 0) {
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);
      setTimeLeft({ hours, minutes, seconds });
    } else {
      setTimeLeft(null);
    }
  };

  console.log(publicChallenge, timeLeft, "publicChallenge, timeLeft");

  return (
    <LoadingWrapper loadFn={loadPublicChallenge} fallback={<CarraigeLoader />}>
      {publicChallenge ? (
        <FilledLanding publicChallenge={publicChallenge} timeLeft={timeLeft} />
      ) : (
        <EmptyLanding />
      )}
      {/* <CarraigeLoader /> */}
      {/* <EmptyLanding /> */}
    </LoadingWrapper>
  );
}
