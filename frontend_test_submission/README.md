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
- src/
- ├── components/
- │ └── ShortenerForm.js # Form for URL input
- │ └── StatsPage.js # Statistics display
- ├── context/
- │ └── LoggerContext.js # Logging context provider
- ├── utils/
- │ └── logger.js # Logging wrapper using log.js
- ├── pages/
- │ └── Home.js # Main page logic
- ├── App.js # Route config
- ├── index.js
- ├── theme.js # Material UI theme
- Logging_Middleware/
- └── log.js # Provided middleware

