import { Router } from "express";
import { handleContact } from "./service";

const contactRouter = Router();

contactRouter.post("/", handleContact);

export default contactRouter;
