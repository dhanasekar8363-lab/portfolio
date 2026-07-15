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

            <div className="p-6 rounded-2xl shadow bg-white">
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="mt-2 text-gray-500">Projects Built</p>
            </div>

            <div className="p-6 rounded-2xl shadow bg-white">
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="mt-2 text-gray-500">Technologies</p>
            </div>

            <div className="p-6 rounded-2xl shadow bg-white">
              <h3 className="text-3xl font-bold text-blue-600">AI & DS</h3>
              <p className="mt-2 text-gray-500">Student</p>
            </div>

            <div className="p-6 rounded-2xl shadow bg-white">
              <h3 className="text-3xl font-bold text-blue-600">Open</h3>
              <p className="mt-2 text-gray-500">To Opportunities</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}