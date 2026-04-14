const container = document.querySelector("#container");

const newDiv = document.createElement("div");
newDiv.classList.add("content");
newDiv.textContent = "This is the glorious text-content!";

container.appendChild(newDiv);

const newP = document.createElement("p");
newP.style.color = "red";
newP.textContent = "Hey I'm red!";

newDiv.appendChild(newP);

const newHeading3 = document.createElement("h3");
newHeading3.style.color = "blue";
newHeading3.textContent = "I'm a blue h3";

newDiv.appendChild(newHeading3);

const secondNewDiv = document.createElement("div");
secondNewDiv.style.borderColor = "black";
secondNewDiv.style.backgroundColor = "pink";

container.appendChild(secondNewDiv);

const newHeading1 = document.createElement("h1");
newHeading1.textContent = "I'm in a div";

secondNewDiv.appendChild(newHeading1);

const secondNewP = document.createElement("p");
secondNewP.textContent = "ME TOO!";

secondNewDiv.appendChild(secondNewP);