import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { ExerciseForm, ExerciseLight, RevAssessment, RevaTest } from '../../dtos'
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest,res: NextApiResponse<any>){
    
    if(req.method === "POST"){
        const revAssessment:RevAssessment = req.body
        const tests:RevaTest[] = revAssessment.tests;
        
        const assessment = await prisma.assessment.create({data:{
            deliverable:revAssessment.deliverable, 
            exerciseId:revAssessment.exerciseId, 
            associateEmail:revAssessment.associateEmail}})

            const savedTests = await prisma.test.createMany({data:tests.map(t =>({...t, assessmentId:assessment.id}))})
            console.log(savedTests)
        
        res.status(201).send("Assessment Created")
    }else{
        res.status(415)
    }

}