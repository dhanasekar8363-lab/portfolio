const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Supabase", "PostgreSQL", "Firebase"],
  },
  {
    title: "Mobile",
    skills: ["Kotlin", "Android SDK", "Jetpack", "Capacitor"],
  },
  {
    title: "Programming",
    skills: ["JavaScript", "TypeScript", "Kotlin", "Java", "SQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma"],
  },
  {
    title: "Currently Learning",
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

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl shadow p-5 sm:p-6 lg:p-8 h-full hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-blue-100 text-blue-700 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}