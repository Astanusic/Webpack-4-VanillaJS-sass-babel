import "./index.scss";

const p = document.createElement("p");
p.textContent = "is it working ?!";
document.body.appendChild(p);

const p2 = document.createElement("p");
const numbers1 = [2, 8, 6, 5];
const numbers2 = [7, 8, 9, 10];
const numbers3 = [...numbers1, ...numbers2];
p2.textContent = numbers3.join(" ");
document.body.appendChild(p2);
