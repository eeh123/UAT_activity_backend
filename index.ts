import * as dotenv from "dotenv";
import "express-async-errors";
import express, { Express, NextFunction, Request, Response } from "express";

dotenv.config();

import { PrismaClient } from "@prisma/client";
import contactRouter from "./src/modules/contact/controller";
import { errorHandlerMiddleware } from "./src/middleware/error";

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

declare global {
  namespace Express {
    export interface Request {
      prisma: PrismaClient;
    }
  }
}

export const initPrisma = (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient();
  req.prisma = prisma;

  next();
};

app.use(initPrisma);

app.get("/", (req: Request, res: Response) => {
  console.log("triggered root route");
  res.send("Express + TypeScript Server");
});



// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   next();
// });
var cors = require('cors')
app.use(cors()) 
app.use("/contact", contactRouter);

app.use(errorHandlerMiddleware);

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
