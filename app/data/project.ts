// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string            // Project title
  // company: string          // Company name
  overview: string         // Brief project overview
  mainImage: string        // Main project image path
  link: string            // Live project URL
  github?: string         // Optional GitHub repository URL
  // features: {             // List of project features
  //   title: string         // Feature title
  //   description: string   // Feature description  
  //   image: string | string[] // Feature image(s) path
  // }[]
  technicalSkills: {            // Technical stack groupings
    category: string      // Tech category name
    items: string[]       // List of technologies
  }[]
  // achievements: {         // Quantifiable achievements
  //   metric: string        // Achievement metric name
  //   value: string         // Achievement value
  //   change: number        // Numerical change/improvement
  // }[]
}

// Project data mapping object
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: " Ecommerce Customer Churn Analysis ",
    // company: "Ecommerce Platform",
    overview: "This project analyzes customer churn within an e-commerce platform to identify key factors contributing to churn and develop data-driven insights for customer retention strategies.",
    mainImage: "/skills/ecom.png",
    link: "https://github.com/datnguyenduy105/Ecommerce-Customer-Churn-Analysis",
    // features: [
    //   {
    //     title: "Feature 1",
    //     description: "Feature 1 Description",
    //     image: "/example1/feature1.png"
    //   }
    // ],
    technicalSkills: [
      {
        category: "Data Analysis - Visualization",
        items: ["SQL", "BigQuery", "PowerBI"]
      }
    ],
    // achievements: [
    //   {
    //     metric: "Performance Improvement",
    //     value: "50%",
    //     change: 50
    //   }
    // ]
  },
  2: {
    id: 2,
    title: "Football Player Value Prediction Season 24/25",
    overview: "This project aims to predict football player market values based on their performance statistics. It leverages data from two reputable sources: Transfermarkt (market values) and FBRef (detailed player statistics). The project combines web scraping, data cleaning, preprocessing, unsupervised learning (clustering), and supervised learning (predictive modeling) to achieve its objective. The analysis focuses on five major European leagues: Premier League, La Liga, Serie A, Bundesliga, and Ligue 1.",
    mainImage: "/skills/big5.jpg",
    link: "https://github.com/datnguyenduy105/Football-Player-Value-Prediction-Season-24-25",
    // features: [
    //   {
    //     title: "Feature 1",
    //     description: "Feature 1 Description",
    //     image: "/example1/feature1.png"
    //   }
    // ],
    technicalSkills: [
      {
        category: "Data Analysis - Visualization - Machine Learning",
        items: ["Jupyter", "Scikit-Learn", "Numpy", "Pandas", "Matplotlib","Seaborn", "Colab"]
      }
    ],
    // achievements: [
    //   {
    //     metric: "Performance Improvement",
    //     value: "50%",
    //     change: 50
    //   }
    // ]
  },
  3: {
    id: 3,
    title: "Jobs And Salaries In Data Related Careers",
    overview: "This project performs an exploratory data analysis (EDA) on a dataset of AI, ML, and Data Science salaries from 2020 to 2024. The primary goal is to identify salary trends and patterns based on factors such as experience level, job title, employment type, remote work arrangement, company location, and company size. The analysis aims to provide valuable insights into the salary landscape within the AI, ML, and Data Science domains. Importantly, a significant number of duplicate entries (over 50%) were intentionally retained, recognizing them as representations of multiple survey submissions rather than data errors.",
    mainImage: "/skills/dssalaries.jpg",
    link: "https://github.com/datnguyenduy105/Jobs-And-Salaries-In-Data-Related-Careers-2024",
    // features: [
    //   {
    //     title: "Feature 1",
    //     description: "Feature 1 Description",
    //     image: "/example1/feature1.png"
    //   }
    // ],
    technicalSkills: [
      {
        category: "Data Analysis - Visualization",
        items: ["Python", "Numpy", "Pandas", "Plotly", "Seaborn", "Matplotlib","Jupyter"]
      }
    ],
    // achievements: [
    //   {
    //     metric: "Performance Improvement",
    //     value: "50%",
    //     change: 50
    //   }
    // ]
  },
  4: {
    id: 4,
    title: "Global Electronic Retailer Data Analysis",
    overview: "Global Electronic Retailer operates a worldwide company, selling various electronic products to its customers. This project analyzes retailer time-series data, including transaction details, customer demographics, and store performance. By integrating advanced SQL analysis with dynamic Power BI reporting, the project aims to identify growth opportunities, optimize resource allocation, and enhance customer satisfaction.",
    mainImage: "/skills/retail.jpg",
    link: "https://github.com/datnguyenduy105/Global-Electronic-Retailer-Sales-POWER-BI-SQL",
    // features: [
    //   {
    //     title: "Feature 1",
    //     description: "Feature 1 Description",
    //     image: "/example1/feature1.png"
    //   }
    // ],
    technicalSkills: [
      {
        category: "Data Analysis - Visualization",
        items: ["SQL", "BigQuery","PowerBI"]
      }
    ],
    // achievements: [
    //   {
    //     metric: "Performance Improvement",
    //     value: "50%",
    //     change: 50
    //   }
    // ]
  },
}

// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}