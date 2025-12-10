"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    company: "Seanergy.ai",
    position: "Software Engineer",
    location: "Plano, TX",
    duration: "February 2025 – Present",
    description: [
      "Designed and developed responsive, high-performance user interfaces using React JS, Hooks, and Redux, improving page load time by 30%",
      "Led requirement elicitation sessions with product owners and architects to define UI specifications and component structures",
      "Developed reusable UI components with TypeScript and React Hooks, reducing redundant code by 40%",
      "Integrated frontend modules with backend REST APIs, ensuring seamless communication and data consistency across microservices",
      "Implemented form validations, error handling, and API state management to enhance user experience and reliability",
      "Deployed React JS applications to AWS S3 and EC2, configured build pipelines in Jenkins and Azure DevOps for automated testing and deployment",
      "Worked closely with QA teams during validation and UAT phases to identify, document, and resolve defects achieving > 95% defect-free delivery",
      "Participated in Agile Scrum ceremonies and client review meetings, delivering iterative enhancements and ensuring continuous improvement",
      "Collaborated with backend developers to define data contracts and improve API performance, reducing API latency by 20%",
      "Implemented unit testing using Jest and React Testing Library, achieving over 90% code coverage across core modules",
      "Mentored junior developers in React best practices, code structuring, and Git workflow, improving overall team efficiency and code quality",
    ],
    technologies: ["React JS", "TypeScript", "Redux", "React Hooks", "REST APIs", "AWS S3", "AWS EC2", "Jenkins", "Azure DevOps", "Jest", "React Testing Library"],
  },
  {
    company: "Cencora (AmerisourceBergen)",
    position: "Software Engineer",
    location: "Pennsylvania, USA",
    duration: "June 2024 – January 2025",
    description: [
      "Built modular Angular JS and React JS components aligned with enterprise architecture and design guidelines",
      "Developed and maintained React JS / Next JS web applications integrated with Node JS backend services on AWS cloud",
      "Applied Redux for predictable state management and React Hooks for lifecycle optimization and performance tuning",
      "Collaborated with UX designers to translate wireframes into interactive, pixel-perfect web pages",
      "Integrated Oracle and PostgreSQL databases via REST APIs, enhancing query performance and backend connectivity",
      "Configured AWS Lambda functions for event-driven API processing, improving scalability and cost efficiency",
      "Developed REST APIs and integrated Oracle DB for backend data exchange, improving data retrieval times by 25%",
      "Participated in requirements analysis and design sessions, producing high-level design artifacts for key business modules",
      "Maintained and enhanced CI/CD pipelines in Azure DevOps for streamlined build, test, and deployment workflows",
      "Utilized Next.js server-side rendering (SSR) to enhance SEO performance and reduce initial page load times",
      "Implemented authentication and authorization flows using JWT tokens, ensuring secure access across user roles",
      "Implemented unit testing using Jest, React Testing Library, and JUnit to maintain 90%+ code coverage across key modules",
      "Conducted code reviews to ensure best practices, maintainability, and compliance with enterprise coding standards",
      "Collaborated with ERP and integration teams to streamline data synchronization workflows between SAP and other systems",
      "Implemented logging and monitoring enhancements for integration APIs, improving traceability and reducing resolution time by 20%",
      "Built and optimized reusable UI libraries and shared components, reducing future development time by 25%",
      "Assisted in developing proof-of-concept (PoC) solutions for modernizing legacy ERP components, contributing to digital transformation goals",
      "Created technical documentation and conducted knowledge transfer sessions, ensuring smooth handoffs to support and operations teams",
    ],
    technologies: ["React JS", "Next JS", "Angular JS", "Node JS", "Redux", "TypeScript", "AWS Lambda", "Oracle DB", "PostgreSQL", "Azure DevOps", "JWT", "Jest", "JUnit", "SAP"],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    position: "System Engineer",
    location: "Hyderabad, India",
    duration: "November 2020 – August 2022",
    description: [
      "Delivered React JS and Java-based enterprise web applications, integrating APIs and backend logic for multiple client projects",
      "Applied Redux Toolkit to manage complex states across large-scale UIs, improving performance and maintainability",
      "Partnered with architects to define component-based front-end architecture and participate in application design reviews",
      "Developed and executed unit and integration tests using Jest, JUnit, and Mockito, improving overall system reliability by 20%",
      "Collaborated in a global delivery environment, interfacing with cross-functional teams across the U.S. and India to meet sprint goals",
      "Enhanced SQL queries and stored procedures in Oracle DB to optimize data processing for high-volume systems",
      "Supported application deployments and post-production monitoring, resolving critical issues within SLAs and improving client satisfaction scores",
      "Collaborated with QA and DevOps teams to ensure zero major defects post-deployment across multiple enterprise modules",
    ],
    technologies: ["React JS", "Java", "Redux Toolkit", "Oracle DB", "Jest", "JUnit", "Mockito", "SQL", "Spring Boot"],
  },
  {
    company: "Centre for Development of Advanced Computing (C-DAC)",
    position: "Intern",
    location: "Hyderabad, India",
    duration: "May 2019 – June 2019",
    description: [
      "Assisted in backend development and Java-based module integration, contributing to embedded system projects",
      "Designed and executed test cases for system verification, improving testing accuracy and component validation",
      "Supported defect tracking, troubleshooting, and workflow documentation for performance optimization",
    ],
    technologies: ["Java", "Backend Development", "Test Case Design", "Embedded Systems"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.position}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="h-4 w-4" />
                        <span className="font-semibold text-foreground">{exp.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
