const Intro = () => {
  return (
    <section className="py-20 bg-cyan-950/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Photo */}
        <div className="w-full md:w-1/3 bg-cyan-950/30 rounded-xl h-[300px] flex items-center justify-center font-semibold text-xl text-white">
          <img src="https://i.ibb.co/rRJ5w2dv/zuba-1.png" alt="Jubayer" />
        </div>

        {/* Intro */}
        <div className="max-w-2xl space-y-5 text-gray-300">
          <h2 className="text-3xl font-semibold text-white">
            Hello, I'm Jubayer Ahmmad.
          </h2>
          <p>
            I am a passionate Frontend Developer with a keen eye for creating
            intuitive and visually appealing web applications. My journey into
            the world of code began with a fascination for how digital
            experiences are built, and it quickly evolved into a dedication to
            crafting robust, scalable, and user-centric solutions.
          </p>
          <p>
            With expertise in modern JavaScript frameworks like React, coupled
            with the power of Tailwind CSS for rapid and responsive styling, I
            enjoy bringing ideas to life. I thrive on solving complex problems
            and continuously learning new technologies to stay at the forefront
            of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
