import Bubble from "./Bubble";
import "./css/bubbles.css";

class Bubbles {
  all = [];

  constructor(data = []) {
    this.all = data.map((b, idx) => {
      return new Bubble(idx, b);
    });

    this.$element = document.createElement("div");
    this.$element.className = `bubbles`;

    this.$container = document.createElement("div");
    this.$container.className = `bubbles-container`;
    this.$container.appendChild(this.$element);

    requestAnimationFrame(this.update.bind(this));
  }

  draw($container) {
    $container.innerHTML = "";
    $container.appendChild(this.$container);

    this.$element.innerHTML = "";
    this.all.forEach(bubble => this.$element.appendChild(bubble.$element));
  }

  update() {
    this.all.forEach(bubble => {
      bubble.update();
    });
    this.raf = requestAnimationFrame(this.update.bind(this));
  }
}

export default Bubbles;
