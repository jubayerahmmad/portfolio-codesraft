import { DiMongodb } from "react-icons/di";
import { FaJs, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const CTA = () => {
  return (
    <section
      className="relative pt-20 px-4"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/tws79w8y/ladislav-sh-Y9-ENVevoo-Ic-unsplash.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* overlay */}
      <div className="overlay"></div>

      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left */}
        <div className="flex-1 text-center md:text-left text-white space-y-6 pb-6">
          <h2 className="text-3xl lg:text-5xl font-extrabold">
            <span className="block text-cyan-400">Ready to Build Your</span>{" "}
            Next Digital Project?
          </h2>
          <p className="text-sm md:text-lg font-light max-w-2xl mx-auto md:mx-0">
            Whether you have a groundbreaking idea or need help enhancing an
            existing web application, I'm here to bring your vision to life with
            clean, efficient code and intuitive design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
            <button className="btn-primary">CONTACT ME</button>
            <button className="btn-secondary">VIEW MY RESUME</button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end relative w-full md:w-auto mt-10">
          <img
            src="https://i.ibb.co/60mTQ5K3/formal-man-removebg-preview.png"
            alt="Web Development Collaboration"
            className="h-96 object-contain rounded-lg shadow-xl"
          />

          {/* floating badges*/}
          <div className=" absolute top-12 left-2 cta-float">
            <FaReact size={20} color="cyan" />
            React.js
          </div>
          <div className=" absolute top-32 right-0 cta-float">
            <RiTailwindCssFill size={20} color="cyan" /> Tailwind CSS
          </div>
          <div className=" absolute top-52 left-1 cta-float">
            <FaJs size={20} color="orange" /> JavaScript
          </div>
          <div className=" absolute top-72 right-3 cta-float">
            <DiMongodb size={20} color="green" /> MongoDB
          </div>
          <div className=" absolute top-80 left-1 cta-float">
            <SiExpress size={20} color="green" /> Express.js
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
