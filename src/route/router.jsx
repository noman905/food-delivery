import { createBrowserRouter, Outlet } from "react-router-dom";
import { Contact } from "./Contact/Contact";
import { About } from "../Category.jsx/About/About";
import { Header } from "../Component.jsx/Header";
import { Footer } from "../Component.jsx/footer";
import { App } from "../App";
import { Bestsales } from "../Component.jsx/Popular";
import { RouterProvider } from "react-router-dom";
import { Breakfast } from "../Category.jsx/Breakfast/Breakfast";
import { Vegan } from "../Category.jsx/vegan.jsx/vegan";
import { Meat } from "../Category.jsx/meat/meat";
import { Dessert } from "../Category.jsx/dessertca/dessert";
import { Lunch } from "../Category.jsx/lunch/lunch";
import { ErrorPage } from "./Contact/error";



export const Router=(()=>{

   const  router=createBrowserRouter([
          {
        path:"/",
        element:<Applayout />,
        errorElement:<ErrorPage />,

        children:[

             {

                path:"/",
                element:<App />
                   
              },
            
              {
            
                path:"/Best-sales",
            
                element:<Bestsales/>
              },
              {
            
                path:"/Breakfast",
            
                element:<Breakfast />
              },

              {
            
                path:"/Vegan",
            
                element:<Vegan />
              },
              {
            
                path:"/Meat",
            
                element:<Meat />
              },
              {
            
                path:"/Dessert",
            
                element:<Dessert />
              },
              {
            
                path:"/Lunch",
            
                element:<Lunch />
              },
              ,{
              path:"/Contact",
              element:<Contact />

              },
              ,{
                path:"/About",
                element:<About/>
  
                }
  

        ]
    },
       {
        path:"/viewfoods",
        element:<ViewFoods />
        
    }
   




])

return <RouterProvider  router={router}/>



})



const Applayout=()=>{



return(
    <>
    <Header></Header>
    <Outlet />
    <Footer></Footer>
    </>
)


}




const ViewFoods=()=>{



    return(
        <>
        <Header></Header>
        <Bestsales />
       <Breakfast />
        <Lunch />
         <Vegan />
         <Meat />  
         <Dessert />
        <Footer></Footer>
        </>
    )
    
    
    }