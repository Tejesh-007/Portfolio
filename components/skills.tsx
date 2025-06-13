"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C#", level: 75 },
      { name: "SQL", level: 85 },
      { name: "ABAP", level: 70 },
    ],
  },
  {
    title: "Web Technologies & Frameworks",
    icon: Code,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Angular", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "React Native", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "Oracle DB", level: 85 },
      { name: "Microsoft SQL", level: 80 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git", level: 85 },
      { name: "AWS", level: 75 },
      { name: "Jenkins", level: 80 },
      { name: "Azure DevOps", level: 80 },
      { name: "SAP PI NetWeaver", level: 75 },
      { name: "JIRA", level: 85 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-blue-500" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline">{skill.level}%</Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Additional Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Redux",
                  "Redux-Saga",
                  "Jest",
                  "React Testing Library",
                  "Material UI",
                  "RESTful APIs",
                  "Microservices",
                  "ETL Operations",
                  "JPA",
                  "Selenium",
                  "Unit Testing",
                  "CI/CD",
                  "System Migration",
                  "Performance Optimization",
                  "Responsive Design",
                  "Cross-platform Development",
                ].map((skill) => (
                  <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
