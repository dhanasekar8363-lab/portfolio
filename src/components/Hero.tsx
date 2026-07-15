import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#FFF5F7]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 px-8">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.7}}
        >

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">

            App Developer | AI & Data Science Student

          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">

            Hi,

            <br />

            I'm

            <span className="text-blue-600">

              {" "}Dhanasekar

            </span>

          </h1>

          <p className="text-gray-600 mt-8 text-xl leading-9">

            I build modern mobile and web applications that solve real-world
            problems using React, Kotlin and modern technologies.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 text-white px-7 py-4 rounded-xl">

              View Projects

            </button>

            <button className="border px-7 py-4 rounded-xl">

              Contact Me

            </button>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

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
          className="flex justify-center items-center"
        >

          <div className="w-[420px] h-[420px] rounded-full bg-blue-100 flex items-center justify-center">

            <div className="p-2 bg-white rounded-full shadow-2xl">
              <img
                src="/profile/profile.png"
                alt="Dhanasekar"
                className="w-[380px] h-[380px] object-cover rounded-full"
              />
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;