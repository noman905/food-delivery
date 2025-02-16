import { luncharray } from "./luncharray";
import { Lunchcard } from "./lunchcar";

export const Lunch=(()=>{

return(

<>
<section className="m-8">
    <h1 className="text-4xl font-semibold m-auto flex justify-center items-center ">Lunch All Items</h1>

   <ul className="flex flex-wrap  m-6 p-5 gap-8 w-[95%] justify-center items-center ">

 {luncharray.map((current,ind)=>{


    return <Lunchcard key={ind} current={current}/>



 })}
    

   </ul>
   </section>
   </>

   

)


})



