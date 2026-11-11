// All the words on the site live here. Change the text, and the site updates.

export const profile = {
  name: "Naksala Sabeenthiran",
  title: "Software developer and researcher",
  intro:
    "I build web applications and AI-driven tools, and I am currently researching how to make LLM-based cyber investigation trustworthy.",
  email: "snaksala98@gmail.com",
  linkedin: "https://www.linkedin.com/in/naksala-sabeenthiran-47b6a1196",
  github: "https://github.com/Naksala",
  website: "https://naksala.github.io",
  photo: "/profile.jpg",
};

// Words that type and delete themselves in the hero.
export const roles = [
  "Software developer",
  "AI and LLM builder",
  "Cybersecurity researcher",
  "GIS Developer",
  "Digital Designer",
  "Computer Science graduate",
  "Tutor(Mathematics, Programming, AI)",
];

export const about = [
  "I am a Computer Science and Technology graduate with experience in software engineering, university teaching and research.",
  "My work covers full-stack web development, AI-driven applications and geospatial technologies, backed by a design eye for UI/UX. I enjoy interdisciplinary problems: using AI, cybersecurity, blockchain and quantum computing to solve real-world challenges.",
];

export const education = {
  degree: "BSc (Hons) in Computer Science and Technology",
  school: "Uva Wellassa University of Sri Lanka",
  years: "2020 – 2024",
  grade: "GPA 3.22",
  thesis:
    "Dynamic Procedural Quest Generation with Evolving Narratives in Role Playing Games",
};

export const research = {
  status: "Ongoing research",
  title:
    "Evidence-Grounded LLM with Knowledge Graph for AI-Generated Cyber Attack Investigation",
  summary:
    "Independent research on making LLM-based cybersecurity investigation trustworthy. It combines Large Language Models with Neo4j knowledge graphs to produce explainable, evidence-backed forensic reports for AI-generated cyber attacks.",
  tags: ["LLM", "Knowledge Graph", "Cybersecurity", "Digital Forensics", "Neo4j"],
  // The four steps of the investigation pipeline shown in the Research section.
  pipeline: [
    { name: "Evidence", text: "Logs, network traces and artefacts from an incident are collected and cleaned." },
    { name: "Knowledge graph", text: "Hosts, users, IP addresses and events become nodes in Neo4j, linked by their relationships." },
    { name: "Grounded LLM", text: "The language model answers only from facts retrieved from the graph, instead of guessing." },
    { name: "Forensic report", text: "Every claim in the report points back to its evidence, so an investigator can verify it." },
  ],
  publication: {
    title:
      "Developing the Volunteer Spatial Information Using OpenStreetMap for Countryside Sustainable Development in Uva Province, Sri Lanka",
    publisher: "IGI Global, 2025",
    link: "https://www.igi-global.com/chapter/developing-the-volunteer-spatial-information-using-openstreetmap-forcountryside-sustainable-development-in-uva-province-sri-lanka/373740",
  },
};

export const experience = [
  {
    role: "Temporary Instructor",
    place: "Department of Computer Engineering, University of Jaffna",
    period: "May 2025 – Jun 2026",
    points: [
      "Led undergraduate labs in C++, Java, Data Structures and Algorithms, Machine Learning and Operating Systems.",
      "Guided design projects and evaluated assignments, lab reports and practical exams.",
    ],
  },
  {
    role: "Associate Graphic Designer",
    place: "Huex Pvt Ltd (Remote)",
    period: "Jun 2024 – May 2025",
    points: [
      "Designed logos, social media graphics and posters using Illustrator, Photoshop, Figma and Canva.",
    ],
  },
  {
    role: "Software Developer Intern",
    place: "UNDP Sri Lanka, Badulla",
    period: "May 2024 – Sep 2024",
    points: [
      "Built a web Geoportal and GPS tracking apps with React.js.",
      "Worked with QGIS, ArcGIS and JOSM for mapping and spatial data.",
    ],
  },
];

// Shown in the slow scrolling line, so keep each entry short.
export const technologies = [
  "Python", "Java", "C++", "JavaScript", "React.js", "Next.js", "HTML5", "CSS3",
  "Tailwind CSS", "Node.js", "Express.js", "Spring Boot", "Django", "REST APIs",
  "MySQL", "Neo4j", "Cypher", "Scikit-learn", "OpenCV", "YOLOv5", "LLMs",
  "Knowledge Graphs", "QGIS", "ArcGIS", "OpenStreetMap", "Figma", "Git", "Linux", "AWS",
];

export const projects = [
  {
    name: "Travel Guide Website",
    category: "Web",
    text: "A responsive tourism site with an interactive interface for exploring destinations.",
    stack: ["React.js"],
    link: "https://tourism-guide-new.vercel.app/",
  },
  {
    name: "Christmas Offers Website",
    category: "Web",
    text: "A promotional site with product displays and seasonal visuals, deployed on GitHub Pages.",
    stack: ["React.js", "Tailwind CSS"],
    link: "https://naksala.github.io/christmas-offer-website/",
  },
  {
    name: "AI Quest Generator (thesis)",
    category: "AI",
    text: "Generates adaptive game quests using an LLM and a dynamic knowledge graph.",
    stack: ["Unity", "GPT-4o", "Neo4j", "Node.js"],
  },
  {
    name: "Assistive Robot Simulation",
    category: "AI",
    text: "A simulation concept using object detection to support navigation for visually impaired people.",
    stack: ["Python", "OpenCV", "YOLOv5"],
  },
  {
    name: "Agile Scrum Project Manager",
    category: "Web",
    text: "Frontend and UI/UX for a web tool that organises tasks and Scrum sprints.",
    stack: ["React.js", "Spring Boot"],
  },
  {
    name: "Utility Management System",
    category: "Web",
    text: "Frontend interfaces for a web-based utility management application.",
    stack: ["React.js", "Node.js"],
  },
];
