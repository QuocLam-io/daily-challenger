"use server";
import { db } from "../../../lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteChallenge(challengeId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    await db.challenge.delete({
      where: {
        id: challengeId,
        userId,
      },
    });

    revalidatePath("/");

    return { message: "Challenge deleted" };
  } catch (error) {
    return { error: error };
  }
}

export default deleteChallenge;
