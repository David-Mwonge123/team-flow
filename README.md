# Team Task Manager

A React + Redux Toolkit app for teams to manage tasks, track progress, assign work to members, and stay organised — all in one dashboard.
Data persists in the browser using localStorage and MockAPI, so tasks and login stay even after refresh.
# Team Contributions
## Farhia | Authentication & User Management
**Branch: feature/authentication**
- Created Login page (pages/Login.jsx)
- Created Register page (pages/Register.jsx)
- Implemented login and logout
- Managed authentication state using Redux (features/auth/authSlice.js)
- Stored user information
- Created Protected Routes (routes/ProtectedRoute.jsx)
- Redirected unauthenticated users to Login
**Deliverable:** Working authentication system.

## Sabihaa | Task Management & CRUD
**Branch: feature/task-crud**
- Created Task Form (components/TaskForm.jsx)
- Created Task Item (components/TaskItem.jsx)
- Created Task List (components/TaskList.jsx)
- Implemented Create, Read, Update, Delete for tasks
- Implemented change task status
- Managed task state using Redux (features/tasks/tasksSlice.js)
- Connected task components to Redux
**Deliverable:** Fully functional task CRUD.

## Tamila | Dashboard & Analytics
**Branch: feature/dashboard**
- Created Dashboard page (pages/Dashboard.jsx)
- Displayed Total, Completed, Pending, Overdue tasks
- Calculated task completion percentage
- Created summary cards (components/TaskStats.jsx)
- Implemented task filtering — All / Pending / Completed (components/FilterButtons.jsx)
- Created progress overview (components/ProgressOverview.jsx)
- Used useMemo for performance
**Deliverable:** Dashboard with progress and statistics.

## Mercy | Team Management & User Interface
**Branch: feature/team-ui**
- Created Navbar (components/Navbar.jsx)
- Displayed team members (components/TeamMembers.jsx)
- Created member assignment (components/MemberSelector.jsx)
- Displayed task assignees on tasks
- Styled the application (Navbar.css, Dashboard.css, TaskComponents.css)
- Created consistent layouts
- Handled responsive design
**Deliverable:** Polished UI with team collaboration features.

## Mwonge | Redux Integration, Testing & Deployment
**Branch: feature/redux-integration**
- Set up Redux store early (redux/store.js) so all members could build on it
- Configured Redux Provider in main.jsx
- Combined auth + tasks reducers
- Integrated all Redux slices
- Implemented data persistence by fetching from MockAPI
- Helped resolve integration conflicts and merge branches
- Tested all features: auth, CRUD, dashboard, team assignment
- Fixed bugs (e.g. missing imports, deployment errors, axios issues)
- Deployed app on Vercel
**Deliverable:** Fully integrated, tested and deployed application.

## Noah | Calendar & Cross-Team Support
**Branch: feature/calendar**

- Created Calendar view for tasks (Calendar.jsx /Calendar.css)
- Displayed tasks by due date on the calendar
- Highlighted overdue and upcoming tasks
- Assisted with cross-team integration and bug fixes across Dashboard and Tasks
- Helped with final testing and UI polish before deployment

**Deliverable:** Working calendar that shows tasks by date + support across integration.




## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
