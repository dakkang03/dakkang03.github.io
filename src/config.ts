export const siteConfig = {
  name: "Dakyung Kang",
  title: "Electrical Engineer",
  description: "Portfolio website of Dakyung Kang",
  accentColor: "#1d4ed8",
  social: {
    email: "dakkang03@gmail.com",
    linkedin: "https://www.linkedin.com/in/dakyung-kang/",
    github: "https://github.com/dakkang03",
    //blog:"https://dakkang03.github.io/blog/en/",
    //resume:"",
  },
  aboutMe:
    "I am a engineer who systematically solves complex technical problems by breaking them down into smaller steps.",
  projects: [
    {
      name: "CMOS biosensor",
      description:
        "Development of an Early Detection System for Membranous Nephropathy Using a CMOS Impedance Sensor",
      pdflink:"/pdfs/protocol.pdf",
      skills: ["MATLAB", "CMOS", "AutoCAD", "Immunoassay"],
    },
    {
      name: "ASIC DES Processor",
      description:
        "Designed and implemented a complete 64-bit Data Encryption Standard (DES) hardware cipher in Verilog",
      link: "https://github.com/seointhenerd/des-project",
      pdflink: "/pdfs/des-paper.pdf",
      skills: ["RTL", "Cadence Genus/Innovus", "DRC/LVS", "CTS"],
    },
    {
      name: "High Speed Data Acquisition Controller",
      description:
        "This project implements a configurable 16-channel data acquisition controller designed for high-speed sampling applications",
      link: "https://github.com/dakkang03/High-Speed-Data-Acquisition-Controller",
      pdflink: undefined,
      skills: ["RTL", "Python"],
    },
    {
      name: "Autonomous Multi-Modal Robot Control",
      description:
        "This project aims to develop an autonomous driving robot based on multi-sensor fusion",
      link: "https://github.com/dakkang03/ECE3610-team4-SP25",
      skills: ["MATLAB", "Arduino","CNN"],
    },
    {
      name: "DTMF Signal Decoding",
      description:
        "Developed a scoring process that accurately determines DTMF frequencies and ensures reliable operation in ideal (noise-free) signal conditions",
      link: "https://github.com/Ajayvarmann/ECE-6530_team-7_Final-project",
      pdflink: "/pdfs/dsp-paper.pdf",
      skills: ["MATLAB", "FIR filter"],
    },
  ],
  experience: [
    {
      company: "Honesty & JR Partners",
      title: "Patent Engineer",
      dateRange: "Feb 2026 - Jun 2026",
      bullets: [
        "Analyzed 10+ semiconductor IPs via transistor-level reverse engineering, drafting 8+ technical specifications for Power Inverter and Pixel Compensation circuits",
        "Directed 2 outgoing international projects and 1 Office Action (OA) response to validate architectural superiority and design feasibility for global R&D",        
      ],
    },
    {
      company: "Biomedical Micro-Nano Systems Lab",
      title: "Lab Assistant",
      dateRange: "Aug 2024 - Dec 2025",
      bullets: [
        "Co-authored 1 peer-reviewed publication on microfluidic bio-impedance sensing",
        "Led experimental design and data analysis for impedance measurement, improving sensitivity at low frequencies",        
      ],
    }
  ],
  education: [
    {
      school: "University of Utah",
      degree: "M.S. in Electrical and Computer Engineering",
      dateRange: "2028",
    },
    {
      school: "University of Utah",
      degree: "B.S. in Electrical and Computer Engineering",
      dateRange: "2025",
    },
  ],
  publication: [
  {
    title: "CMOS Impedance Sensor with 128×128 Microelectrode Arrays for Measuring Surface Coverage of Microparticles",
    author: "H. Shin, D. Kang, J. Kim, and N. Kim",
    conference: "2025 IEEE SENSORS Conference, Vancouver, Canada, Oct.2025.",
    pdflink: "pdfs/cmos-paper.pdf",
  },
  ],
  teaching: [
    {
      title:"TA for ECE 3700: Digital System Design",
    },
    {
      title:"TA for ECE 2100: Fundamentals of Electronic Circuits and Components",
    },
    {
      title:"TA for ECE 1245: Intro to Circuits Design Laboratory",
    },
    {
      title:"TA for CS 1410: Introduction to Object-Oriented Programming",
    },
    {
      title:"TA for MATH 2250: Differential Equations and Linear Algebra",
    },
    {
      title:"TA for MATH 1320: Engineering Calculus 2",
    },
    {
      title:"TA for MATH 1310: Engineering Calculus 1",
    },
    {
      title:"TA for COMP 1010: Programming for All",
    },
  ],
  awards: [
    {
      title: "Undergraduate Research Opportunity Program",
      year: "2025"
    },
    {
      title: "Dean of Student Grant Aid",
      year: "2024"
    },
    {
      title: "Undergraduate Research Opportunity Grant",
      year: "2023"
    },
    {
      title: "Dean’s Lists",
      year: "2023"
    },
    {
      title: "Dean’s Lists",
      year: "2022"
    },
  ]
};