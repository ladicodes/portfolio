interface Skill {
  name: string;
}

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  location: string;
}

export const skills: Skill[] = [
  { name: "Python" },
  { name: "TypeScript" },
  { name: "Django" },
  { name: "Data Science" },
  { name: "HTML | CSS" },
  { name: "Javascript" },
  { name: "Block Programming" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Java" },
  { name: "C" }
];

export const experience: Experience[] = [
  {
    period: "August 2023 - March 2024",
    role: "Python Developer",
    company: "Yomi Denzel Foundation",
    description:
      "Developed Python projects spanning from simple calculators to large-scale data analysis using NumPy, Pandas, and Matplotlib. Conducted predictive analysis on blockbuster movie trends, improving forecast accuracy by 30%, and earned recognition from Multisoft Company for the project's industry impact.",
    location: "Lagos, Nigeria",
  },
  {
    period: "August 2023 - September 2023",
    role: "Backend Developer (Intern Lead)",
    company: "Microsoft, Nigeria",
    description:
      "Contributed to the Smart Waste Bin project, developing an automated alert system that improved waste management efficiency by 35%. Managed backend processes for seamless sensor data transmission, enhancing system reliability by 30%. Led a team of five engineers, ensuring on-time project delivery and effective coordination.",
    location: "Lagos, Nigeria",
  },
  {
    period: "October 2023 - Present",
    role: "Lead Backend Developer",
    company: "Schoolar.io",
    description:
      "Led the backend development of an education platform, implementing OTP and email verification to enhance security by 30%. Designed a Django-based admin dashboard, improving admin efficiency by 25%, and optimized authentication workflows, reducing login issues by 20% for a seamless user experience.",
    location: "Lagos, Nigeria",
  },
  {
    period: "August 2024 - Present",
    role: "Backend Engineer Intern",
    company: "Guaranty Trust Holdings PLC | SquadCo",
    description:
      "Developed and managed the Django-powered backend for the Fashion Weekend project, optimizing API performance and database queries to improve data processing speed by 25%. Automated backend workflows with Python scripting, enhancing system efficiency by 20%, and collaborated with teams to ensure seamless integration, boosting overall reliability by 15%.",
    location: "Lagos, Nigeria",
  }
];
