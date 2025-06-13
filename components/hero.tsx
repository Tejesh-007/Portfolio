"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Meteors } from "@/components/ui/meteors"
import { IconCloud } from "@/components/magicui/icon-cloud"
import { BoxReveal } from "@/components/ui/box-reveal"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Meteors Effect */}
      <Meteors number={100} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <BoxReveal boxColor="#5046e6" width="fit-content">
                <span>
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Sai Tejesh
                  </span>
                </span>
              </BoxReveal>
            </motion.h1>

            <BoxReveal boxColor="#5046e6" width="fit-content">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                Full Stack Developer
              </motion.p>
            </BoxReveal>

            <BoxReveal boxColor="#5046e6" width="fit-content">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl"
              >
                Experienced Full Stack Developer with 3+ years of experience in designing and developing
                enterprise-level applications using Angular, React.js, Next.js, Node.js, and Java.
              </motion.p>
            </BoxReveal>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <a href="/Resume/Sai_Tejesh_Gonemadatala.docx" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:saitejesh18@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start mt-8"
            >
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/sai-tejesh-gonemadatala-bb41a9179/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              {/* <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Tejesh-007" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button> */}
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:saitejesh18@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Icon Cloud - Centered between text and image */}
          <div className="flex justify-center items-center order-3 lg:order-none">
            <IconCloud
              images={[
                "https://cdn.simpleicons.org/typescript/typescript",
                "https://cdn.simpleicons.org/javascript/javascript",
                "https://cdn.simpleicons.org/react/react",
                "https://cdn.simpleicons.org/node-dot-js/node-dot-js",
                "https://cdn.simpleicons.org/java/java",
                "https://cdn.simpleicons.org/angular/angular",
                "https://cdn.simpleicons.org/html5/html5",
                "https://cdn.simpleicons.org/css3/css3",
                "https://cdn.simpleicons.org/next-dot-js/next-dot-js",
                "https://cdn.simpleicons.org/express/express",
                "https://cdn.simpleicons.org/postgresql/postgresql",
                "https://cdn.simpleicons.org/firebase/firebase",
                "https://cdn.simpleicons.org/docker/docker",
                "https://cdn.simpleicons.org/github/github",
                "https://cdn.simpleicons.org/git/git",
                "https://cdn.simpleicons.org/figma/figma",
                "https://cdn.simpleicons.org/vercel/vercel",
                "https://cdn.simpleicons.org/jest/jest",
                "https://cdn.simpleicons.org/cypress/cypress",
                "https://cdn.simpleicons.org/amazonaws/amazonaws"
              ]}
            />
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Sai Tejesh Gonemadatala"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
