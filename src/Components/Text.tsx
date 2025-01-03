import Typewriter from "typewriter-effect";

const TextPart = () => {
  return (
    <div className=" col-span-0.5 h-[500px] w-screen text-roboto  p-10 m-0   text-white  flex flex-col justify-center items-start">
      <h1
        className="lg:text-9xl text-5xl"
        style={{ fontFamily: "Pool", WebkitTextStroke: "1px black" }}
      >
        Cute Deadpool
      </h1>

      <div className="text-4xl lg:text-5xl lg:mt-8 lg:ml-3" style={{ color: "#ff0000" }}>
        <Typewriter
          options={{
            strings: ["Neweracy", "Little Pool"],

            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default TextPart;
