const express = require("express");
const { connect } = require("http2");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
const io = require("socket.io")(http);
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(path.resolve("public")));

// const url =
//   "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=dog";
const url = "https://api.urbandictionary.com/v0/random";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    "X-RapidAPI-Key": "2e4e1a6836msh0ce89341146813fp17794cjsne2205c57c485",
  },
};

let correctAnswer = [];

// home page
app.get("/", (req, res) => {
  res.render("home", {});
});
// app.get("/", (req, res) => {
//   fetch(url, options)
//     .then((response) => response.json())
//     .then((data) => {
//       //sort on definition with most thumbs up
//       data.list.sort(({ thumbs_up: a }, { thumbs_up: b }) => b - a);
//       newData.push(data);
//       res.render("home", { data: data.list[0].definition });
//     })
//     .catch((err) => res.send(err));
// });

io.on("connection", (socket) => {
  //create room
  socket.on("create", function (room) {
    socket.join(room);
  });

  console.log("a user connected");

  // io.emit("online");

  // socket.on("register", function (name) {
  //   usernames[socket.id] = name;

  //   console.log(name);
  // });

  socket.on("newDefinition", () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        let answer = data.list[Math.floor(Math.random() * data.list.length)];
        correctAnswer.push(answer);
        io.emit("newDefinition", answer);
      })
      .catch((err) => console.error("error:" + err));
  });

  socket.on("message", (message) => {
    // if word is guessed correct
    let answer = message.toLowerCase();

    console.log(correctAnswer);

    if (correctAnswer.length == 0) {
      io.emit("message", message);
    } else {
      if (answer == correctAnswer[0].word.toLowerCase()) {
        io.emit("correct", message);

        // delete item from array
        correctAnswer.pop();
      } else {
        io.emit("message", message);
      }
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(port, () => {
  console.log("listening on port ", port);
});
