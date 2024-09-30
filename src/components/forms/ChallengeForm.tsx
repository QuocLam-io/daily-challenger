import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContactsModal } from "@/components/modals/ContactsModal";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

/* ---------------------------- Types/Interfaces ---------------------------- */

interface ChallengeFormProps {
  closeChallengerHandler: () => void;
}

type FormData = z.infer<typeof formSchema>;

/* ------------------------ Submit Challenge Handler ------------------------ */

const submitChallengeHandler = (userInfo: FormData) => {
  //TODO: Send to backend
};

/* ----------------------------------- Zod ---------------------------------- */

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z
    .string()
    .min(1, {
      message: "You mus give an email address.",
    })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(1, {
      message: "You must give a password",
    })
    .regex(passwordValidation, {
      message: "Your password is not valid",
    }),
});

/* -------------------------------------------------------------------------- */

export function ChallengeForm({ closeChallengerHandler }: ChallengeFormProps) {
  const [contactsModalOpen, setContactsModalOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    submitChallengeHandler(values);
    closeChallengerHandler();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Specify a Name" {...field} />
              </FormControl>
              <FormDescription>Give Your Full Name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Specify an Email" {...field} />
              </FormControl>
              <FormDescription>Give a Valid Email Address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Specify a Password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A password must be with Minimum 8 characters, at least one
                uppercase letter, one lowercase letter, one number and one
                special character.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        <Button
          type="button"
          onClick={() => {
            setContactsModalOpen(true);
          }}
        >
          Contacts button
        </Button>
        <ContactsModal
          contactsModalOpen={contactsModalOpen}
          setContactsModalOpen={setContactsModalOpen}
        />
      </form>
    </Form>
  );
}
