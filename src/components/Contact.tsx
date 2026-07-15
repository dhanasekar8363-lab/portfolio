import {
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            I'm currently looking for internships, freelance work,
            and part-time app development opportunities.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-6">

            <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                <Mail className="text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">
                  dhanasekar8363@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-50 to-white rounded-2xl border border-green-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                <Phone className="text-green-600" />
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">
                  +91 9677338363
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-rose-50 to-white rounded-2xl border border-rose-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center shrink-0">
                <MapPin className="text-rose-500" />
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">
                  Tamil Nadu, India
                </p>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl border border-blue-100 shadow-xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Connect With Me
            </h3>

            <div className="space-y-4">

              <a
                href="https://github.com/dhanasekar8363-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-4 rounded-2xl bg-gray-900 text-white hover:scale-[1.02] transition"
              >
                <div className="flex items-center gap-4">
                  <FaGithub size={20} />
                  <div>
                    <h3 className="font-semibold text-base">GitHub</h3>
                    <p className="text-xs text-gray-300">
                      github.com/dhanasekar8363-lab
                    </p>
                  </div>
                </div>

                <span>→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dhanasekar-y-492630396/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-4 rounded-2xl bg-[#0A66C2] text-white hover:scale-[1.02] transition"
              >
                <div className="flex items-center gap-4">
                  <FaLinkedin size={20} />
                  <div>
                    <h3 className="font-semibold text-base">LinkedIn</h3>
                    <p className="text-xs text-blue-100">
                      linkedin.com/in/dhanasekar-y-492630396
                    </p>
                  </div>
                </div>

                <span>→</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-between bg-blue-600 text-white rounded-2xl py-3 px-4 hover:bg-blue-700 transition"
              >
                <div className="flex items-center gap-3">
                  <Download size={20} />
                  <div>
                    <h3 className="font-semibold text-base">Download Resume</h3>
                    <p className="text-xs text-blue-100">
                      PDF • Updated 2026
                    </p>
                  </div>
                </div>

                <span>↓</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}