"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Silk from "@/components/animated_bg/Silk";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function AboutUs() {
  const cardVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.75,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const sparkles = [
    { left: "28%", top: "22%" },
    { left: "38%", top: "45%" },
    { left: "54%", top: "30%" },
    { left: "70%", top: "26%" },
    { left: "80%", top: "43%" },
    { left: "48%", top: "20%" },
    { left: "62%", top: "40%" },
  ];
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Silk speed={5} scale={1} color="#262626" noiseIntensity={1.2} rotation={0} />
        </div>
        <div className=" absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black" />
        <div className="absolute left-1/3 top-32 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />
        <div className="relative z-10 flex min-h-screen items-center">
          <div className=" mx-auto max-w-7xl px-6 w-full">
            <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: "easeOut" }} className="max-w-4xl">
              <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .2, duration: .7 }} className="uppercase tracking-[0.45em] text-xs text-amber-300 mb-6">
                Science & Technology Council
              </motion.p>
              <motion.h1 initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .3, duration: .8 }}
                className=" landing-heading text-5xl md:text-7xl lg:text-[7.5rem] bg-clip-text text-transparent bg-linear-to-b from-white via-zinc-300 to-zinc-700 drop-shadow-[0_0_40px_rgba(251,191,36,.15)]">
                ABOUT US
              </motion.h1>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }} className="mt-5 text-3xl md:text-5xl font-semibold">
                TechZephyr
                <span className="text-amber-300">{" "}2026</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="mt-8 max-w-3xl text-lg leading text-white/60">
                The flagship technology festival of the Science & Technology Council, IIT Bhubaneswar—bringing together
                innovation, engineering, entrepreneurship and creativity through hackathons, competitions, workshops and exhibitions.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9 }} className="mt-12 flex flex-wrap gap-5">
                <Link href="/Competitions" className="rounded-full bg-amber-400 px-8 py-4 text-black uppercase text-sm font-semibold tracking-[0.25em] transition-all duration-300 hover:bg-amber-300 hover:scale-105">
                  Explore Events
                </Link>
                <Link href="/Sponsors" className="rounded-full border border-white/20 px-8 py-4 uppercase text-sm tracking-[0.25em] hover:border-amber-400 hover:text-amber-300 transition-all duration-300">
                  Sponsors
                </Link>
              </motion.div>
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
                TechZephyr is the flagship celebration of technology and innovation at IIT Bhubaneswar. It is designed as a large-scale
                platform where students, researchers, innovators and industry professionals collaborate through competitions, workshops,
                exhibitions and technical events spanning robotics, competitive programming, web development, blockchain, finance, astronomy and emerging technologies.
              </p>
              <p className="mt-8 text-white/60 leading-9">
                Beyond being a technical festival, TechZephyr bridges academia and industry by encouraging interdisciplinary
                collaboration, practical learning and innovation that solves real-world challenges. It offers participants an opportunity to compete, collaborate and showcase ideas with meaningful impact.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="relative">
              <div className="absolute -inset-1 rounded-[40px] bg-amber-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-10">
                <motion.div initial={{ scale: 1.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, type: "spring" }}
                  className="relative mx-auto flex h-56 w-56 items-center justify-center">
                  <div className="absolute inset-4 rounded-full bg-amber-400/10 blur-2xl" />
                  <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-black/40 shadow-[0_0_60px_rgba(245,158,11,.35)]">
                    <Image src="/logo.jpeg" width={130} height={130} alt="TechZephyr Logo" className="rounded-full object-contain" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .4, duration: .7 }} className="relative z-10">
                  <h3 className="mt-12 text-3xl font-bold">Innovation Meets Impact</h3>
                  <p className="mt-6 text-white/60 leading-8">
                    Every competition, workshop and hackathon is curated to encourage practical problem solving, creativity and
                    collaboration while preparing students for tomorrow's technology ecosystem.
                  </p>
                  <div className="mt-10 h-px w-full bg-linear-to-r from-amber-400/50 via-white/10 to-transparent" />
                  <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/40">Science • Technology • Innovation</p>
                </motion.div>
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
                The Science & Technology Council (STC) is the driving force behind technical innovation at IIT Bhubaneswar. Through year-round competitions, workshops, hackathons and
                collaborative projects, STC promotes experimentation, creativity and interdisciplinary learning among students.
              </p>
              <p className="mt-8 text-white/60 leading-9">
                The council operates through specialized student societies dedicated to coding, robotics, finance, design and astronomy,
                enabling students to transform ideas into impactful technological solutions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-10">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-400/10 blur-[120px]" />
                <p className="uppercase tracking-[.35em] text-xs text-amber-300">Core Values</p>
                <h3 className="mt-5 text-4xl font-bold">
                  Engineering a Culture
                  <br />
                  of Innovation
                </h3>
                <p className="mt-6 text-white/60 leading-9">
                  Science & Technology Council empowers students through interdisciplinary learning, technical excellence, collaborative research and innovation-driven leadership.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  {["Innovation", "Research", "Engineering", "Leadership", "Entrepreneurship", "Technology",].map((item) => (
                    <div key={item} className="rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-sm text-amber-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
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
                name: "WebnD",
                domain: "Web Development & Design",
                description: "The web and design society focused on building creative digital experiences, full-stack solutions and innovative web applications.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84AnGJxBOuQTsTX3M-Oh1TNyJ83PRIhDDMJ7zotDSQQ&s=10',
                instagram: 'https://www.instagram.com/webnd.iitbbs/',
                linkedin: 'https://in.linkedin.com/company/webd-iitbbs'
              },
              {
                name: "Neuromancers",
                domain: "Competitive Programming",
                description: "A community of problem solvers dedicated to algorithms, programming contests and advancing competitive coding culture.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMbjm-4TrkjlOX3icE7eAmVhez756S2faRmXTvJGekQ&s=10',
                instagram: 'https://www.instagram.com/neuro_iitbbs/?hl=en',
                linkedin: 'https://in.linkedin.com/company/neuromancers'
              },
              {
                name: "RISC",
                domain: "Robotics & Intelligent Systems",
                description: "A robotics society exploring automation, embedded systems, autonomous machines and engineering innovation.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DB0dfde0pvVnGTQT_uWctgvIV5zYB8UeO5-F2ZSBL0wxE2lFWIDI0IU&s=10',
                instagram: 'https://www.instagram.com/risc.iitbbs/',
                linkedin: 'https://in.linkedin.com/company/robotics-and-intelligent-systems-club'
              },
              {
                name: "FEBS",
                domain: "Finance & Emerging Business Society",
                description: "A platform combining finance, analytics, entrepreneurship and business-oriented technological solutions.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSTMSEkGgorngP2gPYNeJsPNHOJH_RAoYw38WUHWfTQ&s=10',
                instagram: 'https://www.instagram.com/febs.iitbbs/',
                linkedin: 'https://www.linkedin.com/company/febs-iitbbs'
              },
              {
                name: "Nakshatra",
                domain: "Astronomy & Space Science",
                description: "A society promoting astronomy, astrophysics and exploration through observations, challenges and learning initiatives.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4wTehWaf_p7hMbvcCVAGDtvXfQmhTk_tcMconRCfsOLCqwqSivBsPTA&s=10',
                instagram: 'https://www.instagram.com/nakshatra_iitbbs/',
                linkedin: 'https://www.linkedin.com/company/nakshatra-iit-bhubaneswar'
              }
            ].map((society) => (
              <motion.div key={society.name} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} variants={cardVariants}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02, }} transition={{ duration: 0.45 }} style={{ transformStyle: "preserve-3d", }}
                className="group relative h-125 overflow-hidden rounded-[32px] border border-white/10 bg-white/4 backdrop-blur-xl p-8">
                <div className="absolute inset-0 bg-linear-to-br from-amber-400/5 via-transparent to-transparent" />
                <motion.div initial={{ scale: 3.8, x: 95, y: 120, opacity: 0.9, filter: "blur(8px)", }} whileInView={{ scale: 1, x: 0, y: 0, opacity: 1, filter: "blur(0px)", }}
                  viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], }} className="relative z-20 h-24 w-24">
                  <img src={society.logo} alt={society.name} className="h-full w-full object-contain" />
                </motion.div>
                {sparkles.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0, }} whileInView={{ opacity: [0, 1, 0], scale: [0, 1.8, 0], }} transition={{ duration: 1.2, delay: 0.8 + i * 0.08, }}
                    viewport={{ once: true }} className="absolute z-10 h-2 w-2 rounded-full bg-amber-300" style={{ left: s.left, top: s.top, }} />
                ))}
                <motion.div variants={itemVariants} className="mt-10">
                  <h3 className="text-3xl font-bold">{society.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-amber-300">{society.domain}</p>
                </motion.div>
                <motion.p variants={itemVariants} className="mt-6 text-[15px] leading-7 text-white/60">{society.description}</motion.p>
                <motion.div variants={itemVariants} className="absolute bottom-8 left-8 right-8">
                  <div className="mb-5 h-px bg-linear-to-r from-amber-400 via-white/20 to-transparent" />
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.35em] text-white/35">Connect</span>
                    <div className="flex gap-4">
                      <Link href={society.instagram} target="_blank">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-amber-400 hover:bg-amber-400/10 hover:scale-110">
                          <FaInstagram className="text-white/70" />
                        </div>
                      </Link>
                      <Link href={society.linkedin} target="_blank">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-amber-400 hover:bg-amber-400/10 hover:scale-110">
                          <FaLinkedin className="text-white/70" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
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
                To create an environment where students can explore, experiment and transform ideas into meaningful technological solutions that impact society.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-[40px] border border-white/10 bg-white/3 backdrop-blur-xl p-10">
              <p className="uppercase tracking-[0.4em] text-xs text-white/40">Mission</p>
              <h3 className="mt-5 text-4xl font-bold">Innovation Through Collaboration</h3>
              <p className="mt-6 text-white/60 leading-9">
                To empower students with technical skills, problem-solving abilities and opportunities to collaborate across domains through competitions, workshops and projects.
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
                      <div className="rounded-2xl border border-white/5 hover:border-amber-400/20 bg-amber-400/80 shadow-[0_0_25px_rgba(251,191,36,.6)] backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-500">
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