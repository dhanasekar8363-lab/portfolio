import { motion } from "framer-motion";
import { Code2, FolderGit2, Award, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: <FolderGit2 size={34} />,
    value: "10+",
    title: "Projects Built",
  },
  {
    icon: <Code2 size={34} />,
    value: "10+",
    title: "Technologies",
  },
  {
    icon: <Award size={34} />,
    value: "2+",
    title: "Certificates",
  },
  {
    icon: <GraduationCap size={34} />,
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
              <div className="text-blue-600 mb-5">
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