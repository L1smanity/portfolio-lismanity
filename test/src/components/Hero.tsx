import hero from "../assets/b032d241-4fdd-49e8-81b2-f835c249b8b8.png"; // Ensure this path is correct

const Hero: React.FC = () => {
  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center mt-8 px-4  ">
        <div className="flex flex-col items-start w-full md:w-2/5">
          <div className="pl-24">
            <h6 className="text-sm md:text- font-mono text-black font-semibold text-center md:text-left w-full">
              Hi, my name is Labinot.
            </h6>
            <h1 className="text-2xl md:text-6xl font-mono text-black font-bold text-center md:text-left w-full">
              I design for growth.
            </h1>
            <p className="mt-4 text-base md:text-lg font-medium tracking-wide font-mono text-black text-center md:text-left">
              As a UI/UX Designer i bring design to their life.
              <br />
              Top notch and impactful digital experience.
            </p>
            <button
              className="mx-auto md:mx-0 bg-[rgb(207, 207, 207)] border-2 border-white border-r-gray-700 border-b-gray-700 border-l-gray-500 border-t-gray-500 py-2 px-4 text-black font-bold rounded transition 
                       shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] mt-6 cursor-pointer hover:bg-gray-200"
              style={{
                padding: "10px 60px",
                boxShadow:
                  "inset -2px -2px 0px #fff, inset 2px 2px 0px #808080",
              }}
            >
              Fire
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-full max-w-[400px]">
            <img
              src={hero}
              alt="Old Toys"
              className="w-full h-auto object-cover z-20 relative"
            />
            <div
              className="absolute inset-0 shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] z-10"
              style={{
                background: "rgba(255, 255, 255, 0.5)",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
