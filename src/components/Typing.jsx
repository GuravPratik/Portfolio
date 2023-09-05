import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <Typewriter
      options={{
        strings: ["Computer Science Student", "Full Stack Developer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default Typing;
