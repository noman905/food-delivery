import { Categorycard } from "./Categorycard"

const Categrorie=[
   {
    link:"./Breakfast.jpg",
    name:"Breakfast",
    color:"",

   },
   {
    link:"./Vegan.jpg",
    name:"Vegan",
    color:"",

   }
   ,  {
    link:"./Meat.jpg",
    name:"Meat",
    color:"",

   }
   ,  {
    link:"./Dessert.jpg",
    name:"Dessert",
    color:"",

   }
   ,  {
    link:"./Lunch.jpg",
    name:"Lunch",
    color:"",

   }
  

]



export const Categories = () => {
   return(
<>
   <section className="w-[91%] m-8 flex flex-col gap-6">
   <div>
       <h1 className="text-3xl font-bold">Category</h1>


   </div>
   <ul className="flex gap-8   justify-center items-center flex-wrap">
       {

      Categrorie.map((current,idx)=>{

         return <Categorycard key={idx}  current={current}/>



      })

       }
   </ul>

   <div>


   </div>
   </section>
   </>
   )
}



