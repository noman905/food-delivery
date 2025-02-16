
export const Inbox = () => {
  return (
    <section
      className="hero flex flex-col items-center justify-center gap-4 w-full md:w-[70%] h-auto md:h-[300px] 
                 m-auto mb-10 bg-[#b8e5ef] px-6 py-8 text-center
                 rounded-[6px] md:rounded-[2.4rem]"
      style={{ backgroundImage: 'url("./choose/inbox.webp")', backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-white font-Cambaria leading-tight">
        Deliciousness in your inbox
      </h1>

      {/* Description (Left on small, Center on Large Screens) */}
      <p className="text-white text-sm md:text-base text-left lg:text-center w-full md:w-[85%]">
        Get ready to enjoy the best of food at your fingertips! With exclusive offers, 
        tempting menu updates, and special promotions delivered directly to your inbox.
      </p>

      {/* Email Input & Button */}
      <div className="flex flex-col md:flex-row w-full max-w-lg mt-3">
        <input
          type="text"
          className="w-full md:w-3/4 p-3 rounded-[5px] md:rounded-l-lg focus:outline-none"
          placeholder="Enter your Email"
        />
        <button className="w-full md:w-[150px] p-3 bg-black text-white rounded-[5px] md:rounded-r-lg">
          Submit
        </button>
      </div>
    </section>
  );
};















