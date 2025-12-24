import React from "react";
import { Navbar, Welcome, Dock } from "#components";
import { Terminal, Safari , Resume , Finder, Contact } from "#windows";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => (
  <main>
    <Navbar />
    <Welcome />
    <Dock />
    <Terminal />
    <Safari />
    <Resume/>
    <Finder />
    <Contact />
    
  </main>
);

export default App;


