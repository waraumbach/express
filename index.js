import express, { request, response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

/*app.get("/", (request, response) => {
  response.send("hello");
});*/
app.get("/users", (request, response) => {
  response.json(myUsers);
});

app.get("/users/:userID", (request, response) => {
  const userID = request.params.userID;
  const user = myUsers.find((user) => user.id == userID);
  response.json(user);
});

app.post("/users", (request, response) => {
  console.log(request.body);
  const newUsers = {
    id: myUsers.length + 1,
    name: request.body.name,
    surname: request.body.surname,
    age: parseInt(request.body.age),
  };
  myUsers.push(newUsers);
  response.json(newUsers);
});

app.listen(port, () => {
  console.log("hello express backend");
});
