"use server";

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

async function addChallenge(
  formData: ChallengeFormData
): Promise<ChallengeResult> {
  const challengeValue = formData.get("challenge");
  const quantityValue = formData.get("quantity");
  const deadlineValue = formData.get("deadline");

  if (!challengeValue || !quantityValue || !deadlineValue) {
    return { error: "Learn to fill out a form" };
  }

  const challenge: string = challengeValue.toString(); //Ensure challenge is a string
  const quantity: number = parseInt(quantityValue.toString()); //Ensure quantity is a number
  const deadline: string = deadlineValue.toString(); //Ensure deadline is a string

  const challengeData: ChallengeFormData = {
    challenge,
    quantity,
    deadline,
  };

  return { data: challengeData };
}

export default addChallenge;
