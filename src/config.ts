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
    resume:"/pdfs/Dakyung_Kang_Resume.pdf",
  },
  aboutMe:[
    "I completed my B.S. in ECE at the University of Utah. Based on the hardware stack from analog circuit analysis to digital RTL design, I am interested in building reliable and silicon-ready digital systems.",
    "As an undergraduate researcher, I have published in IEEE Sensors about CMOS bio-signal sensor research. I have validated a 128*128 sensor array designed as hexagonal and octagonal, with different electrode gaps for increasing its sensitivity at low concentrations. I have compared the impedance of concentration with each electrode group through heatmaps.",
    "I worked as a patent engineer and analyzed display circuits from LG Display and inverter circuits from Hyundai Mobis. Reading schematics across MOSFET processes, inverter topologies, and display driving circuits under tight time constraints trained me to extract the functional core and novelty of an unfamiliar circuit quickly. This skill directly informs how I approach RTL design decisions.",
    "In my VLSI coursework during my B.S., I implemented a DES encryption engine in Verilog and carried it through a full RTL-to-GDSII flow using Cadence Genus and Innovus. I achieved timing closure and clean DRC/LVS sign-off on TSMC 180nm.",
    "My personal project, the High-Speed Data Acquisition Controller, is an 8-channel biosignal acquisition system designed for real-time anomaly detection. The design features four arbitration modes, a 16-entry FIFO, and an integrated 8×4 MAC array that scores each channel's signal against a learned pattern. Verification includes 17 SystemVerilog Assertions, constrained-random testbenches with 100% functional coverage, and a Python golden model validated against 1,000 random vectors with 0 mismatches.",
    "I am drawn to RTL design because it sits at the intersection of architectural intent and physical realizability. It is close enough to the circuit to matter, structured enough to reason about rigorously.",
  ],
  projects: [
    {
      name: "CMOS biosensor",
      description:
        "Development of an Early Detection System for Membranous Nephropathy Using a CMOS Impedance Sensor",
      mdfile: "cmos-biosensor.md",
      pdflink:"/pdfs/protocol.pdf",
      skills: ["CMOS", "MATLAB", "AutoCAD", "SNR", "Immunoassay"],
    },
    {
      name: "DES Processor - VLSI",
      description:
        "Designed and implemented a complete 64-bit Data Encryption Standard (DES) hardware cipher in Verilog",
      mdfile: "asic-des-processor.md",
      link: "https://github.com/seointhenerd/des-project",
      pdflink: "/pdfs/des-paper.pdf",
      skills: ["VLSI", "Verilog", "RTL", "Cadence Genus/Innovus", "DRC/LVS", "CTS"],
    },
    {
      name: "High Speed Data Acquisition Controller",
      description:
        "This project implements a configurable 8-channel data acquisition controller designed for high-speed sampling applications",
      mdfile: "high-speed-data-acquisition-controller.md",
      link: "https://github.com/dakkang03/High-Speed-Data-Acquisition-Controller",
      pdflink: undefined,
      skills: ["System Verilog", "RTL", "Python", "Mac Array"],
    },
    {
      name: "Autonomous Multi-Modal Robot Control",
      description:
        "This project aims to develop an autonomous driving robot based on multi-sensor fusion",
      mdfile: "autonomous-multi-modal-robot-control.md",
      link: "https://github.com/dakkang03/ECE3610-team4-SP25",
      skills: ["MATLAB", "Arduino","CNN"],
    },
    {
      name: "DTMF Signal Decoding",
      description:
        "Developed a scoring process that accurately determines DTMF frequencies and ensures reliable operation in ideal (noise-free) signal conditions",
      mdfile: "dtmf-signal-decoding.md",
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
    /*
    {
      school: "University of Utah",
      degree: "M.S. in Electrical and Computer Engineering",
      dateRange: "2028",
      achievemt:"",
    },
    */
    {
      school: "University of Utah",
      degree: "B.S. in Electrical and Computer Engineering",
      dateRange: "2025",
      achievemt:"",
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
    { title:"TA for ECE 3700: Digital System Design" },
    { title:"TA for ECE 2100: Fundamentals of Electronic Circuits and Components" },
    { title:"TA for ECE 1245: Intro to Circuits Design Laboratory" },
    { title:"TA for CS 1410: Introduction to Object-Oriented Programming" },
    { title:"TA for MATH 2250: Differential Equations and Linear Algebra" },
    { title:"TA for MATH 1320: Engineering Calculus 2" },
    { title:"TA for MATH 1310: Engineering Calculus 1" },
    { title:"TA for COMP 1010: Programming for All" },
  ],
  awards: [
    { title: "Undergraduate Research Opportunity Program", year: "2025" },
    { title: "Dean of Student Grant Aid", year: "2024" },
    { title: "Undergraduate Research Opportunity Grant", year: "2023" },
    { title: "Dean's Lists", year: "2023" },
    { title: "Dean's Lists", year: "2022" },
  ],
  skills: [] as string[],
};