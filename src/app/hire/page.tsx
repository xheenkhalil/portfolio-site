"use client";
import { motion } from "framer-motion";
import { FaUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { MdWork, MdEmail } from "react-icons/md";
import { FaGraduationCap, FaCertificate, FaDownload } from "react-icons/fa";

const platforms = [
  {
    name: "Upwork",
    icon: FaUpwork,
    color: "text-[#6FDA44]",
    url: "https://upwork.com",
    desc: "Top Rated Freelancer",
  },
  {
    name: "Fiverr",
    icon: SiFiverr,
    color: "text-[#1DBF73]",
    url: "https://fiverr.com",
    desc: "Level 2 Seller",
  },
  {
    name: "Jobberman",
    icon: MdWork,
    color: "text-[#4B0082]",
    url: "https://jobberman.com",
    desc: "Open for Opportunities",
  },
];

const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "University of Technology",
    year: "2018 - 2022",
    desc: "Focused on Software Engineering and Data Structures.",
  },
  // Add more if needed
];

const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    year: "2023",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    year: "2022",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HirePage() {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "var(--brand-murrey)" }}
          >
            Work With Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Whether it&apos;s a complex data pipeline,
            a stunning web application, or technical writing, I&apos;m here to help.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* Freelance Platforms */}
          <section>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-3">
              <MdWork className="text-tiffany_blue" /> Freelance Profiles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  variants={itemVariants}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <platform.icon size={50} className={`${platform.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div>
                      <h3 className="text-xl font-bold">{platform.name}</h3>
                      <p className="text-sm text-gray-400">{platform.desc}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Education */}
            <section>
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaGraduationCap className="text-melon" /> Education
              </motion.h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-melon/50 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-melon">{edu.degree}</h3>
                    <p className="text-lg font-semibold">{edu.school}</p>
                    <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                    <p className="text-gray-300">{edu.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaCertificate className="text-raspberry_rose" /> Certifications
              </motion.h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-raspberry_rose/50 transition-colors"
                  >
                    <div className="p-3 rounded-full bg-white/5 text-raspberry_rose">
                      <FaCertificate size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">{cert.name}</h3>
                      <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Contact CTA */}
          <motion.section variants={itemVariants} className="text-center py-12">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-md">
              <h2 className="text-3xl font-bold mb-6">Let&apos;s Build Something Amazing</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Have a project in mind? Feel free to reach out via email or connect with me on my social platforms.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:youremail@example.com"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-tiffany_blue text-dark_black font-bold hover:opacity-90 transition-transform hover:scale-105 active:scale-95"
                >
                  <MdEmail size={20} />
                  Send me an Email
                </a>
                <a
                  href="/uploads/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 font-bold hover:bg-white/20 transition-transform hover:scale-105 active:scale-95"
                >
                  <FaDownload size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}

