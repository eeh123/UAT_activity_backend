import { z } from "zod";
import { Prisma } from "@prisma/client";

export type Contact = {
  id: number;
  fullname: string;
  contactnum: string;
  email: string;
  company: string;
  message: string;
};

export const contactUsSchema = z.object({
  fullname: z.string({ required_error: "Full name is required." }),
  contactnum: z.string({ required_error: "Contact number is required." }),
  email: z.string({ required_error: "Email is required." }),
  company: z.string().optional(),
  heardFrom: z.string().optional(),
  message: z.string({ required_error: "Message is required." })
});

export type ContactUsSchema = z.infer<typeof contactUsSchema>;

export const BasicContactsSelect: Prisma.ContactUsSelect = {
  id: true,
  fullname: true,
  contactnum: true,
  email: true,
  company: true,
  heardFrom: true,
  message: true,
};
