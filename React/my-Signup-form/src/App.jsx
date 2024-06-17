/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import "./App.css";
import { DataProvider, DataContext } from "./context/DataContext";
import SignupForm from "./components/Form/SignupForm";
import DataDisplay from "./components/Display/DataDisplay";
import ThemeToggle from "./components/Theme/ThemeToggle";

function AppContent() {
  const { isDarkTheme } = useContext(DataContext);
  return (
    <div className={`App ${isDarkTheme ? "dark" : "light"}`}>
      <header className="App-header">
        <h1>Signup Form with Data Display</h1>
        <ThemeToggle />
        <SignupForm />
        <DataDisplay />
      </header>
    </div>
  );
}

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

export default App;