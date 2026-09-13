# Dev Stack Builder

A React app to explore different development technologies and building your own tech stack. There are 12 different technologies to explore including frontend, backend, database and tooling options.


## Technologies Used
  - React.js
  - TypeScript
  - Taiilwind CSS, Daisy UI
  - React-Toastify
  - JSON (for technology data)
  - Vite (build tool)


## Features
1. **Technologies Grid** - 12 technologies loaded from a JSON file, displayed in a responsive grid with icons, badges, ratings, and difficulty levels.

2. **Your Stack Sidebar** - Add technologies to a personal stack panel. Prevents duplicates, disables added buttons, and lets you remove individual items or clear everything at once.

3. **Responsive** - Works on mobile, tablet, and desktop with a sticky navbar, mobile hamburger menu, and adaptive layouts throughout.


## Questions

### 1. What is JSX, and why is it used in React?
*Answer* JSX (JavaScript XML) is a way to write HTML like code inside JavaScript. React uses JSX because it makes writing and understanding the UI much easier. 

### 2. What is the difference between Props and State?
*Answer* Props are used to pass data from a parent component to a child component. The child cant directly change them.
State is data that belongs to a component and can change over time. When the state changes React updtates the UI .

### 3. What does the useState hook do, and where did you use it in this project?
*Answer* useState is used to create and manage state in a React component. I used useState in App.tsx for 'stact', 'technologies' and 'loading'.

### 4. What does the useState hook do, and why did you need it to load JSON data?
*Answer* useEffect lets us run code after the component renders. I needed it to load JSON data and to fetch the data after the component is rendered.

### 5. Why does every item in a .map() list need a unique key prop?
*Answer* React needs a unique key for each item so it can identify which item has been changed, added or removed. 

### 6. What is conditional rendering? Show one place you used it.
*Answer* Conditional rendering is showing something in the UI only when a certein condition is true. I used it in the empty state in Sidebar.tsx "No technologies selected yet."

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
*Answer* Data is passed from parent component to child component using props. The child can send something back to the parent by recieving as a prop and calling that function. 