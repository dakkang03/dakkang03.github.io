---
title: Autonomous Multi-Modal Robot Control

---

## Project Introduction

**Name:** Autonomous Multi-Modal Robot Control

**Team Size:** 3

**Duration:** Jan 2025 - Apr  2025

**Content:** Line tracking, wall following, color recognition with 6-channel IR sensor, ultrasonic sensor, encoder, RGB sensor fusion

<img src="./images/multimodal-race.png" height="500px" title="des-fullchip"/>

## Project Overview

**Background:** Autonomous driving robots need to stably follow given paths and drive quickly and accurately in straight/curved sections, maintain constant distance from walls and complete circular driving. Complex tasks required including detecting color cards and moving to target locations

**Objective:** Implement line tracking with 6-channel IR reflection sensor (PID control), wall following with ultrasonic sensor (distance range-based control), angle rotation and color recognition with encoder/RGB sensor, and design fully automatic sequence selecting driving mode with CNN-based gestures

## Work Performed

### Background
Each module (line tracking, wall following, color recognition) operates individually but needs to be connected as one integrated sequence. Need to change driving order according to gestures 0 and 1

### Problems
- **Line tracking instability:** Deviation occurred in curves when increasing straight section speed. Sensor data unstable due to ambient brightness changes
- **Wall following vibration:** Excessive vibration occurred during sensor noise and rapid distance changes. Start/end detection unclear
- **Color recognition error:** Angle rotation error accumulation due to encoder aliasing. No safety stop when target color reconfirmation fails

### Solutions
- **IR sensor calibration + weighted error calculation:** Secured robust data against ambient brightness through min/max normalization of each channel. Faster recovery from large deviations by assigning larger weights to outer channels ($error = -3×IR1 - 2×IR2 - IR3 + IR4 + 2×IR5 + 3×IR6$). Improved straight section speed by 20% while achieving 90%+ success rate in curved sections

- **Differential control by distance range:** Divided lateral distance (leftDistance) into 4 ranges for differential motor output. Right turn correction when too far (>700mm), straight driving in normal range, left turn avoidance when too close (<175mm). Treated 0 value (undetected) as far distance to induce correction. Completed wall following cycle without excessive vibration

- **Duty cap + Kick motor + Encoder logging:** Prevented motor stall by specifying min/max duty range. Minimized vibration with kick motor sequence. Maintained angle error within ±5° by logging encoder initial value before rotation. Achieved 100% success rate with target color reconfirmation loop

## Process

**Action 1:** Designed weighted error calculation after 6-channel IR sensor calibration. Induced fast recovery from large deviations by assigning high weights to outer channels (-3, +3). Real-time motor speed adjustment with P control + conditional avoidance logic. Implemented event-based exception handling logic for complete line departure, endpoint arrival, etc.

**Action 2:** Fully automated approach → 90° right turn → wall following → end detection after ultrasonic sensor initialization. Differential motor output by dividing lateral distance into 4 ranges (>700mm, 300-700mm, <175mm, normal). Implemented termination condition with Reflection all-dark detection. Treated 0 value (undetected) as far distance to induce deviation correction, prevented vibration with duty limit in sharp turns

**Action 3:** Primary RED/BLUE judgment with R/G/B values after RGB color sensor initialization. Logged initial value before encoder-based angle rotation (±45°). Prevented motor stall with duty cap in straight sections. Repeated measurement and judgment with target color reconfirmation loop (initial value ±10 tolerance), then safety stop

**Action 4:** Determined driving sequence with CNN-based gesture recognition (2 consecutive identical gesture detections). Gesture 0: Line → Wall → Color, Gesture 1: Wall → Line → Color. Implemented fully automatic sequence by integrating individual functions and transition logic for each mode (Line, Wall, Color)

### Insights
- Sensor calibration and data preprocessing (normalization, weighting) are key to environmental change resilience
- Range-based rule control is more practical and easier to debug than complex PID tuning
- Small optimizations (duty cap, kick motor, encoder logging) accumulate to significant performance improvements
- Stepwise approach of completing individual modules then integrating is the shortcut for complex system development

## Deliverables

**Content:** Completed multi-modal sensor fusion autonomous driving robot. Two driving sequences selectable with CNN gesture. Achieved integration of line tracking, wall following, color recognition

### Key Points
- Improved straight section speed by 20% while achieving 90%+ success rate in curved sections for line tracking
- Completed wall following cycle without excessive vibration, reliable termination judgment based on Reflection all-dark
- Achieved 100% success rate for color recognition, maintained angle error within ±5°
- Two fully automatic driving sequences according to Gesture 0/1, 100% success rate in demonstration sections

## Growth

### Achievements
Simultaneously achieved 20% speed improvement in straight sections and 90%+ success rate in curved sections for line tracking. Eliminated wall following vibration and completed circular driving. Achieved 100% success rate for color recognition and maintained angle error within ±5°. Built two fully automatic sequences based on CNN gesture

### What I Learned
- Sensor calibration and data preprocessing (normalization, weighting) are key to environmental change resilience
- Range-based rule control is more practical and easier to debug than complex PID tuning
- Small optimizations (duty cap, kick motor, encoder logging) accumulate to significant performance improvements
- Stepwise approach of completing individual modules then integrating is the shortcut for complex system development

## My Capabilities

### Capability Summary
- **Multi-sensor fusion:** Implemented line/wall/color recognition by integrating 6-channel IR, ultrasonic, encoder, RGB sensors
- **Data preprocessing:** Secured environmental change resilience through sensor normalization, weighted error calculation
- **Rule-based control:** Achieved stable driving without complex PID through differential control by distance range
- **System integration:** Built two fully automatic sequences with CNN gesture after completing individual modules
- **Detail optimization:** Significant performance improvement through small optimizations such as duty cap, kick motor, undetected value handling