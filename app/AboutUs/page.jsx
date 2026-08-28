"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Silk from "@/components/animated_bg/Silk";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";


function EcosystemNode({ title, subtitle }) {
  return (
    <div className="group flex w-28 flex-col items-center">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/70 backdrop-blur-xl transition-all duration-300 group-hover:border-amber-400/50 group-hover:shadow-[0_0_30px_rgba(251,191,36,.15)]">
        <div className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,.8)]" />
      </div>

      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
        {title}
      </p>

      <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/30">
        {subtitle}
      </p>
    </div>
  );
}

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
        {/* Background */}
        <div className="absolute inset-0">
          <Silk
            speed={5}
            scale={1}
            color="#262626"
            noiseIntensity={1.2}
            rotation={0}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black" />

        <div className="absolute left-1/3 top-32 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* =========================================================
          LEFT — HERO CONTENT
          ========================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.35 }}
                className="mb-6 text-xs uppercase tracking-[0.45em] text-amber-300"
              >
                Science & Technology Council
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.45 }}
                className="landing-heading bg-linear-to-b from-white via-zinc-300 to-zinc-700 bg-clip-text text-5xl text-transparent drop-shadow-[0_0_40px_rgba(251,191,36,.15)] md:text-7xl lg:text-[7.5rem]"
              >
                ABOUT US
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.4 }}
                className="mt-5 text-3xl font-semibold md:text-5xl"
              >
                TechZephyr
                <span className="text-amber-300"> 2026</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-8 max-w-3xl text-lg leading-8 text-white/60"
              >
                The flagship technology festival of the Science & Technology
                Council, IIT Bhubaneswar—bringing together innovation, engineering,
                entrepreneurship and creativity through hackathons, competitions,
                workshops and exhibitions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-12 flex flex-wrap gap-5"
              >
                <Link
                  href="/Competitions"
                  className="rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300"
                >
                  Explore Events
                </Link>

                <Link
                  href="/Sponsors"
                  className="rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.25em] transition-all duration-300 hover:border-amber-400 hover:text-amber-300"
                >
                  Sponsors
                </Link>
              </motion.div>
            </motion.div>


            {/* =========================================================
          RIGHT — TECHZEPHYR ECOSYSTEM
          ========================================================= */}

            <div className="relative hidden h-[520px] items-center justify-center lg:flex">

              {/* Ambient glow */}
              <div className="absolute h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]" />

              {/* Outer ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="absolute h-[430px] w-[430px] rounded-full border border-white/5"
              />

              {/* Inner ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="absolute h-[310px] w-[310px] rounded-full border border-amber-400/10"
              />

              {/* =====================================================
            CONNECTION LINES
            ===================================================== */}

              <div className="absolute h-px w-[330px] rotate-0 bg-linear-to-r from-transparent via-amber-400/30 to-transparent" />

              <div className="absolute h-px w-[330px] rotate-45 bg-linear-to-r from-transparent via-amber-400/20 to-transparent" />

              <div className="absolute h-px w-[330px] -rotate-45 bg-linear-to-r from-transparent via-amber-400/20 to-transparent" />

              <div className="absolute h-[330px] w-px bg-linear-to-b from-transparent via-amber-400/20 to-transparent" />


              {/* =====================================================
            CENTER
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative z-20 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-amber-400/30 bg-black/70 shadow-[0_0_70px_rgba(251,191,36,.18)] backdrop-blur-xl"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Tech
                </span>

                <span className="mt-1 text-2xl font-bold tracking-tight">
                  Zephyr
                </span>

                <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-amber-300">
                  4.0
                </span>
              </motion.div>


              {/* =====================================================
            NODE — INNOVATION
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.35 }}
                className="absolute left-1/2 top-2 -translate-x-1/2"
              >
                <EcosystemNode
                  title="Innovation"
                  subtitle="Ideas"
                />
              </motion.div>


              {/* =====================================================
            NODE — ENGINEERING
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.52, duration: 0.35 }}
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                <EcosystemNode
                  title="Engineering"
                  subtitle="Build"
                />
              </motion.div>


              {/* =====================================================
            NODE — COMMUNITY
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.59, duration: 0.35 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
              >
                <EcosystemNode
                  title="Community"
                  subtitle="Connect"
                />
              </motion.div>


              {/* =====================================================
            NODE — CREATIVITY
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.66, duration: 0.35 }}
                className="absolute left-0 top-1/2 -translate-y-1/2"
              >
                <EcosystemNode
                  title="Creativity"
                  subtitle="Imagine"
                />
              </motion.div>


              {/* =====================================================
            SMALL TOP LABEL
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.4 }}
                className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 text-center"
              >
                <p className="text-[10px] uppercase tracking-[0.45em] text-white/30">
                  IIT Bhubaneswar
                </p>

                <div className="mx-auto mt-3 h-px w-20 bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
              </motion.div>

            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
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
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .4 }} className="relative">
              <div className="absolute -inset-1 rounded-[40px] bg-amber-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-10">
                <motion.div initial={{ scale: 1.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring" }}
                  className="relative mx-auto flex h-56 w-56 items-center justify-center">
                  <div className="absolute inset-4 rounded-full bg-amber-400/10 blur-2xl" />
                  <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-black/40 shadow-[0_0_60px_rgba(245,158,11,.35)]">
                    <Image src="/logo.jpeg" width={130} height={130} alt="TechZephyr Logo" className="rounded-full object-contain" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2, duration: .4 }} className="relative z-10">
                  <h3 className="mt-12 text-3xl font-bold">Innovation Meets Impact</h3>
                  <p className="mt-6 text-white/60 leading-8">
                    Every competition, workshop and hackathon is curated to encourage practical problem solving, creativity and
                    collaboration while preparing students for tomorrow&apos;s technology ecosystem.
                  </p>
                  <div className="mt-10 h-px w-full bg-linear-to-r from-amber-400/50 via-white/10 to-transparent" />
                  <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/40">Science • Technology • Innovation</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-12.5 border-t border-white/10">
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
      <section className="py-12.5 border-t border-white/10">
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
                whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02, }} transition={{ duration: 0.1 }} style={{ transformStyle: "preserve-3d", }}
                className="group relative h-125 overflow-hidden rounded-[32px] border border-white/10 bg-white/4 backdrop-blur-xl p-8">
                <div className="absolute inset-0 bg-linear-to-br from-amber-400/5 via-transparent to-transparent" />
                <motion.div initial={{ scale: 3.8, x: 95, y: 120, opacity: 0.9, filter: "blur(8px)", }} whileInView={{ scale: 1, x: 0, y: 0, opacity: 1, filter: "blur(0px)", }}
                  viewport={{ once: true }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], }} className="relative z-20 h-24 w-24">
                  <img src={society.logo} alt={society.name} className="h-full w-full object-contain" />
                </motion.div>
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
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >

            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-amber-400/5 blur-[120px]" />

            <div className="relative grid lg:grid-cols-2">

              {/* =====================================================
            VISION
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative p-10 md:p-14 lg:p-16"
              >

                {/* Number */}
                <div className="mb-10 flex items-center gap-5">
                  <span className="text-sm font-medium tracking-[0.35em] text-amber-300">
                    01
                  </span>

                  <div className="h-px w-16 bg-linear-to-r from-amber-400/60 to-transparent" />

                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                    Vision
                  </p>
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Building Future Innovators
                </h3>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/60 md:text-lg">
                  To create an environment where students can explore, experiment
                  and transform ideas into meaningful technological solutions that
                  impact society.
                </p>

                {/* Bottom accent */}
                <div className="mt-10 h-px w-20 bg-amber-400/40 transition-all duration-300 group-hover:w-36" />

              </motion.div>


              {/* =====================================================
            DIVIDER
            ===================================================== */}

              <div className="hidden lg:block absolute left-1/2 top-14 bottom-14 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />

              <div className="mx-10 h-px bg-linear-to-r from-transparent via-white/10 to-transparent lg:hidden" />


              {/* =====================================================
            MISSION
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative p-10 md:p-14 lg:p-16"
              >

                {/* Number */}
                <div className="mb-10 flex items-center gap-5">
                  <span className="text-sm font-medium tracking-[0.35em] text-amber-300">
                    02
                  </span>

                  <div className="h-px w-16 bg-linear-to-r from-amber-400/60 to-transparent" />

                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                    Mission
                  </p>
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Innovation Through Collaboration
                </h3>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/60 md:text-lg">
                  To empower students with technical skills, problem-solving
                  abilities and opportunities to collaborate across domains through
                  competitions, workshops and projects.
                </p>

                {/* Bottom accent */}
                <div className="mt-10 h-px w-20 bg-amber-400/40 transition-all duration-300 group-hover:w-36" />

              </motion.div>

            </div>

            {/* Bottom label */}
            <div className="relative border-t border-white/5 px-10 py-5 md:px-14 lg:px-16">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/25">
                Science • Technology • Innovation • Collaboration
              </p>
            </div>

          </motion.div>

        </div>
      </section>
      <section className="py-14 border-t border-white/10">
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
      <section className="border-t border-white/10"><CTA /></section>
    </main>
  );
}