import { FolderGit2, Code2, GraduationCap, BriefcaseBusiness } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-blue-600 font-semibold">
              ABOUT ME
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Passionate App Developer
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Hi, I'm <strong>Dhanasekar Y</strong>, an Artificial Intelligence
              & Data Science student passionate about building modern mobile
              and web applications that solve real-world problems.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              I enjoy developing Android apps using Kotlin and full-stack web
              applications using React, TypeScript, Node.js, Express, and
              Supabase. My goal is to become a professional software engineer
              and contribute to impactful products.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="p-6 rounded-2xl shadow bg-white border-l-4 border-blue-500 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <FolderGit2 className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-blue-600 text-3xl font-bold">10+</h3>
              <p className="mt-2 text-gray-500">Projects Built</p>
            </div>

            <div className="p-6 rounded-2xl shadow bg-white border-l-4 border-violet-500 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                <Code2 className="text-violet-600 w-7 h-7" />
              </div>
              <h3 className="text-violet-600 text-3xl font-bold">10+</h3>
              <p className="mt-2 text-gray-500">Technologies</p>
            </div>

            <div className="p-6 rounded-2xl shadow bg-white border-l-4 border-emerald-500 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <GraduationCap className="text-emerald-600 w-7 h-7" />
              </div>
              <h3 className="text-emerald-600 text-3xl font-bold">AI & DS</h3>
              <p className="mt-2 text-gray-500">Student</p>
            </div>

            <div className="p-6 rounded-2xl shadow bg-white border-l-4 border-orange-500 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <BriefcaseBusiness className="text-orange-500 w-7 h-7" />
              </div>
              <h3 className="text-orange-500 text-3xl font-bold">Open</h3>
              <p className="mt-2 text-gray-500">To Opportunities</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}