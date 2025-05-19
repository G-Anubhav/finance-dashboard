
# Finance Dashboard

A responsive, dark-mode-enabled finance dashboard built with React, Material UI, and React Router. It features budgeting assistance, transaction tracking, financial overviews, charts, and a sleek UI optimized for mobile-first responsiveness.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Assumptions & Decisions](#assumptions--decisions)  
- [Time Spent](#time-spent)  
- [Future Improvements](#future-improvements)  
- [License](#license)  

---

## Demo

*(Optional: Add link or screenshots here)*

---

## Features

- Responsive mobile-first layout  
- Dark mode toggle  
- Sidebar navigation with drawer for mobile  
- Monthly budgeting assistant with progress indicators  
- Interactive charts for expense/income and category breakdown  
- Transactions table with search and filters  
- Calendar tracker and notifications/tips  
- Smooth route transitions with scroll reset  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/finance-dashboard.git
cd finance-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```
3. Run the development server:

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`.

---

## Usage

- Use the sidebar to navigate between the Dashboard and Transactions pages.  
- Toggle dark mode using the button on the top right.  
- On smaller screens, use the hamburger menu to open/close the sidebar drawer.  
- Monitor budgets per category and track spending progress.  
- Explore charts to visualize income, expenses, and category-wise spending.  
- Search and filter transactions for easier tracking.  

---

## Project Structure

```
src/
 ├── components/        # Reusable UI components (Header, Sidebar, BudgetingAssistant, etc.)
 ├── context/           # React Context for global state management (FinanceContext)
 ├── data/              # Mock data files for users, transactions, budgets
 ├── hooks/             # Custom React hooks (if any)
 ├── pages/             # Route-based pages (Dashboard, Transactions)
 ├── theme/             # Material UI theme configuration (light and dark themes)
 ├── App.jsx            # Main app component with routing and theming
 ├── index.jsx          # Entry point
 └── styles.css         # Global styles (scrollbar, body, etc.)
```

---

## Assumptions & Decisions

- **Mock data:** Financial data, user info, and budgets are hardcoded in \`mockData.js\` for demonstration purposes. No backend API integration.  
- **Responsive Design:** Mobile-first approach using Material UI's system and breakpoints. Sidebar switches between permanent drawer on desktop and temporary drawer on mobile.  
- **Dark Mode:** Implemented with MUI theming, toggled via a switch in the header area.  
- **Routing:** React Router v6 is used to manage page navigation. A \`ScrollToTop\` component ensures the window scroll resets on route changes.  
- **Performance:** Components leverage \`useMemo\` and React context to optimize renders where applicable.  
- **UI/UX:** Used Framer Motion for subtle animations to enhance user experience. Progress bars and pie charts provide visual cues for financial data.  
- **Accessibility:** Basic accessibility considerations included (e.g., aria-labels on buttons, semantic HTML).  

---

## Time Spent

| Task                         | Estimated Time | Actual Time  |
| ---------------------------- | -------------- | ------------|
| Project setup & tooling      | 2 hours       | 2 hours      |
| Layout & responsiveness      | 4 hours       | 5 hours      |
| Context & state management   | 2 hours       | 2 hours      |
| Components & UI development  | 6 hours       | 7 hours      |
| Charts & data visualization  | 3 hours       | 3.5 hours    |
| Dark mode implementation     | 1 hour        | 1 hour       |
| Routing & navigation         | 1 hour        | 1 hour       |
| Testing & debugging          | 2 hours       | 2.5 hours    |
| Documentation & cleanup      | 1 hour        | 1 hour       |
| **Total**                   | **22 hours**  | **24 hours** |

---

## Future Improvements

- Connect to real backend APIs for dynamic data  
- Add user authentication and profile management  
- Enhance accessibility and keyboard navigation  
- Add export features for transactions (CSV, PDF)  
- Introduce more granular budget editing and alerts  
- Optimize charts for large datasets and mobile interactions  
- Improve error handling and loading states  

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

