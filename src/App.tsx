import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Account } from "./pages/Account";
import { useCoins } from "./hooks/useCoins";

const App = () => {
  const { coins, isLoading } = useCoins();

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home coins={coins} isLoading={isLoading} />}
        />
        <Route path="/account" element={<Account />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
