import { useState, ChangeEvent } from "react";
import "./ChallengerForm.scss";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ContactsModal } from "@/Components/modals/ContactsModal";
import addChallenge from "@/app/actions/addChallenge";
import { toast } from "react-toastify";

/* ---------------------------- Types/Interfaces ---------------------------- */

interface ChallengerFormProps {
  closeChallengerHandler: () => void;
}

// type FormData = z.infer<typeof formSchema>;
//! ----------------------------------- Zod ---------------------------------- */

// const passwordValidation = new RegExp(
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// );

// const formSchema = z.object({
//   name: z.string().min(3, {
//     message: "Name must be at least 3 characters.",
//   }),
//   email: z
//     .string()
//     .min(1, {
//       message: "You mus give an email address.",
//     })
//     .email("This is not a valid email."),
//   password: z
//     .string()
//     .min(1, {
//       message: "You must give a password",
//     })
//     .regex(passwordValidation, {
//       message: "Your password is not valid",
//     }),
// });

//! ------------------------ Submit Challenge Handler ------------------------ */

const submitChallengeHandler = (userInfo: FormData) => {
  //TODO: Send to backend
  console.log(userInfo, "Submitted");
};

//clg

export function ChallengerForm({
  closeChallengerHandler,
}: ChallengerFormProps) {
  const [contactsModalOpen, setContactsModalOpen] = useState(false);
  const [challenge, setChallenge] = useState<string>("");
  const [type, setType] = useState<"NUMERICAL" | "BOOLEAN">("NUMERICAL");
  const [quantity, setQuantity] = useState<number | undefined>(0);
  const [description, setDescription] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");

  // const form = useForm({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //   },
  // });

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addChallenge(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Challenge submitted successfully");
      console.log(data, "Yay Challenge server action submitted");
    }

    // submitChallengeHandler(formData);
    closeChallengerHandler();
  };

  return (
    <section className="challenger_container">
      <form action={clientAction}>
        <div className="input-group">
          <label htmlFor="challenge">Challenge:</label>
          <input
            id="challenge"
            name="challenge"
            className="input"
            type="text"
            value={challenge}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setChallenge(e.target.value)
            }
          />
        </div>

        <div className="input-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            name="quantity"
            className="input"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuantity(e.target.value)
            }
          />
        </div>

        <div className="input-group">
          <label htmlFor="deadline">Deadline:</label>
          <input
            id="deadline"
            name="deadline"
            className="input"
            type="date"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDeadline(e.target.value)
            }
          />
        </div>
        {/* <div className="input-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            className="select"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setChallenge(e.target.value)}
          >
            <option value="NUMERICAL">Numerical</option>
            <option value="BOOLEAN">Boolean</option>
          </select>
        </div> */}

        {/* <div className="input-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            className="textarea"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setChallenge(e.target.value)}
          />
        </div> */}

        <button>Create Challenge</button>
      </form>
    </section>
  );
}
