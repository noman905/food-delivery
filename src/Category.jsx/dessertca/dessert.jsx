
import { dessertarray } from "./desserarray"
import { Dessertcard } from "./dessercard"

export const Dessert=(()=>{

 return(

<>
<section className="m-8">
    <h1 className="text-4xl font-semibold m-auto flex justify-center items-center ">Dessert All Items</h1>

   <ul className="flex flex-wrap  m-auto p-5 gap-8 w-[95%] justify-center items-center ">

 {dessertarray.map((current,ind)=>{


    return <Dessertcard key={ind} current={current}/>



 })}
    

   </ul>
   </section>
   </>

   

)


})



