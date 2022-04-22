let socket = io();
let messages = document.querySelector("section ul");
let input = document.querySelector("input");
let amounts = document.querySelector("p");
var connectCounter = 0;

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    socket.emit("message", input.value);
    input.value = "";
  }
});

socket.on("message", (message) => {
  messages.appendChild(
    Object.assign(document.createElement("li"), { textContent: message })
  );
  messages.scrollTop = messages.scrollHeight;
});

socket.on("correct", (correct) => {
  messages.appendChild(
    Object.assign(document.createElement("li"), { textContent: correct })
  );
  console.log(correct); // world
});

// socket.on("userConnected", (connectCounter) => {
//   console.log("test");
//   amounts.appendChild(
//     Object.assign(document.createElement("p"), { textContent: connectCounter })
//   );
// });
