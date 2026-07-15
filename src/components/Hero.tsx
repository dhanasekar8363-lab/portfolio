import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-24 lg:py-32 flex items-center bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-10 xl:gap-14 px-8">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.7}}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">

            App Developer | AI & Data Science Student

          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-8 leading-tight">

            Hi,

            <br />

            I'm

            <span className="text-blue-600">

              {" "}Dhanasekar

            </span>

          </h1>

          <p className="text-gray-600 mt-8 text-base sm:text-lg leading-8">

            I build modern mobile and web applications that solve real-world
            problems using React, Kotlin and modern technologies.

          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto">

            <button className="bg-blue-600 text-white px-7 py-4 rounded-xl w-full sm:w-auto">

              View Projects

            </button>

            <button className="border px-7 py-4 rounded-xl w-full sm:w-auto">

              Contact Me

            </button>

          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">

            <a
              href="https://github.com/dhanasekar8363-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-900 hover:text-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-2xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/dhanasekar-y-492630396/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0A66C2] hover:text-[#004182] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:dhanasekar8363@gmail.com"
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#EA4335] hover:text-[#C5221F] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-2xl"
            >
              <MdEmail />
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{opacity:0,scale:.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:.8}}
          className="mb-6 lg:mb-0 flex justify-center"
        >

          <div className="p-2 bg-white rounded-full shadow-2xl">
            <img
              src="/profile/profile.png"
              alt="Dhanasekar"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] rounded-full object-cover border-8 border-white shadow-2xl"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;