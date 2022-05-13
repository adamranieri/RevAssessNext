import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router"
import { Assessment, Exercise, PrismaClient, Test } from "@prisma/client";
import { ExerciseFull } from "../../dtos";
import dateify from "../../utils/dateify";
const prisma = new PrismaClient();

export async function getServerSideProps(context: GetServerSidePropsContext){
    const {id} = context.query

    if( typeof id === "string"){
        const exerciseFetched = await prisma.exercise.findFirst({
            where:{id:{equals:id}},
            include: {
                assessments:{
                include:{
                    tests:true
                }
            }}
        });
        

        if(exerciseFetched){
            return {props:{exercise:JSON.parse(JSON.stringify(exerciseFetched))}}
        }else{
            return {notFound:true}
        }
        
    }else{
        return {notFound:true}
    }
}

export type FullExercise = (Exercise & { assessments: (Assessment & {tests: Test[];})[];})

export default function ExerciseBreakdown(props:{exercise:FullExercise}){
    const {exercise} = props;dateify(exercise);//IMPORTANT
    
    
    
    console.log(exercise)
    
    return(<h1>
        hi
    </h1>)
    
    
}