const Hero = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center pt-24"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HSvKcmc/fotis-fotopoulos-LJ9-KY8p-IH3-E-unsplash.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* overlay */}
      <div className="overlay"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left text-white space-y-6 md:space-y-8">
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            <span className="block text-cyan-400">Crafting Dynamic</span> Web
            Experiences <span className="text-cyan-400">For Your</span> Digital
            Goals
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-2xl mx-auto md:mx-0">
            As a passionate Frontend Developer, I specialize in building
            responsive, performant, and user-friendly web applications using
            React, Vite, and Tailwind CSS.
          </p>
          <button className="btn-primary ">EXPLORE MY PROJECTS</button>
        </div>

        {/* Right */}
        <div className="flex justify-end relative">
          {/* Main Img*/}
          <img
            src="https://i.ibb.co/60mTQ5K3/formal-man-removebg-preview.png"
            alt="profile picture"
            className="object-contain rounded-lg"
          />

          {/* floating cards */}
          <div className="top-20 left-6 floating-cards">
            <p className="text-2xl font-bold">5+</p>
            <p className="text-sm">Projects Completed</p>
          </div>

          <div className="top-1/2 right-0 floating-cards">
            <p className="text-2xl font-bold">2</p>
            <p className="text-sm">Years Experience</p>
          </div>

          <div className="bottom-20 left-10 floating-cards">
            <p className="text-2xl font-bold">React, JS,</p>
            <p className="text-sm">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
