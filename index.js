import express from "express";

const app = express();
const port = 3000;

const myUsers = [
  {
    id: 1,
    name: "Mark",
    surname: "Smith",
    age: 80,
  },
  {
    id: 2,
    name: "Marc",
    surname: "Lay",
    age: 60,
  },
  {
    id: 3,
    name: "Jane",
    surname: "Smith",
    age: 50,
  },
  {
    id: 4,
    name: "Jame",
    surname: "Lay",
    age: 40,
  },
];

app.get("/", (request, response) => {
  response.send("hello");
});

app.get("/users", (request, response) => {
  response.json(myUsers);
});

app.get("/users/:userID", (request, response) => {
  const userID = request.params.userID;
  const user = myUsers.find((user) => user.id == userID);
  response.json(user);
});

app.listen(port, () => {
  console.log("welcome");
});
