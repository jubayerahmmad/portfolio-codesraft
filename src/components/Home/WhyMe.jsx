const WhyMe = () => {
  return (
    <section className="w-full bg-cyan-950/40 py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* row 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-4">
          {/* Left  */}
          <div className="flex justify-center w-full lg:w-1/3">
            <img
              src="https://i.ibb.co/vCV1jc8X/alvaro-reyes-f-SWOVc3e06w-unsplash.jpg"
              alt="collab image"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right*/}
          <div className=" text-white space-y-3 w-full lg:w-2/3">
            <h2 className="text-xl md:text-2xl font-extrabold block text-cyan-400">
              Why Work With Me?
            </h2>
            <h3 className="text-2xl md:text-3xl text-balance">
              My Approach to Web Development
            </h3>
            <p className="text-balance">
              I pride myself on transforming complex requirements into elegant,
              user-centric web applications. My focus is on writing clean,
              scalable code that delivers tangible results and exceptional user
              experiences.
            </p>

            {/* Progress */}
            <div className="space-y-2 pt-4">
              <div className="space-y-0.5">
                <div className="flex justify-between">
                  <p className="text-lg font-medium text-gray-300">
                    Responsive Design
                  </p>
                  <p className="text-lg font-semibold text-cyan-400">100%</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-cyan-500 h-1.5 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex justify-between">
                  <p className="text-lg font-medium text-gray-300">
                    Performance Optimization
                  </p>
                  <p className="text-lg font-semibold text-cyan-400">85%</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-cyan-500 h-1.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex justify-between">
                  <p className="text-lg font-medium text-gray-300">
                    Best Practices
                  </p>
                  <p className="text-lg font-semibold text-cyan-400">90%</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className="bg-cyan-500 h-1.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>

            <button className="btn-primary">LET'S DISCUSS YOUR PROJECT</button>
          </div>
        </div>

        {/* row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 py-4">
          {/* Left  */}
          <div className="flex justify-center w-full lg:w-1/3">
            <img
              src="https://i.ibb.co/0RZBFS3s/tai-bui-Hz-VBe-8frwc-unsplash.jpg"
              alt="collab image"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right*/}
          <div className=" text-white space-y-3 w-full lg:w-2/3">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              <span className="block text-cyan-400">My Commitment to</span>{" "}
              Modern Web Development
            </h2>
            <p className="text-balance">
              In today's rapidly evolving digital landscape, applications demand
              not just functionality, but also outstanding user experience and
              maintainability. I leverage the latest technologies to deliver
              forward-thinking solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              <div className="flex flex-col items-center sm:items-start p-4 bg-cyan-100 rounded-lg shadow-md">
                <p className="text-2xl font-bold text-cyan-950">100%</p>
                <p className="text-lg text-black mt-2 text-center sm:text-left">
                  Responsive Coverage
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start p-4 bg-cyan-100 rounded-lg shadow-md">
                <p className="text-2xl font-bold text-cyan-950">Optimal</p>
                <p className="text-lg text-black mt-2 text-center sm:text-left">
                  Performance Focus
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start p-4 bg-cyan-100 rounded-lg shadow-md">
                <p className="text-2xl font-bold text-cyan-950">5+</p>
                <p className="text-lg text-black mt-2 text-center sm:text-left">
                  Technologies Used
                </p>
              </div>
            </div>

            <button className="btn-primary">DOWNLOAD MY RESUME</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
