let socket = io();
let messages = document.querySelector("#chat");
let online = document.querySelector("section h3");
let input = document.querySelector("input");

let username = prompt("Please enter your name:", "");
const usersEl = document.querySelector("#users");

//give usernam to socket
socket.emit("login", { userId: username });

// show who's online
socket.on("online", (online) => {
  usersEl.innerHTML = "";

  for (const user of online) {
    usersEl.appendChild(
      Object.assign(document.createElement("li"), {
        textContent: user,
      })
    );
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

// get username
socket.on("connect", () => {
  socket.emit("registerName", username);
});

socket.on("message", (message) => {
  messages.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: message.username + ": " + message.message,
    })
  );
  messages.scrollTop = messages.scrollHeight;
});

// correct answer
socket.on("correct", (correct) => {
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

function newDefinition() {
  socket.emit("newDefinition");
}

socket.on("newDefinition", (newDefinition) => {
  document.getElementById("definition").innerHTML = newDefinition.definition;
});

socket.on("disconnect", () => {});
