---
title: High Speed Data Acquisition Controller

---

## Project Introduction

**Name:** High Speed Data Acquisition Controller

**Team Size:** 1

**Duration:** Sep 2025 - Oct 2025

**Content:** ECG/EEG/EMG real-time processing system with 4 arbitration modes and intelligent buffering system

## Project Overview

**Background:** Biomedical signal acquisition systems need to simultaneously process 16 channels with different urgency levels such as ECG (electrocardiogram), EEG (electroencephalogram), EMG (electromyogram). Efficient bandwidth allocation is key when urgent cardiac monitoring requires immediate processing but routine brain waves can wait

**Objective:** Design high-speed data acquisition controller with 4 arbitration strategies (Round-Robin, Priority, Weighted, Dynamic), 672-entry FIFO buffering, derivative-based trigger detection, real-time performance monitoring

## Work Performed

### Background
Initial system-level testbench achieved only 28% coverage due to channel_ready signal constraints, failing to verify complex multi-channel arbitration scenarios

### Problems
- **Arbiter verification shortage:** Connected channel_ready signals prevented independent control, making it impossible to test complex scenarios such as simultaneous urgent requests, priority conflicts, weight accumulation
- **FIFO hierarchy complexity:** Initial hierarchical FIFO design caused implementation complexity and timing closure issues
- **Integration test limitations:** System-level tests made edge case verification difficult due to inter-module dependencies

### Solutions
- **Independent testbench development:** Wrote standalone testbenches with direct signal control to verify all arbitration paths including tie-breaking logic, weight accumulation, urgent channel preemption. Improved Arbiter coverage from 28% → 74% (branch 93%, statement 99%)
- **Single FIFO redesign:** Redesigned as single 672-entry FIFO with multi-level monitoring (L1: <32, L2: 32-160, L3: >160) and 90% backpressure threshold implementation. Achieved 86% FIFO coverage (expression 100%)
- **2-tier verification strategy:** Verified module-specific edge cases with Standalone tests (74%+ average), end-to-end functionality with System Integration (58%) for mutual complement

## Process

**Action 1:** Designed 4 arbitration modes - Round-Robin (fair sequential selection), Priority (highest priority wins), Weighted (cumulative weight comparison), Dynamic (urgent channel preemption). Each mode provides different latency-throughput tradeoffs

**Action 2:** Identified root cause through coverage analysis and developed independent testbenches. Removed channel_ready constraints and directly stimulated complex scenarios such as tie-breaking, mode switching, priority conflicts. Improved Arbiter coverage from 28% → 74%

**Action 3:** Redesigned single 672-entry FIFO with multi-level monitoring (L1/L2/L3) and 90% backpressure. Verified all critical datapath scenarios including empty/full transitions, overflow conditions, simultaneous read/write. Achieved 86% FIFO coverage

**Action 4:** Detected rapid signal changes with derivative threshold engine. Dual detection with amplitude threshold + derivative threshold, tracked previous samples per channel, false positive filtering (trigger rate limiting), prevented spurious triggers with saturation arithmetic. Achieved 74% Trigger coverage

### Insights
- System-level tests show low coverage due to inter-module dependencies, so 2-tier strategy focusing on individual module edge cases with standalone tests is effective
- When connected signals like channel_ready interfere with independent testing, independent testbenches with direct signal control dramatically improve coverage
- Hierarchical design is intuitive but increases implementation complexity, so redesigning as single module while maintaining functionality is advantageous for timing and verification

## Deliverables

**Content:** Completed 16-channel high-speed biosignal acquisition system. Integrated 4 arbitration modes, 672-entry FIFO, derivative trigger engine, performance monitor, SPI configuration interface

### Key Points
- Achieved 74%+ standalone module coverage (Arbiter 74%, FIFO 86%, Trigger 74%)
- Completed verification of all arbitration paths with Arbiter coverage improvement from 28% → 74%
- Verified all datapath scenarios with 100% FIFO expression coverage
- Verified both module-specific edge cases and system integration with 2-tier verification strategy (Standalone 74% + Integration 58%)

## Growth

### Achievements
Overcame initial 28% coverage limitation to achieve 74%+ with independent testbenches. Systematically verified complex multi-channel arbitration scenarios (simultaneous urgent requests, priority conflicts, weight accumulation) to eliminate data loss possibilities. Resolved hierarchical FIFO timing issues through single FIFO redesign

### What I Learned
- Coverage analysis is essential for root cause identification, and independent testbenches are the solution when signal dependencies constrain testing
- For complex systems, 2-tier strategy of standalone tests (edge case focus) and integration tests (end-to-end verification) is effective
- Simplicity of single module is more practical for implementation and verification than intuitiveness of hierarchical design
- Verification coverage improvement directly prevents critical errors like data loss in actual deployment, not just design quality improvement

## My Capabilities

### Capability Summary
- **Systematic verification strategy:** Verified module-specific edge cases and system integration with 2-tier verification (Standalone 74% + Integration 58%)
- **Coverage analysis and improvement:** Improved Arbiter from 28% → 74% through root cause analysis, overcame signal dependency constraints
- **Complex system design:** Designed and integrated multi-layer structures including 4 arbitration modes, multi-level FIFO, derivative trigger engine
- **Redesign decisiveness:** Resolved hierarchical FIFO timing issues through single FIFO redesign while maintaining functionality
- **Practical problem-solving:** Overcame initial verification limitations through independent testbench development to prevent data loss in clinical deployment