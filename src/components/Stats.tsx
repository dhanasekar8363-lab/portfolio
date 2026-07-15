import { motion } from "framer-motion";
import { Code2, FolderGit2, BadgeCheck, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center">
        <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-600" />
      </div>
    ),
    value: "10+",
    title: "Projects Built",
  },
  {
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-violet-100 flex items-center justify-center">
        <Code2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-violet-600" />
      </div>
    ),
    value: "10+",
    title: "Technologies",
  },
  {
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-amber-100 flex items-center justify-center">
        <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-500" />
      </div>
    ),
    value: "2+",
    title: "Certificates",
  },
  {
    icon: (
      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-emerald-100 flex items-center justify-center">
        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-emerald-600" />
      </div>
    ),
    value: "AI & DS",
    title: "Student",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0"
            >
              <div className="mb-0 sm:mb-4 shrink-0">
                {item.icon}
              </div>

              <div>

              <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                {item.value}
              </h2>

              <p className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-2">
                {item.title}
              </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}