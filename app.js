class roundMenu {
  #modules;
  #outerCircleDiameter;
  #innerCircleDiameter;

  constructor(outerCircleDiameter) {
    this.#outerCircleDiameter = outerCircleDiameter;
    this.#innerCircleDiameter = this.#outerCircleDiameter - 20;
    this.#modules = [
      "r0",
      "r1",
      "r2",
      "r3",
      "r4",
      "r5",
      "r6",
      "r7",
      "r8",
      "r9",
      "r10",
      "r11",
    ];
  }

  render() {
    const container = document.createElement("div");
    container.className = "container";

    const outerCircle = document.createElement("div");
    outerCircle.className = "outerCircle";
    outerCircle.style.width = this.#outerCircleDiameter + "px";
    outerCircle.style.height = this.#outerCircleDiameter + "px";

    const innerCircle = document.createElement("div");
    innerCircle.className = "innerCircle";
    innerCircle.style.width = this.#innerCircleDiameter + "px";
    innerCircle.style.height = this.#innerCircleDiameter + "px";

    const renderModuleSize = Math.round(this.#outerCircleDiameter / 6);
    const offsetModule = this.#outerCircleDiameter / 2 - renderModuleSize / 2;
    const modulesSizeCircle = this.#outerCircleDiameter / 2 - 5;
    console.log(renderModuleSize);

    for (let i = 0; i < this.#modules.length; i++) {
      let renderModule = document.createElement("div");
      renderModule.className = "module";
      renderModule.textContent = this.#modules[i];
      renderModule.style.width = renderModuleSize + "px";
      renderModule.style.height = renderModuleSize + "px";

      let angleEachModuleRadians = (2 / this.#modules.length) * i * Math.PI - Math.PI;


      let left =
        modulesSizeCircle * Math.sin(angleEachModuleRadians) + offsetModule + "px";
      let top = modulesSizeCircle * Math.cos(angleEachModuleRadians) + offsetModule + "px";
      renderModule.style.left = left;
      renderModule.style.top = top;
      outerCircle.append(renderModule);
    }

    outerCircle.append(innerCircle);
    container.append(outerCircle);
    document.body.append(container);
    let angle = 0;
    document.addEventListener("keydown", (event) => {
      if (event.code == "KeyZ") {
        angle = angle + 360 / this.#modules.length;
        outerCircle.style.transform = `rotate(${angle}deg)`;
      }
    });
  }
}

const newMenu = new roundMenu(300);
newMenu.render();

const newMenu2= new roundMenu(360);
newMenu2.render()

const newMenu3 =new roundMenu(300);
newMenu3.render();
function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function randomColor() {
  const colors = [
    "#5776b9",
    "#d9051b",
    "#ffdb03",
    "#42a60b",
    "#fee610",
    "#fc614d",
    "#63bb43",
    "#71a9d8",
  ];
  const index = random(0, colors.length);
  return colors[index];
}
