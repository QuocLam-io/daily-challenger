"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "../../../lib/db";
import { revalidatePath } from "next/cache"; //After a challenge is added, we want to revalidate the cache by refreshing the page

interface ChallengeFormData {
  challenge: string;
  quantity?: number;
  deadline?: string;
  // type: 'NUMERICAL' | 'BOOLEAN';
  // description: string;
}

interface ChallengeResult {
  data?: ChallengeFormData;
  error?: string;
}

async function addChallenge(formData: FormData): Promise<ChallengeResult> {
  const challengeValue = formData.get("challenge");
  const quantityValue = formData.get("quantity");
  const deadlineValue = formData.get("deadline");

  if (!challengeValue || challengeValue === "") {
    return { error: "Learn to fill out a form" };
  }

  const challenge: string = challengeValue.toString(); //Ensure challenge is a string
  const quantity: number = quantityValue
    ? parseInt(quantityValue.toString(), 10)
    : 0; // Ensure quantity is a number
  const deadline: Date | null =
    deadlineValue && deadlineValue !== ""
      ? new Date(deadlineValue.toString())
      : null; //Ensure deadline is a date object for prisma schema

  //Check if user is logged in
  const { userId } = auth();
  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const challengeData: ChallengeFormData = await db.challenge.create({
      data: { challenge, quantity, deadline, userId },
    });

    //Revalidate cache
    revalidatePath("/");
    return { data: challengeData };
    // console.log(userId, "User ID");
  } catch (error) {
    console.log(error.message, "Error adding challenge");
    return { error: "Uh oh, better call Quoc" };
  }
}

export default addChallenge;
