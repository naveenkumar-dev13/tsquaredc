import React from "react";
import Hero from "../src/components/hero/index";
import NavBar from "./components/navbar";
import Action from "./components/action";
function App() {
  return (
    <div className="section hero-bg">
      <main className="main">
        <NavBar />
        <Hero />
        <Action />
      </main>
    </div>
  );
}

export default App;
