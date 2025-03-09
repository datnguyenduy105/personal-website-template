'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { 
  getProjectById,
  PROJECT_DATA
} from '@/app/data/project'

// // Định nghĩa kiểu dữ liệu ProjectDetail đã loại bỏ company, features và achievements
// export type ProjectDetail = {
//   id: number;                // ID duy nhất của dự án
//   title: string;             // Tiêu đề dự án
//   overview: string;          // Mô tả tổng quan về dự án
//   mainImage: string;         // Đường dẫn đến ảnh chính của dự án
//   link: string;              // URL của dự án đang hoạt động
//   github?: string;          // (Tùy chọn) URL của kho lưu trữ GitHub
//   techStack: {             // Các nhóm công nghệ được sử dụng
//     category: string;       // Tên loại công nghệ
//     items: string[];        // Danh sách các công nghệ
//   }[];
// }

// Hàm này không còn cần thiết vì không sử dụng features nữa, có thể xóa hoặc giữ lại nếu có ý định dùng sau này.
const preloadImages = (features: { image: string | string[] }[]) => {
  return; // Không làm gì cả vì không dùng đến

  // if (typeof window === 'undefined') return;
  
  // features.forEach(feature => {
  //   if (Array.isArray(feature.image)) {
  //     feature.image.forEach(img => {
  //       const image = new window.Image();
  //       image.src = img;
  //     });
  //   } else {
  //     const image = new window.Image();
  //     image.src = feature.image;
  //   }
  // });
};

export default function ExperienceModal({ 
  open, 
  onClose,
  experienceId 
}: { 
  open: boolean
  onClose: () => void
  experienceId: number 
}) {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0); // Không cần thiết vì không hiển thị features

  const experience = getProjectById(experienceId) || Object.values(PROJECT_DATA)[0];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // preloadImages(experience.features); // Không cần thiết vì không dùng features
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [open]); // Loại bỏ experience.features khỏi dependency array

  // useEffect(() => {
  //   if (!open) {
  //     setCurrentImageIndex(0); // Không cần thiết vì không hiển thị features
  //   }
  // }, [open]);

  if (!open) return null;

  return (
    <div 
      className="
        fixed inset-0 
        flex items-center justify-center 
        p-4 sm:p-8 
        bg-black/40 dark:bg-black/60
        backdrop-blur-md
        z-50
        transition-all duration-300 ease-in-out
      "
      onClick={onClose}
    >
      <div 
        className="
          relative w-full max-w-[1000px] max-h-[90vh] overflow-auto
          bg-gradient-to-br from-white/80 to-white/70 
          dark:from-black/90 dark:to-black/85
          backdrop-blur-xl
          rounded-2xl
          border border-white/20 dark:border-white/15
          shadow-[0_8px_32px_rgba(0,0,0,0.1)]
          dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          transition-all duration-300
          p-6 sm:p-8 md:p-10
          scrollbar-thin scrollbar-track-transparent 
          scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700
          hover:shadow-[0_12px_48px_rgba(0,0,0,0.15)]
          dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]
        "
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            p-2
            rounded-full
            text-gray-500 dark:text-gray-400
            hover:bg-black/5 dark:hover:bg-white/5
            transition-all duration-300
            hover:rotate-90
            hover:scale-110
            focus:outline-none
            focus:ring-2 focus:ring-purple-500/50
          "
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="space-y-8">
          <div className="space-y-6">
            {/* <div className="space-y-2"> */}
              {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.company}
              </p> */}
            {/* </div> */}
              <div className="flex items-center justify-between gap-4">
                <h1 className="
                  text-2xl sm:text-3xl md:text-4xl 
                  font-bold 
                  tracking-tight
                  bg-clip-text text-transparent
                  bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600
                  dark:from-purple-400 dark:via-pink-400 dark:to-purple-400
                  animate-gradient
                ">
                  {experience.title}
                </h1>
                <div className="flex gap-4 mt-8">
                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        px-4 py-2
                        text-sm font-medium
                        rounded-full
                        border border-gray-200 dark:border-gray-800
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        text-gray-700 dark:text-gray-300
                        transition-all duration-300
                        hover:scale-105
                        group
                      "
                    >
                      <svg 
                        className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="hidden sm:inline">View Code</span>
                    </a>
                  )}
                </div>
              </div>

            <p className="
              text-base sm:text-lg 
              leading-relaxed 
              text-gray-600 dark:text-gray-300
              border-l-4 border-purple-500/30
              pl-4
            ">
              {experience.overview}
            </p>
          </div>

          <a 
            href={experience.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              relative block
              w-full h-[200px] sm:h-[300px] md:h-[400px]
              rounded-xl overflow-hidden
              shadow-lg
              ring-1 ring-black/5 dark:ring-white/5
              group
              cursor-pointer
            "
          >
            <div className="
              absolute inset-0
              bg-gradient-to-t from-black/50 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              z-10
              flex items-end justify-center
              pb-6
            ">
              <span className="
                text-white
                text-sm sm:text-base
                font-medium
                px-4 py-2
                rounded-full
                bg-black/30
                backdrop-blur-sm
                border border-white/10
              ">
                View Project
              </span>
            </div>
            <Image
              src={experience.mainImage}
              alt={experience.title}
              fill
              className="
                object-cover 
                group-hover:scale-105 
                transition-transform duration-500
                filter brightness-100 group-hover:brightness-90
              "
              priority
            />
          </a>

          <div className="space-y-8 mb-12">
            <h2 className="
              text-xl sm:text-2xl 
              font-bold 
              tracking-tight
            ">
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experience.technicalSkills.map((tech, index) => (
                <div 
                  key={index}
                  className="
                    p-6
                    rounded-xl
                    space-y-4
                    hover:bg-white/[0.02] dark:hover:bg-black/[0.02]
                    transition-colors duration-300
                    border border-white/[0.03] dark:border-white/[0.03]
                  "
                >
                  <h3 className="
                    text-lg font-semibold 
                    text-purple-600 dark:text-purple-400
                    mb-4
                  ">
                    {tech.category}
                  </h3>
                  
                  <div className="
                    grid grid-cols-3 sm:grid-cols-4 
                    gap-6
                  ">
                    {tech.items.map((item) => (
                      <div
                        key={item}
                        className="
                          flex flex-col items-center 
                          gap-3
                          group
                        "
                      >
                        <div className="
                          relative 
                          w-12 sm:w-14
                          h-12 sm:h-14
                          flex items-center justify-center 
                          transition-all duration-300 
                          group-hover:scale-110   
                          group-hover:-translate-y-1
                        ">
                          <Image
                            src={`/skills/${item.toLowerCase().replace(/[\s()\.+]/g, '')}.svg`}
                            alt={item}
                            width={32}
                            height={32}
                            className="
                              dark:invert          
                              sm:w-[40px] sm:h-[40px]
                            "
                          />
                        </div>
                        <span className="
                          text-xs sm:text-sm
                          font-medium 
                          text-gray-600 dark:text-gray-400
                          group-hover:text-gray-900 dark:group-hover:text-gray-200
                          transition-colors 
                          text-center
                        ">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}