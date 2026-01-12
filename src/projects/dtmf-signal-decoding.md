---
title: DTMF Signal Decoding

---

## Project Introduction

**Name:** DTMF Signal Decoding

**Team Size:** 4

**Duration:** Aug 2024 - Dec 2024

**Content:** 8-frequency band FIR Bandpass filter design and scoring-based tone identification algorithm implementation

## Project Overview

**Background:** DTMF (Dual-Tone Multi-Frequency) signals represent each digit or symbol as a combination of two different frequency tones in telephone communication systems. Accurate DTMF decoding requires high-performance filter design that precisely separates each frequency component and tone identification algorithm

**Objective:** Design FIR-based Bandpass filters that accurately separate 8 DTMF frequencies (697, 770, 852, 941, 1209, 1336, 1477, 1633 Hz), and identify two activated frequencies in each tone section to restore phone number sequence (407*89132#BADC)

## Work Performed

### Background
Need to verify DTMF signal decoding in ideal noise-free environment, and analyze frequency selectivity and out-of-band attenuation characteristics through filter length (L=40, L=80) comparison

### Problems
- **Insufficient frequency separation precision:** Possibility of false detection due to interference between adjacent frequency bands
- **Filter length optimization:** Need to quantitatively compare performance difference between L=40 and L=80 filters to determine optimal filter length
- **Tone identification algorithm:** Need scoring logic to accurately identify two activated frequencies from each BPF output

### Solutions
- **8-frequency band FIR BPF design:** Designed filters with maximum gain at each center frequency (697~1633Hz) and acceptable level of adjacent band interference. L=80 filter provides higher frequency resolution and out-of-band attenuation characteristics compared to L=40

- **Absolute value-based tone detection:** Identified tone activation sections by calculating absolute value (|y[n]|) after passing input signal through each filter. Filter output amplitude at corresponding center frequency significantly increases in activation sections

- **Spectrogram verification:** Clearly confirmed two frequency components in each tone section through time-frequency analysis using STFT (Short-Time Fourier Transform). Successfully restored entire phone number sequence

## Process

**Action 1:** Implemented 8-frequency band FIR Bandpass filters in MATLAB. Analyzed frequency selectivity and out-of-band attenuation characteristics by comparing filter lengths L=40 and L=80. Confirmed all filters have maximum gain at specified center frequencies and adjacent band interference at acceptable level

**Action 2:** Generated random phone number sequence signal in MATLAB and passed through each filter. Detected tones by calculating absolute value (|y[n]|). Verified frequency selectivity effect as output amplitude of center frequency filter increases in tone activation sections while outputs of other frequency band filters remain low

**Action 3:** Performed time-frequency analysis with STFT. Clearly displayed two frequency components for each tone section in single DTMF signal spectrogram. Each digit's frequency combination clearly distinguished in actual phone number sequence spectrogram, verifying normal operation of DTMF encoding and decoding system

**Action 4:** Developed scoring process to accurately identify two activated frequencies from each BPF output. Restored entire phone number sequence 407*89132#BADC without errors, confirming reliable operation in ideal noise-free signal environment

### Insights
- Filter length is a tradeoff between frequency resolution and computational complexity, delay time consideration essential in real-time systems
- Absolute value-based tone detection is simple but very effective in noise-free environments
- Visualization tools like spectrograms play key role in filter design verification and debugging
- Ideal environment verification provides filter design baseline, additional research on noise response strategies needed for real environment application

## Deliverables

**Content:** Completed 8 DTMF frequency band FIR Bandpass filter system. Successfully restored phone number sequence with scoring-based tone identification algorithm

### Key Points
- L=80 filter provides higher frequency resolution and out-of-band attenuation characteristics compared to L=40
- All filters achieved maximum gain at center frequencies, adjacent band interference at acceptable level
- Clearly identified two frequency components in each tone section (spectrogram verification)
- Confirmed normal operation of DTMF encoding/decoding system through successful restoration of entire phone number sequence

## Growth

### Achievements
Achieved high frequency resolution and out-of-band attenuation characteristics with L=80 filter. Restored entire phone number sequence 407*89132#BADC without errors using scoring-based tone identification algorithm. Clearly confirmed two frequency components in each tone section through spectrogram verification

### Lessons Learned
- Filter length is a tradeoff between frequency resolution and computational complexity, delay time consideration essential in real-time systems
- Absolute value-based tone detection is simple but very effective in noise-free environments
- Visualization tools like spectrograms play key role in filter design verification and debugging
- Ideal environment verification provides filter design baseline, additional research on noise response strategies needed for real environment application

## My Capabilities

### Capability Summary
- **Filter design:** Implemented 8-frequency band Bandpass filters in MATLAB and analyzed frequency selectivity
- **Tone identification algorithm:** Accurately identified DTMF frequencies through absolute value-based tone detection and scoring process
- **Time-frequency analysis:** Visual verification of filter performance through spectrogram (STFT) time-frequency analysis
- **Performance optimization:** Analyzed tradeoff between frequency resolution and computational complexity through filter length comparison (L=40 vs. L=80)
- **System implementation:** Implemented and verified complete DTMF encoding/decoding system from filter design to tone identification