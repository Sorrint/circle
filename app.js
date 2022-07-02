const soundImage = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <path class="linesandangles_een" d="M26,3.674L10,8.246v13.933c-0.383-0.135-0.797-0.215-1.231-0.215c-0.342,0-0.693,0.045-1.045,0.139c-1.867,0.5-3.033,2.203-2.604,3.804c0.348,1.299,1.639,2.131,3.112,2.131c0.342,0,0.693-0.045,1.045-0.139C10.792,27.492,11.886,26.292,12,25l0,0V13.754l12-3.429v7.853c-0.383-0.135-0.797-0.215-1.231-0.215c-0.342,0-0.693,0.045-1.045,0.139c-1.867,0.5-3.033,2.203-2.604,3.804c0.348,1.299,1.639,2.131,3.112,2.131c0.342,0,0.693-0.045,1.045-0.139C24.792,23.492,25.886,22.292,26,21l0,0V3.674z M9.789,25.279c-0.219,0.32-0.595,0.571-1.031,0.687c-0.176,0.047-0.353,0.071-0.528,0.071c-0.583,0-1.079-0.273-1.18-0.649c-0.069-0.258,0.049-0.505,0.16-0.667c0.219-0.32,0.595-0.571,1.031-0.687c0.176-0.047,0.353-0.071,0.528-0.071c0.583,0,1.079,0.273,1.18,0.649C10.018,24.869,9.9,25.117,9.789,25.279z M12,11.674v-1.92l12-3.429v1.92L12,11.674z M23.789,21.279c-0.219,0.32-0.595,0.571-1.031,0.687c-0.176,0.047-0.353,0.071-0.528,0.071c-0.583,0-1.079-0.273-1.18-0.649c-0.069-0.258,0.049-0.505,0.16-0.667c0.219-0.32,0.595-0.571,1.031-0.687c0.176-0.047,0.353-0.071,0.528-0.071c0.583,0,1.079,0.273,1.18,0.649C24.018,20.869,23.9,21.117,23.789,21.279z"/></svg>'

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
    const modulesColor = randomColor();

    for (let i = 0; i < this.#modules.length; i++) {
      let renderModule = document.createElement("div");
      renderModule.className = "module";
      renderModule.style.width = renderModuleSize + "px";
      renderModule.style.height = renderModuleSize + "px";

      let moduleText = document.createElement('div');
      moduleText.className = this.#modules[i];
      moduleText.innerHTML = soundImage;

      moduleText.style.fill= modulesColor;
      let angleEachModuleRadians = (2 / this.#modules.length) * i * Math.PI - Math.PI;


      let left =
        modulesSizeCircle * Math.sin(angleEachModuleRadians) + offsetModule + "px";
      let top = modulesSizeCircle * Math.cos(angleEachModuleRadians) + offsetModule + "px";
      renderModule.style.left = left;
      renderModule.style.top = top;

      renderModule.append(moduleText);
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
      for (let i = 0; i<this.#modules.length;i++){
        const moduleInner = document.querySelector(`.${this.#modules[i]}`);
        moduleInner.style.transform = `rotate(-${angle}deg)`

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