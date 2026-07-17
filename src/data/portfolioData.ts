export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "ML-Systems" | "Hardware-IoT";
  techStack: string[];
  githubLink: string;
}

export const portfolioMetadata = {
  name: "Vivek Rana",
  title: "Full-Stack & ML Systems Engineer",
  institution: "National Institute of Technology, Kurukshetra",
  department: "B.Tech IIoT (Electronics & Communication Engineering)",
  email: "vivekranarajput999@gmail.com",
  github: "https://github.com/clarityvivek",
  linkedin: "https://linkedin.com/in/vivek-rana-58a336336",
  resumeUrl: "/resume.pdf",
  profileImg: "/IMG_20251128_205455430_HDR~2.jpg.jpeg"
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Malicious URL Detection Engine",
   tagline: "A fast machine learning API that scans web links in real-time to catch malware and threats.",
    description: "Built a backend system that takes incoming website links, processes them using Pandas, and predicts if they are safe or dangerous. Used asynchronous programming so the system can screen links quickly without lagging or blocking the user experience.",
    category: "ML-Systems",
    techStack: ["Python", "FastAPI", "MongoDB", "Pandas", "Scikit-Learn", "GitHub"],
    githubLink: "https://github.com/clarityvivek/MLproject"
  },
  {
    id: 2,
    title: "eDNA Machine Learning Pipeline",
    tagline: "An automated data processing pipeline built for the Smart India Hackathon (SIH) 2025 - which works on eDNA data and predicts the species",
    description: "Execution of model training in the pipeline that helped the model make accurate predictions, and successfully cleared our university's internal rounds for the national hackathon.",
    category: "ML-Systems",
    techStack: ["Python", "Machine Learning", "Data Analytics", "Feature Engineering", "Git"],
    githubLink: "https://github.com/ADS-140605/HeliXecution"
  },
  {
    id: 3,
    title: "Embedded RF-Controlled Navigation System",
    tagline: "A remote-controlled car built using an Arduino Uno and wireless radio-frequency modules.",
    description: "Built a physical RC car from scratch and wrote the control logic to handle movement in real-time. Integrated an Arduino Uno with an L298N H-bridge motor driver, DC motors, and an RF module to make sure the car handles remote wireless steering commands smoothly without lag.",
    category: "Hardware-IoT",
    techStack: ["C++", "C", "Arduino Uno", "Embedded Logic", "Hardware Integration"],
    githubLink: "https://github.com/clarityvivek"
  }
];

export const coreSkillMatrix = {
  languages: ["C++", "Python", "Java", "JavaScript", "TypeScript"],
  frameworks: ["React", "FastAPI", "Tailwind CSS v4"],
  dataStorage: ["MongoDB", "SQL Basics"],
  coursework: ["Data Structures & Algorithms", "Object Oriented Programming (OOP)", "Computer Networks", "Computer Architecture", "Machine Learning & Data Analytics"]
};
