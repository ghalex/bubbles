import "./css/main.css";

import Bubbles from "./../lib";
import "./../lib/css/bubbles.css";

const bubblesData = [
  { s: 1, x: 25, y: 103 }, // softvision
  { s: 0.75, x: 224, y: 0 }, // plenty
  { s: 0.8, x: 320, y: 171 }, // intel
  { s: 1, x: 510, y: 280 }, // bitdefender
  { s: 0.85, x: 599, y: 79 }, // autoliv
  { s: 0.68, x: 160, y: 280 },
  { s: 1, x: 804, y: 234 },
  { s: 0.6, x: 780, y: 0 },
  { s: 1.1, x: 1000, y: 118 },
  { s: 0.9, x: 1171, y: 233 },
  { s: 0.885, x: 1300, y: 40 },
  { s: 0.77, x: 1480, y: 148 },
  { s: 1, x: 1698, y: 285 },
  { s: 0.65, x: 1798, y: 85 }
];

class App {
  $container = null;
  bubbles = null;

  constructor() {
    this.$container = document.getElementById("root");
    this.$container.innerHTML = "";

    this.bubbles = new Bubbles(bubblesData);
    this.bubbles.draw(this.$container);
  }
}

export default App;
