import forrest from "./content/forrest-gump.gif";
import "./mystyles.scss";

const title: string = "Módulo 3 - Webpack";
const text: string = "Hola Mundo!";

const container = document.createElement("div");
const moduleTitle = document.createElement("h1");
moduleTitle.innerText = title;
container.appendChild(moduleTitle);

const helloContainer = document.createElement("div");
helloContainer.className = "blue-bgn";

const helloWorldText = document.createElement("h2");
helloWorldText.innerText = text;
helloContainer.appendChild(helloWorldText);

const img = document.createElement("img");
img.src = forrest;

/* container.appendChild(helloContainer); */
container.appendChild(helloContainer);
container.appendChild(img);
document.getElementById("app-box").appendChild(container);
/* 
<div>
  <h1>Módulo 3 - Webpack</h1>
  <div className={classes["whitesmoke-bgn"]}>
    <h2>Hola Mundo!</h2>
  </div>
  <img>
</div>
 */
