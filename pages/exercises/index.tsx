import { GetServerSidePropsContext } from "next";
import { PrismaClient } from "@prisma/client";
import { ExerciseLight } from "../../dtos";
const prisma = new PrismaClient();

export async function getServerSideProps(constext: GetServerSidePropsContext) {
    const exercises = await prisma.exercise.findMany();
    const lightWeightExercises:ExerciseLight[] = exercises.map(ex => ({...ex,createdAt:ex.createdAt.getTime()}))
    return{
        props:{lightWeightExercises}
    }
}


export default function ExercisePage(props:{lightWeightExercises:ExerciseLight[]}){
    
   const {lightWeightExercises} = props;
   const ExerciseList:any = () => lightWeightExercises.map((ex => <li key={ex.id}> {ex.description} {ex.createdAt}</li>))

    return(<>
    <h1>Exercise page</h1>

    <h4>Exercises</h4>
        <ExerciseList/>
    <ul>

    </ul>
    </>)
}