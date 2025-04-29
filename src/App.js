import React from "react";
import Hero from "../src/components/hero/index";
import NavBar from "./components/navbar";
function App() {
  return (
    <div className="section hero-bg">
      <main className="main">
        <NavBar />
        <Hero />
      </main>
    </div>
  );
}

export default App;
