'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Define project data type
// Each project must include:
// - id: Unique identifier
// - title: Project name
// - description: Project description
// - period: Development period
// - image: Project screenshot path (stored in public/project/ directory)
// - skills: Tech stack used
// - link: Project link (GitHub/Demo)
type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
}

// Example project data
// Usage instructions:
// 1. Copy template below and modify content as needed
// 2. Place project screenshots in public/project/ directory
// 3. Sort projects in reverse chronological order
// 4. Project descriptions should highlight core features and technical highlights
const projects: Project[] = [
  {
    id: 1,
    title: "Ecommerce Customer Churn Analysis ",
    description: " Conducted data analysis to identify key drivers of customer churn and developed data-driven insights for targeted retention strategies.",
    period: "2025.02 - 2025.03",
    image: "/skills/ecom.png", // Screenshot path
    skills: ["SQL", "BigQuery", "PowerBI", "Data Cleaning", "Data Transformation", "EDA", "RFM Segmentation"], // Tech stack
    link: "https://github.com/datnguyenduy105/Ecommerce-Customer-Churn-Analysis"
  },
  {
    id: 2, 
    title: "Football Player Value Prediction Season 24/25",
    description: " Developed a machine learning model to predict football player market values, enabling identification of valued talent for optimized team recruitment strategies.",
    period: "2025.01 - 2025.02",
    image: "/skills/big5.jpg",
    skills: ["Python","BeautifulSoup","Data Analysis", "Machine Learning"],
    link: "https://github.com/datnguyenduy105/Football-Player-Value-Prediction-Season-24-25"
  },
  {
    id: 3,
    title: "Jobs And Salaries In Data Related Careers",
    description: "Addressed the lack of current salary information across data-related careers by analyzing trends from 2020-2024, enabling data-driven career and recruitment strategies.",
    period: "2024.12 - 2025.01",
    image: "/skills/dssalaries.jpg", // Screenshot path
    skills: ["Python", "Data Cleaning", "EDA", "Data Visualization", "Data Wrangling"], // Tech stack
    link: "https://github.com/datnguyenduy105/Jobs-And-Salaries-In-Data-Related-Careers-2024"
  },
  {
    id: 4,
    title: " Global Electronic Retailer Data Analysis",
    description: " Analyzed global electronic retailer time-series data to optimize revenue and improve operational efficiency.",
    period: "2024.11 - 2024.12",
    image: "/skills/retail.jpg", // Screenshot path
    skills: ["SQL", "PowerBI"], // Tech stack
    link: "https://github.com/datnguyenduy105/Global-Electronic-Retailer-Sales-POWER-BI-SQL"
  },
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-4 md:py-8
        relative
        overflow-hidden
      ">
        <GradientBackground 
          sectionId="projects"
          gradientColors={{
            start: '#F43F5E',  // Light rose
            end: '#BE123C'     // Deep rose
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center relative z-10">
            Projects
          </h1>
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {projects.map((project) => (
            <div key={project.id}>
              <AnimatedText>
                <div 
                  onClick={() => {
                    setSelectedProject(project.id)
                    setModalOpen(true)
                  }}
                  className="
                    bg-white/[0.1] dark:bg-black/[0.2]
                    backdrop-blur-[20px]
                    rounded-2xl
                    border border-white/[0.1] dark:border-white/[0.1]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-48 md:h-72 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                    {project.period}
                  </p>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-white/[0.05] dark:bg-white/[0.05]
                          backdrop-blur-[8px]
                          border border-white/[0.05]
                          text-gray-600 dark:text-gray-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={selectedProject ?? 1}
      />
    </section>
  )
} 