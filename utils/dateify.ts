import { FullExercise } from "../pages/exercises/[id]";

/**changes the string dates back into actual date objects */
export default function dateify(exercise:FullExercise):void{
    exercise.createdAt = new Date(exercise.createdAt)
    exercise.assessments.forEach(a =>
        a.createdAt = new Date(a.createdAt)
   )
}