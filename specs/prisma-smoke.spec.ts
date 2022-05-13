import {Exercise, PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

describe("Prisma Smoke Tests", ()=>{

    test("Create an Exercise",async ()=>{
        const result:Exercise = await prisma.exercise.create({data:{description:"Smoke Test 2"}});
        console.log(result);
    })

})