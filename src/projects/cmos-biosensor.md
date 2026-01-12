---
title: CMOS Biosensor

---

## Project Introduction

**Name:** CMOS Biosensor

**Team Size:** 2

**Duration:** Aug 2024 - Dec 2025

**Content:** Development of low-concentration antigen detection system using 128×128 electrode array CMOS impedance sensor

<img src="./images/cmos.png" width="300px" height="300px" title="cmos"/>
<img src="./images/Entire_chip.png" width="300px" height="300px" title="entire-chip"/>
## Project Overview

**Background:** Existing bio impedance sensors measure bulk signals, resulting in low sensitivity and difficulty detecting low-concentration biomarkers

**Objective:** Secure single-particle level sensitivity by inserting amplifiers for each electrode to enable early disease detection with low-concentration antigens and advance treatment timing

## Work Performed

### Background
Need to establish a system that measures immunoassay reactions on electrode surfaces as impedance for disease biomarker detection system development

### Problems
- **Electrode characteristic optimization:** Basic electrical characteristics of electrodes and optimal PBS concentration undetermined
- **Particle detection quantification:** Need to quantify physical impedance changes caused by microbeads
- **Immunoassay protocol:** Need to establish actual immunoassay protocol on substrates similar to electrodes

### Solutions
- **Chip characterization and PBS optimization:** Applied DI water, PBS 0.01/0.1/1 mM to Chip A (with passivation layer) and Chip B (without passivation layer), calculated average impedance, standard deviation, phase, ΔZ in 5 regions. Selected PBS 0.01mM as standard solution

- **Sensitivity analysis by concentration range:** Prepared 5 solutions with 10-fold dilutions from 1.02×10⁹ beads/mL baseline, measured with PDMS sheet to prevent evaporation. Difference between low concentration (1.02×10⁶) and high concentration (1.02×10⁸) was minimal, so additionally prepared medium concentration (5.61×10⁶). Confirmed Group 4 shows high sensitivity at low concentration, Group 3 shows excellent characteristics at high concentration

- **Stepwise immunoassay protocol:** Oxygen plasma + 3% APTES treatment on silicon wafer surface, then Anti-Human IgG fixation with EDC/NHS (room temperature 1 hour), 0.1% BSA blocking, then injection of Biotinylated Anti-Human IgG and Dynabeads. First validated on glass before electrode application to reduce experimental risk

## Process

**Action 1:** Excluded Group 1, 2 with poor connections among 4 groups, selected 5×5 electrodes in upper left/upper right/center/lower left/lower right from Group 3, 4. Secured optimal signals under conditions of Rcal=2MΩ, Rfb=2MΩ for Chip A and Rcal=100kΩ, Rfb=20kΩ for Chip B. Discovered key characteristic that measurement sensitivity is high in low-frequency region

**Action 2:** Measured by setting X/Y addresses at 10-unit intervals using Python. Initial measurement showed minimal impedance difference between 1.02×10⁷ and 1.02×10⁶ beads/mL, so additionally prepared medium concentration (5.61×10⁶) sample for re-measurement

**Action 3:** Sequential validation on substrates with different physicochemical properties (Glass → Silicon wafer) to identify potential problems before final electrode application. Mixed EDC(0.4mg) + NHS(1.1mg) + Anti-Human IgG(500μg/mL) + 1×PBS 5μL each, proceeded chemical reaction at room temperature for 1 hour

### Insights
- Demonstrated problem-solving ability by immediately preparing additional samples for re-measurement when unexpected results were discovered during experiments
- Demonstrated strategic experimental design ability by first validating high-risk experiments on inexpensive and accessible substrates (Glass) before proceeding to main experiments
- Recognized the importance of optimizing measurement protocols according to substrate characteristics

## Deliverables

**Content:** Completed 128×128 CMOS impedance sensor-based early detection system for membranous nephropathy. Achieved single-particle sensitivity (1.02×10⁶~1.02×10⁹ particles/mL) and 115.17 kΩ resolution

### Key Points
- Quantitatively confirmed impedance increase in order of DI water < PBS 0.01mM < PBS 0.1mM < PBS 1mM for both chips, provided rationale for PBS 0.01mM standard solution recommendation
- Generated impedance data and heatmaps at 5 concentrations: low concentration (1.02×10⁶, 1.02×10⁷), medium concentration (5.61×10⁶), high concentration (1.02×10⁸, 1.02×10⁹)
- Visualized correlation between bead distribution and impedance changes by matching surface microscope images and heatmaps for Group 3/4
- Confirmed microbead attachment after APTES treatment on glass and silicon wafer, obtained Sandwich Immunoassay experimental results

## Growth

### Achievements
Secured signal stability for subsequent immunoassay experiments by selecting optimal PBS concentration (0.01mM). Discovered that Group 4 is more sensitive at low concentration and Group 3 at high concentration, presented optimal measurement electrode selection criteria by concentration range. Secured protocol stability and reduced experimental failure risk through stepwise validation before electrode application

### What I Learned
- Sensor calibration and optimal solution concentration selection are the foundation of measurement reliability
- Different sensitivity characteristics by concentration range require electrode selection strategy according to measurement target
- Stepwise validation (inexpensive substrate → expensive substrate) is effective in reducing experimental risk and cost
- Immediate additional experiments upon discovering unexpected results are key to improving data quality

## My Capabilities

### Capability Summary
- **Sensor characterization:** Established measurement conditions through chip comparison and PBS concentration optimization
- **Concentration-dependent sensitivity analysis:** Quantified concentration-impedance correlation through Python automated measurement and heatmap visualization
- **Immunoassay protocol:** Established complete protocol including APTES surface treatment, EDC/NHS crosslinking, Sandwich Immunoassay
- **Strategic experimental design:** Minimized risk by validating on low-cost substrates before main experiments
- **Problem-solving ability:** Secured data quality by immediately preparing additional samples and re-measuring when unexpected results were discovered