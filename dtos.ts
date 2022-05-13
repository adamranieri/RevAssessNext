import { Assessment, Test } from "@prisma/client"

export interface ExerciseLight{
    id:string 
    description:string 
    createdAt: number
}

export interface ExerciseFull{
    id:string 
    description:string 
    createdAt: number 
    assessments:Assessment[]
}

export interface ExerciseForm{
    description: string
}

export interface RevaTest{
    name: string
    points: number 
    passed: boolean
}

export interface RevAssessment{
    associateEmail:string
    exerciseId: string 
    deliverable:string
    tests:RevaTest[]
}