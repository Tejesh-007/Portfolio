"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Brain, Stethoscope, Bus } from "lucide-react"

const projects = [
  {
    title: "ATSIRE: Advanced Tracking System with Intelligent Resume Embeddings",
    description:
      "Optimized resume-job matching algorithms, enhancing the quality of candidate selection and placement. Fine-tuned large language models (LLMs) by comparing traditional methods like TF-IDF with BERT and GPT, resulting in a 30% improvement in accuracy for detecting and mitigating bias.",
    icon: Brain,
    technologies: ["Python", "BERT", "GPT", "TF-IDF", "Machine Learning", "NLP"],
    features: [
      "Resume and job description embeddings for efficient candidate evaluation",
      "30% improvement in bias detection accuracy",
      "LLM fine-tuning and comparison",
      "Intelligent matching algorithms",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "iCare – Hospital Management System",
    description:
      "Comprehensive hospital management web application developed using ASP.NET MVC framework. Features patient management, appointment scheduling, medical records, and administrative functions.",
    icon: Stethoscope,
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "HTML", "CSS", "JavaScript"],
    features: [
      "Patient registration and management",
      "Appointment scheduling system",
      "Medical records management",
      "Administrative dashboard",
      "Reporting and analytics",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Employee Self-Service Portal",
    description:
      "Developed a comprehensive employee portal with 20 entities database in Microsoft SQL. Implemented normalization and created a user-friendly interface for employee self-service operations.",
    icon: Bus,
    technologies: ["Microsoft SQL", "SQL Server Management Studio", "ASP.NET", "Entity Framework"],
    features: [
      "20 entities normalized database design",
      "Employee profile management",
      "Leave management system",
      "Payroll information access",
      "Performance tracking",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Bus Booking System",
    description:
      "Full-stack web application for bus ticket booking with Angular frontend and .NET backend. Implemented REST APIs to handle user management and booking operations.",
    icon: Bus,
    technologies: ["Angular", ".NET", "REST APIs", "SQL Server", "TypeScript"],
    features: [
      "User registration and authentication",
      "Bus route search and selection",
      "Seat selection and booking",
      "Payment integration",
      "Booking history and management",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and research work that demonstrate my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <project.icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex gap-3 pt-4 border-t">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
