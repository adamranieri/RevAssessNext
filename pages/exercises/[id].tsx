import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getServerSideProps(context: GetServerSidePropsContext){
    const {id} = context.query
    if( typeof id === "string"){
        const exercise = await prisma.exercise.findFirst({
            where:{id:{equals:id}},
            include: {assessments:true}
        })
        return {props:{something:"wassup"}}
    }
    

}

export default function ExerciseBreakdown(){

    const params  = useRouter();
    const {id} = params.query
    

    return(<h1>My id is {id}</h1>)
}