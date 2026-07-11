export const trainings = [
  {
    slug: "ict-fundamentals",
    title: "ICT Fundamentals",
    image: "/assets/img/ogalsan/training.jpg",
    duration: "4 Weeks",
    level: "Beginner",
    modes: ["online", "offline"],
    summary:
      "Build a strong foundation in computers, the internet, and essential digital tools used in the workplace.",
    description:
      "This training introduces participants to core ICT concepts, hardware and software basics, file management, and safe internet use. It is ideal for anyone starting their digital journey or looking to strengthen their fundamentals.",
    topics: [
      "Computer & operating system basics",
      "Internet, email, and online safety",
      "File management and cloud storage",
      "Introduction to office productivity tools",
    ],
  },
  {
    slug: "digital-skills-for-teams",
    title: "Digital Skills for Teams",
    image: "/assets/img/ogalsan/process.jpg",
    duration: "6 Weeks",
    level: "Intermediate",
    modes: ["online", "offline"],
    summary:
      "Practical, task-focused training to help staff use digital tools confidently in their day-to-day work.",
    description:
      "Designed for organisations, this program equips teams with hands-on skills in collaboration tools, data handling, and business applications so they can work more efficiently and reduce manual paperwork.",
    topics: [
      "Collaboration and communication tools",
      "Spreadsheets and data management",
      "Document workflows and templates",
      "Online productivity and project tracking",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation Essentials",
    image: "/assets/img/ogalsan/digital.png",
    duration: "8 Weeks",
    level: "Advanced",
    modes: ["online", "offline"],
    summary:
      "Learn how to plan and lead digital transformation initiatives within your organisation.",
    description:
      "This training helps managers and decision-makers understand how to align technology with organisational goals, design digital roadmaps, and manage change across teams and services.",
    topics: [
      "Digital maturity assessment",
      "Building a transformation roadmap",
      "Process digitisation & automation",
      "Change management and adoption",
    ],
  },
];

export function getTrainingBySlug(slug) {
  return trainings.find((training) => training.slug === slug) || null;
}
