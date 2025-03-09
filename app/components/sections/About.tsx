'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
              As a final year Data Science student from the University of Science - VNUHCM, I am a passionate and proficient data analyst and machine learning practitioner with expertise in Python, SQL, and visualization tools like Power BI, dedicated to delivering actionable insights.              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
              I am always seeking new challenges to apply my knowledge and skills, contributing to data-driven decision-making and driving business growth.              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond the world of data, I find immense satisfaction in exploring new concepts and approaches, and I'm particularly drawn to opportunities that encourage creativity and innovative problem-solving in my work.              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              As an entry-level data enthusiast, I am eager to contribute my analytical skills 
              to a dynamic team. I am committed to continuous learning and am excited to apply 
              data-driven insights to real-world challenges. My goal is to grow professionally while
              making a meaningful impact in the field of data analysis.              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}