import { Request, Response } from "express";
import { BasicContactsSelect, contactUsSchema } from "./model";


export async function handleContact(req: Request, res: Response) {
  const payload = contactUsSchema.parse(req.body);

  const result = await req.prisma.contactUs.create({
    data: payload,
    select: BasicContactsSelect,
  });

  return res.status(201).json(result);
}