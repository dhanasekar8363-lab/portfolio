import { motion } from "framer-motion";
import { Code2, FolderGit2, BadgeCheck, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: (
      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
        <FolderGit2 className="w-8 h-8 text-blue-600" />
      </div>
    ),
    value: "10+",
    title: "Projects Built",
  },
  {
    icon: (
      <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center">
        <Code2 className="w-8 h-8 text-violet-600" />
      </div>
    ),
    value: "10+",
    title: "Technologies",
  },
  {
    icon: (
      <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
        <BadgeCheck className="w-8 h-8 text-amber-500" />
      </div>
    ),
    value: "2+",
    title: "Certificates",
  },
  {
    icon: (
      <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
        <GraduationCap className="w-8 h-8 text-emerald-600" />
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <div className="mb-5">
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold">
                {item.value}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}