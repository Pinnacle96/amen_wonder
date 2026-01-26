# Amen Wonder & John - Wedding Website 💍

Welcome to the official wedding website for Amen Wonder & John. This project is a modern, responsive, and elegant platform designed to share our love story, event details, and collect RSVPs from our guests.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Scripts](#scripts)
- [Contributing](#contributing)

## 🌹 About the Project

This website serves as the digital hub for our upcoming wedding celebration (#BESTFOREVER2026). It is designed with a focus on elegance, user experience, and accessibility, ensuring guests can easily find information and RSVP on any device.

## ✨ Features

- **Responsive Design:** Fully optimized for desktops, tablets, and mobile phones.
- **Smooth Scrolling:** Seamless navigation between sections (Home, Our Story, Gallery, Events, RSVP).
- **Interactive Gallery:** Custom lightbox implementation to view high-quality photos.
- **Modern RSVP System:** 
    - Split-card layout with glassmorphism effects.
    - Floating label inputs for a polished UI.
    - Real-time validation and submission handling.
- **Event Details:** Clear breakdown of Ceremony and Reception times and locations.
- **Animated UI:** Subtle fade-in and slide-up animations for an engaging experience.
- **Mobile Menu:** Custom toggleable overlay menu for mobile users.

## 🛠 Tech Stack

- **HTML5:** Semantic markup structure.
- **Tailwind CSS (v3.4.1):** Utility-first CSS framework for rapid and consistent styling.
- **JavaScript (Vanilla):** Lightweight logic for the lightbox, mobile menu, and form handling.
- **Lucide Icons:** Modern, consistent iconography.
- **Google Fonts:**
    - *Playfair Display* (Serif) for headings and elegance.
    - *Montserrat* (Sans-serif) for body text and readability.

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/amen-wedding.git
    cd amen-wedding
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the CSS:**
    ```bash
    npm run build:css
    ```

4.  **Run in Watch Mode (for development):**
    ```bash
    npm run watch:css
    ```

5.  **Open the project:**
    Open `index.html` in your browser or use a live server extension (like Live Server in VS Code).

## 📂 Project Structure

```
amen-wedding/
├── dist/
│   └── output.css      # Compiled CSS file (do not edit directly)
├── public/
│   └── images/         # Image assets
├── src/
│   └── input.css       # Tailwind input directives and custom CSS
├── index.html          # Main HTML entry point
├── script.js           # Frontend logic
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
└── README.md           # Project documentation
```

## 🎨 Design System

The design is built around a sophisticated color palette reflecting the wedding theme:

- **Primary Colors:**
    - Wine (`#722F37`) / Deep Wine (`#5A232B`)
    - Gold (`#D4AF37`)
- **Neutral Colors:**
    - Soft Pink (`#FADADD`)
    - Silver (`#E5E4E2`)
    - Cream (`#FAFAF5`)
- **Typography:**
    - **Headings:** *Playfair Display* (Serif)
    - **Body:** *Montserrat* (Sans-serif)

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run build:css` | Compiles `src/input.css` to `dist/output.css` for production. |
| `npm run watch:css` | Watches for changes in your files and rebuilds CSS automatically. |

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

**Design with love by [Pinnacle Tech Hub](https://pinnacletechhub.com.ng)**
