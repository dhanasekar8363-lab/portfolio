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
      className="py-24 bg-gray-50"
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

            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow">

              <Mail className="text-blue-600" />

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">
                  dhanasekar8363@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow">

              <Phone className="text-blue-600" />

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">
                  +91 9677338363
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow">

              <MapPin className="text-blue-600" />

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">
                  Tamil Nadu, India
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

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