let socket = io();
let messages = document.querySelector("#chat");
let online = document.querySelector("section h3");
let input = document.querySelector("input");
var connectCounter = 0;

let username = prompt("Please enter your name:", "");

// show online users
const usersEl = document.querySelector("#users");
socket.on("users", ({ users }) => {
  usersEl.innerHTML = "";

  for (const user of users) {
    const li = document.createElement("li");
    li.textContent = user;
    usersEl.appendChild(li);
  }
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    socket.emit("message", {
      username,
      message: input.value,
    });
    input.value = "";
  }
});

function newDefinition() {
  socket.emit("newDefinition");
}

socket.on("connect", () => {
  socket.emit("register username", username);
});

socket.on("message", (message) => {
  console.log(message);
  messages.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: message.username + ": " + message.message,
    })
  );
  messages.scrollTop = messages.scrollHeight;
});

//correct answer
socket.on("correct", (correct) => {
  console.log(correct);
  messages.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: correct.username + ": " + correct.message,
      className: "answer",
    })
  );
  messages.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: "correct",
      className: "answer",
    })
  );
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
