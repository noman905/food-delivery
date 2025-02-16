
import { GiChickenOven } from "react-icons/gi";
import { RiTimeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";



export const Hero = () => {
  return (
    <section
      className="hero flex flex-col md:flex-row gap-[1.5rem] h-auto md:h-[25rem] w-[93%] mx-auto 
                 bg-[#8ed9e7] items-center rounded-[2.4rem] overflow-hidden"
    >
      {/* Left Section */}
      <div className="left flex flex-col p-[1.5rem] gap-[1.5rem] w-full md:w-[53%]">
        <h1 className="text-4xl leading-[1.45] lg:text-5xl font-medium lg:leading-[1.35] text-center md:text-left">
          Spicy Delicious <br />Chicken Wings
        </h1>
        <p className="text-base md:text-lg text-center md:text-left">
          These spicy chicken wings are crispy, tender, and drenched in a bold, fiery sauce.
          Perfectly balanced in heat and flavor in every bite, making them irresistible to spice lovers!
        </p>
        <div className="flex justify-center md:justify-start gap-[1.5rem]">
          <NavLink>
            <button className="flex border-2 items-center gap-[0.5rem] bg-gray-100 
                               justify-center rounded-full p-[0.3rem]">
              <RiTimeFill /> 30 Minutes
            </button>
          </NavLink>
          <NavLink to="/Meat">
            <button className="flex border-2 rounded-full gap-[0.5rem] p-[0.4rem] bg-gray-100">
              <GiChickenOven /> Chicken
            </button>
          </NavLink>
        </div>
        <div className="flex justify-center md:justify-start">
          <NavLink to="/viewfoods">
            <button className="rounded-full p-[0.4rem] w-[9.375rem] bg-black text-white">
              View All Foods
            </button>
          </NavLink>
        </div>
      </div>

      {/* Right Section */}
      <div className="right w-full md:w-[47%] h-[15rem] md:h-full flex items-center justify-center">
        <img
          src="./herochicken.jpg"
          alt="Spicy Chicken Wings"
          className="w-full h-full object-cover 
                     rounded-tl-none rounded-tr-none rounded-bl-[2.4rem] rounded-br-[2.4rem]
                     md:rounded-l-none md:rounded-r-[2.4rem]"
        />
      </div>
    </section>
  );
};






