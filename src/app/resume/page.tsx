"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaDownload, FaBriefcase } from "react-icons/fa";

const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "University of Technology",
    year: "2018 - 2022",
    desc: "Focused on Software Engineering, Data Structures, and Algorithms. Graduated with First Class Honors.",
  },
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

const experience = [
  {
    role: "Freelance Fullstack Developer",
    company: "Self-Employed",
    year: "2022 - Present",
    desc: "Building modern web applications for clients using Next.js, React, and Node.js.",
  },
  {
    role: "Data Science Intern",
    company: "Tech Solutions Ltd",
    year: "2021 - 2022",
    desc: "Analyzed large datasets to extract actionable insights and built predictive models.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ResumePage() {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: "var(--brand-tiffany)" }}
          >
            Resume / CV
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Passionate Data Scientist and Writer with experience in building
            machine learning models, data pipelines, and crafting stories that
            connect emotionally.
          </p>

          {/* Animated Download Button */}
          <motion.a
            href="/uploads/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-tiffany_blue to-melon text-dark_black font-bold text-lg shadow-lg shadow-tiffany_blue/20 hover:shadow-tiffany_blue/40 transition-all"
          >
            <FaDownload />
            Download Full Resume
          </motion.a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Experience Section */}
          <section>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-3 text-melon">
              <FaBriefcase /> Professional Experience
            </motion.h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-melon/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-melon/20 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <span className="text-sm font-mono text-tiffany_blue bg-tiffany_blue/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-lg text-gray-300 mb-4">{exp.company}</p>
                    <p className="text-gray-400 leading-relaxed">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Section */}
            <section>
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-3 text-tiffany_blue">
                <FaGraduationCap /> Education
              </motion.h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-tiffany_blue/50 transition-colors h-full"
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-tiffany_blue mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-500 mb-4">{edu.year}</p>
                    <p className="text-gray-400 text-sm">{edu.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-3 text-raspberry_rose">
                <FaCertificate /> Certifications
              </motion.h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-raspberry_rose/50 transition-colors"
                  >
                    <div className="mt-1 p-2 rounded-lg bg-raspberry_rose/10 text-raspberry_rose">
                      <FaCertificate size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{cert.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{cert.issuer} • {cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

        </motion.div>
      </div>
    </main>
  );
}
