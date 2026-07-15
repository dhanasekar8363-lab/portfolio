const skillCategories = [
  {
    title: "Frontend",
    icon: "💻",
    skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: "🗄️",
    skills: ["Node.js", "Express.js", "Supabase", "PostgreSQL", "Firebase"],
  },
  {
    title: "Mobile",
    icon: "📱",
    skills: ["Kotlin", "Android SDK", "Jetpack", "Capacitor"],
  },
  {
    title: "Programming",
    icon: "⚡",
    skills: ["JavaScript", "TypeScript", "Kotlin", "Java", "SQL"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma"],
  },
  {
    title: "Currently Learning",
    icon: "🚀",
    skills: ["Machine Learning", "Docker", "REST APIs", "System Design"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            I enjoy building modern Android and full-stack web applications
            using these technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

          {skillCategories.map((category, index) => {
            const colors = [
              { card: "bg-blue-50 border-blue-200",     heading: "text-blue-700",   badge: "bg-blue-100 text-blue-700"     },
              { card: "bg-purple-50 border-purple-200", heading: "text-purple-700", badge: "bg-purple-100 text-purple-700" },
              { card: "bg-green-50 border-green-200",   heading: "text-green-700",  badge: "bg-green-100 text-green-700"   },
              { card: "bg-yellow-50 border-yellow-200", heading: "text-yellow-700", badge: "bg-yellow-100 text-yellow-700" },
              { card: "bg-pink-50 border-pink-200",     heading: "text-pink-700",   badge: "bg-pink-100 text-pink-700"     },
              { card: "bg-cyan-50 border-cyan-200",     heading: "text-cyan-700",   badge: "bg-cyan-100 text-cyan-700"     },
            ];
            const c = colors[index] ?? colors[0];

            return (
              <div
                key={category.title}
                className={`rounded-2xl border shadow p-5 sm:p-6 lg:p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${c.card}`}
              >
                <div className="text-3xl mb-3">{category.icon}</div>

                <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${c.heading}`}>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium transition ${c.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}