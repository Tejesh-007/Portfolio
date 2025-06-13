"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, GraduationCap, Calendar } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experienced Full Stack Developer with over 3 years of experience in designing and developing
                    enterprise-level applications. Skilled in building responsive UIs, integrating frontend with backend
                    services, and optimizing system performance. Proficient in modern web technologies and experienced
                    in migrating legacy systems.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Dallas, TX</span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Full Stack Development",
                      "Enterprise Applications",
                      "System Migration",
                      "Performance Optimization",
                      "CI/CD Pipelines",
                      "Microservices",
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-semibold">Master's in Computer Science</h4>
                    <p className="text-muted-foreground">University of North Texas, USA</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      <span>Aug 2022 – May 2024</span>
                      <Badge variant="outline">GPA: 3.909</Badge>
                    </div>
                  </div>

                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold">Bachelor's in Electronics & Communication Engineering</h4>
                    <p className="text-muted-foreground">GITAM University, India</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      <span>June 2016 – June 2020</span>
                      <Badge variant="outline">GPA: 8.77</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-500">
                      <NumberTicker value={3} startValue={0} />+
                    </div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-500">
                      <NumberTicker value={5} startValue={0} />+
                    </div>
                    <div className="text-sm text-muted-foreground">Companies Worked</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">
                      <NumberTicker value={10} startValue={0} />+
                    </div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">
                      <NumberTicker value={3} startValue={0} />+
                    </div>
                    <div className="text-sm text-muted-foreground">Major Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
