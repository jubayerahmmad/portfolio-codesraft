import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/*Logo*/}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-cyan-500 myName">
            {"<"}Jubayer {"/>"}
          </h3>
          <p className="text-gray-400 text-sm">
            Crafting engaging web experiences with a passion for clean code and
            innovative design.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/jubayerahmmad"
              className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jubayer-ahmmad073/"
              className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="http://facebook.com/zubayer.ahmmad.1"
              className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-cyan-500">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                My Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-cyan-500">
            Contact Info
          </h4>
          <ul className="space-y-2">
            <li>
              <span className="text-gray-400">Email: </span>
              <a
                href="mailto:zubayersami510@gmail.com"
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                zubayersami510@gmail.com
              </a>
            </li>
            <li>
              <span className="text-gray-400">LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/jubayer-ahmmad073"
                target="_blank"
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                https://www.linkedin.com/in/jubayer-ahmmad073
              </a>
            </li>
            <li>
              <span className="text-gray-400">GitHub: </span>
              <a
                href="https://github.com/jubayerahmmad"
                target="_blank"
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                https://github.com/jubayerahmmad
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-8">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="text-lg font-bold myName">
          {"<"}Jubayer {"/>"}
        </span>{" "}
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
