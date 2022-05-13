import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { ExerciseForm, ExerciseLight } from '../../dtos'
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest,res: NextApiResponse<any>){
    
    if(req.method === "POST"){
        const form: ExerciseForm = req.body;
        const exercise = await prisma.exercise.create({data:form}) ;
        const ex:ExerciseLight = {...exercise, createdAt:exercise.createdAt.getTime()}
        res.status(201).json(ex)
    }else{
        res.status(415)
    }

}