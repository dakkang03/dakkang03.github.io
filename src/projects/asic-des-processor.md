---
title: ASIC DES Processor

---

## Project Introduction

**Name:** ASIC DES Processor

**Team Size:** 3

**Duration:** Sep 2025- Dec 2025

**Content:** ASIC design manufacturable with TSMC 180nm process (complete RTL-to-GDSII flow)

<img src="./images/des-fullchip.png" width="300px" height="300px" title="des-fullchip"/>

## Project Overview

**Background:** Hardware encryption is essential for IoT devices and communication systems, and the DES algorithm is optimal educational material for learning block cipher design principles and mastering the complete ASIC design flow

**Objective:** Implement 16-round Feistel structure DES encryption/decryption engine and SPI communication interface to design a manufacturable chip

## Work Performed

### Background
Critical errors occurred in SPI interface during Cadence Genus synthesis stage after RTL simulation passed

### Problems
- **Tristate buffer synthesis failure:** Standard cell library does not support tristate
- **Multiple driver conflict:** Two always blocks simultaneously assign the same shift register
- **Timing violation:** Asynchronous clock domain crossing caused WNS -12.742ns

### Solutions
- **Tristate removal and synchronous design:** Changed tristate logic to register-based direct output to secure standard cell compatibility
- **Single synchronous block integration:** Integrated two always blocks into single synchronous block and implemented edge detection with cs_n_prev register
- **Clock Tree Synthesis optimization:** Achieved WNS +4.315ns by applying H-tree topology, eliminating 803 timing violations
- **Antenna effect resolution:** Achieved DRC clean by automatically inserting 17 antenna protection diodes

## Process

**Action 1:** Managed sequential data flow of KEY → DATA → CONTROL → WAIT with 4-state SPI transaction controller and 5-state FSM (control state machine) design. Prevented metastability during clock domain crossing with double flip-flop synchronizer

**Action 2:** Created testbenches for individual modules (S-box, F-function, IP, FP, etc.) and verified with NIST DES vectors. Confirmed original plaintext recovery by decrypting all encryption results. Achieved 100% test pass rate

**Action 3:** Redesigned SPI after post-synthesis error analysis. Changed tristate to register-based output, integrated two always blocks into single synchronous block, implemented edge detection with cs_n_prev. Achieved 0 warnings after re-synthesis

**Action 4:** Integrated I/O pads, designed power distribution network (M5/M6), implemented H-tree with Clock Tree Synthesis. Improved WNS from -12.742ns → +4.315ns, eliminating 803 timing violations

### Insights
- RTL simulation pass does not guarantee synthesis success, so adherence to ASIC design best practices is essential
- Understanding of standard cell library limitations (tristate not supported) and importance of synchronous design
- Clock Tree Synthesis is most important in timing closure, and H-tree minimizes skew
- Recognized necessity of physical verification for manufacturability including DRC/LVS/density verification

## Deliverables

**Content:** Completed 64-bit DES encryption chip design based on TSMC 180nm process. 33.3MHz operating frequency, 133Mbps throughput, 2.607mm² die area, 4,524 gate integration

### Key Points
- Achieved 100% module verification coverage (all tests passed)
- Secured RTL-gate level functional equivalence with 0 synthesis warnings
- Tape-out ready with 0 DRC/LVS violations
- Guaranteed stable operation with timing slack +4.315ns, 0 failed paths

## Growth

### Achievements
Independently completed RTL-to-GDSII complete flow to finish manufacturable chip design. Systematically analyzed and resolved post-synthesis errors (tristate, multiple drivers) to achieve 0 synthesis warnings. Eliminated 803 timing violations through Clock Tree Synthesis and completed manufacturing preparation

### What I Learned
- RTL simulation pass does not guarantee synthesis success, so adherence to ASIC design best practices is essential
- Understanding of standard cell library limitations (tristate not supported) and importance of synchronous design
- Clock Tree Synthesis is most important in timing closure, and H-tree minimizes skew
- Recognized necessity of physical verification for manufacturability including DRC/LVS/density verification

## My Capabilities

### Capability Summary
- **Verilog RTL design and verification:** Implementation of complex FSM, datapath, clock domain crossing
- **Post-synthesis debugging:** Independent resolution of tristate, multiple driver, timing issues
- **Physical design:** Performed power distribution, CTS, routing with Cadence Innovus. Improved WNS from -12.742ns → +4.315ns
- **Tape-out preparation:** Completed design ready for foundry submission with 0 DRC/LVS violations, secured manufacturability
- **Neural network accelerator expansion:** Plan to apply experience with DES iterative operation structure to biosignal processing accelerator design

