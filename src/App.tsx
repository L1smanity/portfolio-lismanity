import "./App.css";

import Contact from "./components/Contact.tsx";
import Hero from "./components/Hero.tsx";
import Works from "./components/Works.tsx";
import Who from "./components/Who.tsx";

function App() {
  return (
    <div>
      <Hero />
      <Who />
      <Works />

      <Contact />
    </div>
  );
}

export default App;
