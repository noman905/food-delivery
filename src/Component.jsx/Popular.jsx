import { populararray } from "./Populararray";
import { Popularcard } from "./Popularcrad";


export const Bestsales=(()=>{

return(

<>
<section className="m-8">
    <h1 className="text-4xl font-semibold m-auto flex justify-center items-center ">Our Best Sales</h1>

   <ul className="flex flex-wrap  m-6 p-5 gap-8 w-[95%] justify-center items-center ">

 {populararray.map((current,ind)=>{

    return <Popularcard key={ind} current={current}/>



 })}
    

   </ul>
   </section>
   </>

   

)


})



