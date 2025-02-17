import {Choosecard} from "./Choosecard";


const peoplechoosearray=[
    {
     link:"./choose/choosequality.avif",
     reason:"Get your food delivered quickly and on time, every time!  ",
     ready:"Ready to Order",
     bigreason:" Qulaity Food"
     
 
    },
    {
     link:"./choose/deliverychoose.avif",
     reason:"Enjoy a seamless, ordering experience with  delivery.",
     ready:"Ready to Order",
      bigreason:"Fast Delivery"
 
    }
    ,  {
     link:"./choose/cashchoose.avif",
     reason:" Enjoy convenience of paying cash when order arrives.",
     ready:"Ready to Order",
      bigreason:"Cash Payment"
 
    }
    ,  {
     link:"./choose/choosediscount.avif",
     reason:"Take advantage of our amazing discounts to enjoy your meals .",
     ready:"Ready to Order",
      bigreason:"High Discounts"
 
    }
]



export const Peoplechoose = () => {



return(

<>
<section className="m-2 ">
    <h1 className="text-4xl font-semibold m-auto mb-9 flex justify-center items-center ">Why People Choose Us</h1>

   <ul className="flex flex-wrap  m-2 sm:p-1  gap-2 w-[95%] justify-center items-center ">

     {peoplechoosearray.map((current,ind)=>{

    return <Choosecard key={ind} current={current}/>



 })}
    

   </ul>
   </section>
   </>

   

)


}












