# PulseOps — Enterprise Dashboard

PulseOps is a React-based dashboard built as part of my frontend development internship. It provides a centralized interface for monitoring business metrics and managing orders, team members, and dashboard settings.

The project focuses on building a responsive dashboard, reusable React components, data handling, and interactive UI functionality.

## Features

- **Dashboard:** KPI cards displaying revenue, orders, active customers, and conversion rate.
- **Live Revenue Chart:** Simulated real-time revenue updates with pause/resume functionality.
- **Analytics:** Dedicated analytics section for viewing business metrics.
- **Orders Management:** Search, filter, and sort order records.
- **Team Directory:** Searchable and sortable team member table with availability filters.
- **Settings:** Application settings with light and dark theme support.
- **Authentication UI:** Login page with protected routes, logout functionality, and show/hide password control.
- **Responsive UI:** Dashboard layout designed for different screen sizes.

## Tech Stack

- React
- JavaScript (ES6+)
- Vite
- CSS
- React Router DOM
- JSON (local data storage for demo records)

## Project Structure

```text
PulseOps/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/annaskhatab57/PulseOps.git
```

Navigate into the project folder:

```bash
cd PulseOps
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your terminal.

## Production Build

To create a production build:

```bash
npm run build
```

The generated files will be placed in the `dist` directory.

## Demo Authentication

PulseOps uses simulated frontend authentication for demonstration purposes. It is not connected to a backend authentication service.

## Data

Dashboard metrics, order records, and team information are stored in local JSON files and used for demonstration purposes.

## Purpose

This project was developed to practice React component architecture, routing, state management, data filtering, sorting, dashboard UI development, and frontend functionality as part of an internship task.

---

**Status:** Completed — Internship Project (Task 4)
