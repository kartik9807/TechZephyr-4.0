"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Silk from "@/components/animated_bg/Silk";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

export default function AboutUs() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Silk speed={5} scale={1} color="#262626" noiseIntensity={1.2} rotation={0} />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black" />
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, }} className="max-w-4xl">
              <p className="uppercase tracking-[0.45em] text-xs text-white/40 mb-6">Science & Technology Council</p>
              <h1 className="landing-heading text-6xl md:text-8xl lg:text-[9rem] bg-clip-text text-transparent bg-linear-to-b from-zinc-300 via-zinc-500 to-black">ABOUT US</h1>
              <h2 className="mt-5 text-3xl md:text-5xl font-semibold">TechZephyr 2026</h2>
              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60">
                The flagship technology festival of the Science &
                Technology Council, IIT Bhubaneswar—bringing together
                innovation, engineering, entrepreneurship and creativity
                through hackathons, competitions, workshops and exhibitions.
              </p>
              <div className="mt-12 flex flex-wrap gap-5">
                <Link href="/Competitions"
                  className="rounded-full bg-white px-8 py-4 text-black uppercase text-sm font-semibold tracking-[0.25em] transition-all duration-300 hover:bg-zinc-300">
                  Explore Events
                </Link>
                <Link href="/Sponsors"
                  className="rounded-full border border-white/20 px-8 py-4 uppercase text-sm tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300">
                  Sponsors
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading subtitle="Flagship Festival" title="About TechZephyr" />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
              <p className="text-white/70 text-lg leading-9">
                TechZephyr is the flagship celebration of technology and
                innovation at IIT Bhubaneswar. It is designed as a large-scale
                platform where students, researchers, innovators and industry
                professionals collaborate through competitions, workshops,
                exhibitions and technical events spanning robotics,
                competitive programming, web development, blockchain,
                finance, astronomy and emerging technologies.
              </p>
              <p className="mt-8 text-white/60 leading-9">
                Beyond being a technical festival, TechZephyr bridges
                academia and industry by encouraging interdisciplinary
                collaboration, practical learning and innovation that solves
                real-world challenges. It offers participants an opportunity
                to compete, collaborate and showcase ideas with meaningful
                impact.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
              <div className="rounded-[32px] border border-white/10 bg-white/3 backdrop-blur-xl p-10">
                <div className="text-8xl font-black text-white/10">TZ</div>
                <h3 className="mt-5 text-3xl font-bold">Innovation Meets Impact</h3>
                <p className="mt-6 text-white/60 leading-8">
                  Every competition, workshop and hackathon is curated to
                  encourage practical problem solving, creativity and
                  collaboration while preparing students for tomorrow's
                  technology ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading subtitle="Science & Technology Council" title="Who We Are" />
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
              <h3 className="text-4xl font-bold">Science & Technology Council</h3>
              <p className="mt-8 text-white/70 leading-9">
                The Science & Technology Council (STC) is the driving force
                behind technical innovation at IIT Bhubaneswar. Through
                year-round competitions, workshops, hackathons and
                collaborative projects, STC promotes experimentation,
                creativity and interdisciplinary learning among students.
              </p>
              <p className="mt-8 text-white/60 leading-9">
                The council operates through specialized student societies
                dedicated to coding, robotics, finance, design and astronomy,
                enabling students to transform ideas into impactful
                technological solutions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .2 }}
              className="grid grid-cols-2 gap-6">
              {["Innovation", "Research", "Engineering", "Leadership", "Entrepreneurship", "Technology",].map((item) => (
                <div key={item}
                  className="rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
                  <div className="text-4xl font-black text-white/20">•</div>
                  <h4 className="mt-5 text-xl font-semibold">{item}</h4>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading subtitle="Our Ecosystem" title="Societies Under STC" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                name: "WEBnD",
                domain: "Web Development & Design",
                description: "The web and design society focused on building creative digital experiences, full-stack solutions and innovative web applications."
              },
              {
                name: "Neuromancers",
                domain: "Competitive Programming",
                description: "A community of problem solvers dedicated to algorithms, programming contests and advancing competitive coding culture."
              },
              {
                name: "RISC",
                domain: "Robotics & Intelligent Systems",
                description: "A robotics society exploring automation, embedded systems, autonomous machines and engineering innovation."
              },
              {
                name: "FEBS",
                domain: "Finance & Emerging Business Society",
                description: "A platform combining finance, analytics, entrepreneurship and business-oriented technological solutions."
              },
              {
                name: "Nakshatra",
                domain: "Astronomy & Space Science",
                description: "A society promoting astronomy, astrophysics and exploration through observations, challenges and learning initiatives."
              }
            ].map((society, index) => (
              <motion.div key={society.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: .6, delay: index * .1 }} whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8 transition-all duration-500">
                <div className="absolute right-6 top-3 text-8xl font-black text-white/4">0{index + 1}</div>
                <div className="relative">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/40">Society</span>
                  <h3 className="mt-5 text-3xl font-bold">{society.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-widest text-white/50">{society.domain}</p>
                  <p className="mt-6 leading-8 text-white/60">{society.description}</p>
                  <div className="mt-8 h-px w-0 bg-white group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-[40px] border border-white/10 bg-white/3 backdrop-blur-xl p-10">
              <p className="uppercase tracking-[0.4em] text-xs text-white/40">Vision</p>
              <h3 className="mt-5 text-4xl font-bold">Building Future Innovators</h3>
              <p className="mt-6 text-white/60 leading-9">
                To create an environment where students can explore,
                experiment and transform ideas into meaningful
                technological solutions that impact society.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-[40px] border border-white/10 bg-white/3 backdrop-blur-xl p-10">
              <p className="uppercase tracking-[0.4em] text-xs text-white/40">Mission</p>
              <h3 className="mt-5 text-4xl font-bold">Innovation Through Collaboration</h3>
              <p className="mt-6 text-white/60 leading-9">
                To empower students with technical skills, problem-solving abilities and opportunities to
                collaborate across domains through competitions, workshops and projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-32 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading subtitle="Milestones" title="Our Achievements" />
          <div className="relative mt-20">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />
            <div className="space-y-16">
              {[
                {
                  year: "2024",
                  title: "ICPC World Finals",
                  society: "Neuromancers",
                  description:
                    "Secured World Rank 75 at the ICPC World Finals held in Kazakhstan, becoming the third highest ranked Indian team."
                },
                {
                  year: "2024",
                  title: "eYantra Gold Medal",
                  society: "RISC",
                  description:
                    "Achieved a gold medal at IIT Bombay's prestigious eYantra Robotics Competition."
                },
                {
                  year: "2025",
                  title: "ICPC Asia West Qualification",
                  society: "Neuromancers",
                  description:
                    "One team qualified for ICPC Asia West 2025 showcasing exceptional competitive programming skills."
                },
                {
                  year: "2025",
                  title: "Code Relay",
                  society: "WEBnD",
                  description:
                    "A 36-hour flagship hackathon receiving more than 880 team registrations across Web2 and Web3 tracks."
                },
                {
                  year: "2025",
                  title: "ML Hackathon",
                  society: "FEBS",
                  description:
                    "A campus-wide AI hackathon where 50+ teams solved real-world machine learning challenges."
                },
                {
                  year: "2025",
                  title: "GUJCOST Robofest",
                  society: "RISC",
                  description:
                    "Four teams reached Grand Finals from 1500+ entries, securing podium positions in robotics categories."
                },
                {
                  year: "2025",
                  title: "Astrochamp",
                  society: "Nakshatra",
                  description:
                    "Engaged 800+ participants through programming challenges, astronomy activities, quizzes and competitions."
                }].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: .7 }}
                    className={`relative flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-black z-10" />
                    <div className="ml-14 md:ml-0 md:w-[45%]">
                      <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-500">
                        <p className="text-xs uppercase tracking-[0.35em] text-white/40">{item.year}</p>
                        <h3 className="mt-4 text-3xl font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm uppercase tracking-widest text-white/50">{item.society}</p>
                        <p className="mt-5 text-white/60 leading-8">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10"><Stats /></section>
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: .95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .8 }}
            className="rounded-[40px] border border-white/10 bg-white/3 backdrop-blur-xl p-12 md:p-20">
            <p className="uppercase tracking-[0.4em] text-xs text-white/40">TechZephyr 2026</p>
            <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">Where Ideas Meet Real Impact</h2>
            <p className="mt-8 text-lg text-white/60 leading-9">
              TechZephyr is not just a competition platform. It is a place where innovators collaborate,
              engineers experiment, and technology transforms ideas into solutions for tomorrow.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="border-t border-white/10"><CTA /></section>
    </main>
  );
}