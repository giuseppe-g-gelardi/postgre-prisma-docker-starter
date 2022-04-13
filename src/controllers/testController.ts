import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const prismaTest = async (req: Request, res: Response): Promise<void> => {
  res.json('...hello!!')
}
