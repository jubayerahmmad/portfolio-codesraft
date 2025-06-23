import { FaCode, FaServer, FaTools } from "react-icons/fa";

const skillsData = [
  {
    category: "Frontend",
    icon: <FaCode size={20} className="text-cyan-400" />,
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 70 },
      { name: "TanStack Query", level: 60 },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer size={20} className="text-cyan-400" />,
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 65 },
      { name: "Firebase", level: 50 },
    ],
  },
];

const tools = [
  {
    icon: <FaTools size={20} className="text-cyan-400" />,
    items: ["Git", "GitHub", "Netlify", "Vercel", "Stripe", "JWT", "Vite"],
  },
];

const Skills = () => {
  return (
    <section className="w-full px-4 py-20 bg-cyan-800/20 text-white">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            <span className="text-cyan-400">My Skills</span> & Tools
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Technologies and tools I work with regularly, refined through
            practical project experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {skillsData.map((set, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 p-6 rounded-xl border border-slate-700"
            >
              <div className="flex items-center gap-2 mb-4">
                {set.icon}
                <h3 className="text-xl font-semibold text-cyan-300">
                  {set.category}
                </h3>
              </div>
              {set.items.map((skill, i) => (
                <div key={i} className="mb-4 group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Tools */}
          <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 col-span-1 md:col-span-2">
            {tools.map((tool, i) => (
              <div key={i}>
                <div key={i} className="flex items-center gap-2 mb-4">
                  {tool.icon}
                  <h3 className="text-xl font-semibold text-cyan-300">Tools</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {tool.items.map((item, i) => (
                    <p
                      key={i}
                      className="text-xl font-semibold px-6 py-1.5 bg-cyan-950/40 border border-cyan-700/60 rounded-lg"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
