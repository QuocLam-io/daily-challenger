"use server";
import { db } from "../../../lib/db";
import { auth } from "@clerk/nextjs/server";

interface ActiveChallengesResults {
  data?: string[];
  error?: string;
}

async function getActiveChallenges(): Promise<ActiveChallengesResults> {
  const { userId } = auth();
  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const activeChallenges = await db.challenge.findMany({
      where: {
        // TODO: Also filter out if they're completed after implementing the completed toggle
        // completed: false, // Uncomment after implementing the completed toggle
        userId,
        OR: [
          { deadline: null }, // No deadline set
          { deadline: { gte: new Date() } }, // Deadline is in the future or today
        ],
      },
    });

    // TODO: convert deadline string after design approves
    return {
      data: activeChallenges.map((challenge) => ({
        ...challenge,
        deadline: challenge.deadline
          ? challenge.deadline.toLocaleDateString()
          : null,
      })),
    };
  } catch (error) {
    console.log(error.message, "Error fetching active challenges");
    return { error: "Uh oh, better call Saul" };
  }
}

export default getActiveChallenges;
