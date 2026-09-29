# Enterprise Income Tracker

An enterprise-grade, single-page React application built with **Vite** and **Bootstrap 5** for registering and managing income categories, occupation details, and financial ranges in Philippine Peso (₱).

---

## Features

- **Income Category Registration**: Fast entry form to log category names and detailed descriptions.
- **Occupation & Range Tracking**: Custom inputs to capture work/occupation details and custom income ranges.
- **Dynamic Field Formatting**: 
  - Automatic uppercase conversion for category names.
  - Automatic length truncation (`...`) for text over 25 characters to keep table views tidy.
  - Automatic Philippine Peso (`₱`) formatting for income range entries.
- **Interactive Visual Feedback**:
  - Input fields dynamically highlight with a **green border and subtle background glow** as you type.
  - Temporary **"Success!"** banner notification appears upon successful registration.
- **Dynamic Ledger Table**: Displays all registered records cleanly in an interactive ledger view.

---

## Tech Stack

- **Framework**: React 18+ (Vite setup)
- **Styling**: Bootstrap 5 + Custom CSS (`App.css`, `index.css`)
- **State Management**: React Hooks (`useState`)
- **Language**: JavaScript (JSX / ES6+)

---

## Directory Structure

```text
my-react-app/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.css          # Custom styling & green input focus states
│   ├── App.jsx          # Primary application component & state logic
│   ├── index.css        # Base global CSS styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template including Bootstrap 5 CDN
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite build configuration