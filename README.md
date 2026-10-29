# Chemix — Preparation of Liquid Detergent

> **Chemical Engineering Laboratory Prototype | SY B.Tech Minor Project**  
> School of Chemical Engineering, MIT Academy of Engineering, Alandi (D), Pune – 412105, Maharashtra, India  
> Academic Year 2026–2027

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20with-Vercel-000000.svg?style=flat&logo=vercel)](https://vercel.com/)
[![React](https://img.shields.io/badge/React-19-blue.svg?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)

---

## 🧪 Project Overview

This project is an interactive, academic-grade web presentation and experimental documentation portal for the laboratory preparation of a liquid detergent prototype. Built for faculty evaluation, examiners, and peer review, it showcases:

- **Laboratory Formulation**: Unit operations, reagent stoichiometry, and verified values from **Lab Notebook Table 6.1**.
- **Interactive Chemical Registry**: 9 chemical cards with safety classifications, formulas, and verified target vs. actual measurements.
- **Experimental Agitation**: Authentic photographic documentation of digital tachometer readout (**~970 RPM**) on a REMI 2MLH magnetic hotplate stirrer.
- **Process Flow Diagram (PFD)**: High-resolution vector diagram illustrating raw materials preparation, controlled mixing, heat assist, ambient cooling, and sample collection.
- **Photographic Gallery & Lightbox**: Figures 5.1 through 5.8 with gesture swipe on mobile and keyboard controls on desktop.
- **Laboratory Presentation Video**: Embedded 16:9 Google Drive video and local lab presentation stream.

---

## 👥 Project Team

- **Pranav Chopade** (PRN: 202501110025)
- **Rushabh Somase** (PRN: 202501110024)
- **Swayam Kasar** (PRN: 202501110022)
- **Yash Kadam** (PRN: 202501110020)
- **Dishant Maraskolhe** (PRN: 202501110018)

*Faculty Guide*: School of Chemical Engineering (To be added)

---

## 📊 Lab Notebook Table 6.1 Data

| Ingredient | Target Quantity | Actual Quantity | Remarks |
| :--- | :---: | :---: | :--- |
| **SLS (Sodium Lauryl Sulfate)** | 2 gm | 2 gm | Primary anionic surfactant / foam generator |
| **NaOH (Sodium Hydroxide)** | 2 gm | 2 gm | Saponification & alkaline adjustment (*Corrosive*) |
| **Distilled water** | 20 ml | 20 ml | Continuous aqueous solvent phase |
| **Castor oil** | 5 ml | 5 ml | Fatty substrate / emollient precursor |
| **EDTA** | 3 ml | 3 ml | Polyvalent metal ion chelation (water conditioning) |
| **Glycerol** | 5 ml | 5 ml | Humectant & viscosity co-solvent |
| **CuSO₄ (Copper Sulfate)** | 2 gm | 2 gm | Imparts characteristic vibrant blue colour |

---

## 🚀 Development & Deployment

### Local Setup

```bash
# Clone the repository
git clone https://github.com/pranav-4797/Chemix.git
cd Chemix

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Deploy to Vercel

This repository is optimized for one-click deployment on **Vercel**:
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

---

## ⚠️ Academic Disclaimer

*Laboratory prototype for educational minor project documentation only. Not evaluated or certified for skin, dish, clothing, or household application.*
