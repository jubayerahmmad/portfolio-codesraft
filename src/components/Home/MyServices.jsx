import { BsGear } from "react-icons/bs";
import { FaCloudUploadAlt, FaMobileAlt } from "react-icons/fa";
import { FaDesktop, FaNodeJs } from "react-icons/fa6";

const MyServices = () => {
  return (
    <section
      className="w-full relative py-6"
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

      <div className="max-w-7xl mx-auto relative px-4">
        {/* header */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="section-header">MY CORE EXPERTISE</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Unlocking Digital Potential
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
          {/* card1 */}
          <div className="p-4 rounded-xl bg-cyan-950/90">
            <div className="flex justify-start flex-col gap-2">
              <span className="rounded-full p-3 w-fit bg-cyan-700/50">
                <FaDesktop size={32} />
              </span>
              <h3 className="text-xl md:text-2xl font-bold">
                Front-end Development
              </h3>
              <p className="">
                Building dynamic and interactive user interfaces with React,
                leveraging its component-based architecture for scalable
                applications.
              </p>
            </div>
          </div>

          {/* card2 */}
          <div className="p-4 rounded-xl md:row-span-2 bg-cyan-700/80 lg:h-full">
            <div className="flex justify-start flex-col gap-2">
              <span className="rounded-full p-3 w-fit bg-cyan-700/90">
                <BsGear size={32} />
              </span>
              <h3 className="text-xl md:text-2xl font-bold">
                Strategic Development
              </h3>
              <p className="">
                I develop comprehensive, strategic web solutions, including best
                practices for performance optimization and user experience.
              </p>
              <img
                src="https://i.ibb.co/cX74YrpQ/mushvig-niftaliyev-vln-Zm-Jw7p-QE-unsplash.jpg"
                alt="Strategic Development"
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* card3 */}
          <div className="p-4 rounded-xl bg-cyan-950/90">
            <div className="flex justify-start flex-col gap-2">
              <span className="rounded-full p-3 w-fit bg-cyan-700/50">
                <FaMobileAlt size={32} />
              </span>
              <h3 className="text-xl md:text-2xl font-bold">
                Responsive Web Design
              </h3>
              <p className="">
                Ensuring your website looks great and functions perfectly on any
                screen size, from mobile devices to large desktops.
              </p>
            </div>
          </div>

          {/* card4 */}
          <div className="p-4 rounded-xl bg-cyan-950/90">
            <div className="flex justify-start flex-col gap-2">
              <span className="rounded-full p-3 w-fit bg-cyan-700/50">
                <FaNodeJs size={32} color="" />
              </span>
              <h3 className="text-xl md:text-2xl font-bold">
                JavaScript Expertise
              </h3>
              <p className="">
                Writing clean, efficient, and maintainable JavaScript code to
                power robust and interactive web applications.
              </p>
            </div>
          </div>

          {/* card5 */}
          <div className="p-4 rounded-xl bg-cyan-950/90">
            <div className="flex justify-start flex-col gap-2">
              <span className="rounded-full p-3 w-fit bg-cyan-700/50">
                <FaCloudUploadAlt size={32} color="" />
              </span>
              <h3 className="text-xl md:text-2xl font-bold">API Integration</h3>
              <p className="">
                Seamlessly integrating with RESTful APIs to fetch, display, and
                manage data, creating dynamic content experiences.
              </p>
            </div>
          </div>
        </div>
        {/* grid cards */}
      </div>
    </section>
  );
};

export default MyServices;
