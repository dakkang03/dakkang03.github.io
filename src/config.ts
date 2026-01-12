export const siteConfig = {
  name: "Dakyung Kang",
  title: "Electrical Engineer",
  description: "Portfolio website of Dakyung Kang",
  accentColor: "#1d4ed8",
  social: {
    email: "dakkang03@gmail.com",
    linkedin: "https://www.linkedin.com/in/dakyung-kang/",
    github: "https://github.com/dakkang03",
  },
  aboutMe:
    "I am a engineer who systematically solves complex technical problems by breaking them down into smaller steps.",
  skills: ["Verilog", "Cadence", "MATLAB", "Python", "AutoCAD"],
  projects: [
    {
      name: "CMOS biosensor",
      description:
        "Development of an Early Detection System for Membranous Nephropathy Using a CMOS Impedance Sensor",
      doclink:"https://zenodo.org/records/18136668",
      skills: ["MATLAB", "CMOS", "AutoCAD", "Immunoassay"],
    },
    {
      name: "ASIC DES Processor",
      description:
        "Designed and implemented a complete 64-bit Data Encryption Standard (DES) hardware cipher in Verilog",
      link: "https://github.com/seointhenerd/des-project",
      skills: ["RTL", "Cadence Genus/Innovus", "DRC/LVS", "CTS"],
    },
    {
      name: "High Speed Data Acquisition Controller",
      description:
        "This project implements a configurable 16-channel data acquisition controller designed for high-speed sampling applications",
      link: "https://github.com/dakkang03/High-Speed-Data-Acquisition-Controller",
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
      skills: ["MATLAB", "FIR filter"],
    },
  ],
  experience: [
    {
      company: "Biomedical Micro-Nano Systems Lab",
      title: "Lab Assistant",
      dateRange: "Aug 2024 - Dec 2025",
      bullets: [
        "Co-authored 1 peer-reviewed publication on microfluidic bio-impedance sensing",
        "Led experimental design and data analysis for impedance measurement, improving sensitivity at low frequencies",        
      ],
    },
    {
      company: "University of Utah",
      title: "Teaching Assistant",
      dateRange: "Feb 2023 - Jun 2025",
      bullets: [
        "Served as Grading TA for 3 courses and Lab TA for 6 courses, supporting 20+ students per class",
        "Helped improve selected students’ performance by over 20% through targeted guidance and lab support",
      ],
    }
  ],
  education: [
    {
      school: "University of Utah",
      degree: "Bachelor of Science in Electrical Engineering",
      dateRange: "2022 - 2025",
      achievements: [
        "GPA: 3.74/4.0",
      ],
    }
  ],
  publication: [
    {
      titles: [
        "H. Shin, D. Kang, J. Kim, and N. Kim, “CMOS Impedance Sensor with 128×128 Microelectrode Arrays for Measuring Surface Coverage of Microparticles,” 2025 IEEE SENSORS Conference, Vancouver, Canada, accepted for publication, Oct.2025.",
      ],
    }
  ],
};