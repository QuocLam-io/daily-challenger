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
        userId,
        OR: [
          { deadline: null }, // No deadline
          { deadline: { gte: new Date() } }, // Deadline is in the future or today
        ],
        // completed: false, // Uncomment after implementing the completed toggle
      },
    });

    // TODO: Also filter out if they're completed after implementing the completed toggle
    return { data: activeChallenges };
  } catch (error) {
    console.log(error.message, "Error fetching active challenges");
    return { error: "Uh oh, better call Quoc" };
  }
}

export default getActiveChallenges;