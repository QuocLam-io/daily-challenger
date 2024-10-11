"use server";
import { db } from "../../../lib/db";
import { auth } from "@clerk/nextjs/server";

interface ChallengesResults {
  data?: string[];
  error?: string;
}

async function getAllChallenges(): Promise<ChallengesResults> {
  const { userId } = auth();
  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const challenges = await db.challenge.findMany({
      where: {
        userId,
      },
    });

    return {
      data: challenges,
    };
  } catch (error) {
    console.log(error.message, "Error fetching  challenges");
    return { error: "Uh oh, better call Saul" };
  }
}

export default getAllChallenges;
//TODO: Add fetching in the state manager, so that when we edit the challenges, zustand will automatically update the state and rerender the component
//TODO: Refactor to filter out active challenges on the clientside
