let socket = io();
let messages = document.querySelector("section ul");
let online = document.querySelector("section h3");
let input = document.querySelector("input");
var connectCounter = 0;

let person = prompt("Please enter your name:", "");
let users = [];
console.log(person);

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    socket.emit("message", input.value);
    input.value = "";
  }
});

function newDefinition() {
  socket.emit("newDefinition");
}

socket.on("message", (message) => {
  messages.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: person + ": " + message,
    })
  );
  messages.scrollTop = messages.scrollHeight;
});

//correct answer
socket.on("correct", (correct) => {
  messages.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: person + ": " + correct,
      className: "answer",
    })
  );
  messages.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: "correct",
      className: "answer",
    })
  );
  console.log(correct);
});

socket.emit("create", "room1");

socket.on("newDefinition", (newDefinition) => {
  console.log(newDefinition);

  document.getElementById("definition").innerHTML = newDefinition.definition;
});

// socket.emit("login", { username: person });

// socket.emit("online", person);

// socket.on("online", () => {
//   console.log("test" + person);
//   online.appendChild(
//     Object.assign(document.createElement("p"), {
//       textContent: person,
//     })
//   );
// });
