---
title: High Speed Data Acquisition Controller

---

## Project Introduction

**Name:** High Speed Data Acquisition Controller

**Team Size:** 1

**Duration:** Sep 2025 – Jul 2026

**Content:** 8-channel ECG/EEG/EMG real-time biosignal acquisition system with 4 arbitration modes, 16-entry FIFO, integrated MAC array for anomaly detection, and assertion-based functional verification

---

## Project Overview

**Background:** Bedside patient monitors must simultaneously acquire biosignals across multiple modalities — ECG (500 Hz, highest clinical priority), EEG and EMG (250 Hz) — while ensuring that high-priority cardiac data is never delayed by lower-priority channels. Efficient, configurable channel arbitration and a decoupled buffering strategy are essential for meeting real-time constraints.

**Objective:** Design an 8-channel biosignal acquisition controller in SystemVerilog featuring four arbitration strategies (Round-Robin, Priority, Weighted, Dynamic), a 16-entry FIFO with 2-level watermark, a bidirectional SPI configuration interface, and an integrated 8×4 MAC array for real-time per-channel anomaly scoring. Validate the design with SystemVerilog Assertions, constrained-random testbenches, functional coverage, and a Python golden model.

---

## Work Performed

### Design

**Arbitration modes**

Implemented four configurable arbitration modes, each providing different latency-throughput tradeoffs:

- **Round-Robin:** Cycles through enabled channels in order, guaranteeing maximum wait time of N−1 cycles and eliminating starvation
- **Priority:** Always selects the highest-priority enabled channel; provides lowest latency for critical channels but risks starvation for low-priority channels
- **Weighted:** ECG channels assigned weight=2, EEG/EMG weight=1, matching the 2:1 clinical sampling rate ratio (500 Hz vs 250 Hz); default mode
- **Dynamic:** Falls back to Weighted; immediately promotes any channel with `channel_urgent=1` asserted for event-driven preemption

**FIFO design**

Redesigned from a hierarchical 672-entry structure to a single 16-entry FIFO with a 2-level watermark (`almost_full` at count ≥ 12). Depth 16 covers one full weighted arbitration round (4×ECG + 2×EEG + 2×EMG = 12 minimum slots) plus margin. The simpler structure eliminated timing closure issues while maintaining all required backpressure semantics.

**SPI interface**

Extended the SPI slave to support bidirectional read/write. Configuration registers (arbitration mode, channel enable, per-channel weights/priorities) are writable via SPI. FIFO contents are readable via SPI for streaming to an external MCU.

**MAC array integration**

Integrated an 8×4 channel-parallel MAC array (INT12 unsigned × INT8 signed → INT32) directly into the acquisition pipeline via a FIFO write tap. A per-channel 4-sample sliding window buffer accumulates ADC samples; when a channel's window fills, `mac_valid_in` is asserted and all 8 channels are scored simultaneously against pre-loaded anomaly pattern weights. The `mac_alert` output pulses for 1 cycle when any channel's score exceeds `mac_threshold`.


## Results

- **17 SVA assertions** (8 FIFO + 9 Arbiter), all passing, zero violations
- **100% functional coverage** (Questa Sim covergroups) across FIFO occupancy states, simultaneous read/write, all 16 arbitration mode transitions, reset-during-operation, and all-8-channel contention
- **4 RTL bugs** found and fixed through directed simulation and waveform analysis
- **MAC array:** 1,000/1,000 test vectors, 0 mismatches vs Python golden model
- **Zero regression:** existing SPI datapath unaffected by MAC array integration (16/16)

---

## Insights

- System-level tests alone produce low coverage due to inter-module dependencies; unit-level testbenches with direct signal control are essential for verifying corner cases such as simultaneous urgent requests, priority conflicts, and weight accumulation
- RTL bugs that are invisible at the interface level (CDC hazards, FSM byte-alignment errors, pipeline data-pairing mismatches) require waveform-level analysis to isolate; coverage metrics alone cannot substitute for this
- Keeping the MAC array connection passive (FIFO write tap rather than shared FIFO read port) preserved all existing verification results and kept the integration change minimal and auditable
- Simplifying a hierarchical FIFO to a single module reduced timing complexity and made coverage analysis tractable without sacrificing functional requirements