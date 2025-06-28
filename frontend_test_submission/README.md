# React URL Shortener

A frontend web application built using React and Material UI.

---

## Tech Stack

- React (Functional Components & Hooks)
- Material UI (MUI)
- React Router DOM
- LocalStorage (for persistence)
- Custom Logging Middleware (provided)

---

## Process Followed

- Set up the project using `create-react-app`
- Designed component-based architecture for reusability
- Used Material UI for a clean and responsive interface
- Implemented custom logging via the provided middleware
- Managed URL data with localStorage
- Used React Router for navigation and redirection handling

---

## Architecture Overview
src/
├── components/\n
│ └── ShortenerForm.js # Form for URL input\n
│ └── StatsPage.js # Statistics display\n
├── context/\n
│ └── LoggerContext.js # Logging context provider\n
├── utils/\n
│ └── logger.js # Logging wrapper using log.js\n
├── pages/\n
│ └── Home.js # Main page logic\n
├── App.js # Route config\n
├── index.js\n
├── theme.js # Material UI theme\n
Logging_Middleware/\n
└── log.js # Provided middleware\n

