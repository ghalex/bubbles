import n from "noisejs";

const noise = new n.Noise(Math.floor(Math.random() * 64000));

class Bubble {
  index = 0;
  position = { x: 0, y: 0 };
  scale = 1;
  config = {
    speed: 0.5,
    noiseSpeed: 0.006,
    noiseAmount: 4,
    maxWidth: 1800
  };

  $element = null;

  constructor(index, { x, y, s = 1 }, config) {
    this.index = index;
    this.position = { x, y };
    this.scale = s;

    if (config) {
      this.config = { ...this.config, ...config };
    }

    // noise
    this.noiseSeedX = Math.floor(Math.random() * 64000);
    this.noiseSeedY = Math.floor(Math.random() * 64000);

    this.$element = document.createElement("div");
    this.$element.className = `bubble bubble-bg bubble-logo${this.index + 1}`;
    this.$element.style.transform = `translate(${this.position.x}px, ${this.position.y}px) scale(${this.scale})`;
  }

  update() {
    this.noiseSeedX += this.config.noiseSpeed;
    this.noiseSeedY += this.config.noiseSpeed;

    let randomX = noise.simplex2(this.noiseSeedX, 0);
    let randomY = noise.simplex2(this.noiseSeedY, 0);

    this.position.x -= this.config.speed;
    this.xWithNoise = this.position.x + randomX * this.config.noiseAmount;
    this.yWithNoise = this.position.y + randomY * this.config.noiseAmount;

    if (this.position.x < -200) {
      this.position.x = this.config.maxWidth;
    }

    this.$element.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px) scale(${this.scale})`;
  }
}

export default Bubble;
