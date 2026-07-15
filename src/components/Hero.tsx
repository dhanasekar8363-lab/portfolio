import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-screen flex items-center bg-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center px-8">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.7}}
          className="text-center lg:text-left"
        >

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">

            App Developer | AI & Data Science Student

          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-8 leading-tight">

            Hi,

            <br />

            I'm

            <span className="text-blue-600">

              {" "}Dhanasekar

            </span>

          </h1>

          <p className="text-gray-600 mt-8 text-lg lg:text-xl leading-8">

            I build modern mobile and web applications that solve real-world
            problems using React, Kotlin and modern technologies.

          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

            <button className="bg-blue-600 text-white px-7 py-4 rounded-xl">

              View Projects

            </button>

            <button className="border px-7 py-4 rounded-xl">

              Contact Me

            </button>

          </div>

          <div className="flex justify-center lg:justify-start gap-6 mt-8 text-3xl">

            <a
              href="https://github.com/dhanasekar8363-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/dhanasekar-y-492630396/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:dhanasekar8363@gmail.com"
              className="hover:text-blue-600 transition"
            >
              <MdEmail />
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{opacity:0,scale:.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:.8}}
          className="flex justify-center mt-10 lg:mt-0"
        >

          <div className="p-2 bg-white rounded-full shadow-2xl">
            <img
              src="/profile/profile.png"
              alt="Dhanasekar"
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-[430px] lg:h-[430px] rounded-full object-cover border-8 border-white shadow-2xl"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;